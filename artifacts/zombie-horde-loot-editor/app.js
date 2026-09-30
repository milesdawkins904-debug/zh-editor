(() => {
  const ITEM_ICON = (shortname) =>
    `https://wiki.rustclash.com/img/items180/${encodeURIComponent(shortname)}.png`;

  const SKIN_PREVIEWS = {
    3205195553: "https://images.steamusercontent.com/ugc/2506889599733075752/C686568A187E8FA504911825951F88D1E9A78884/",
    3241601264: "https://images.steamusercontent.com/ugc/2471989872562944227/F0E9792B79326AC00FE9DE6722C9F3E2D13A01A6/",
    3242051288: "https://images.steamusercontent.com/ugc/2471990508178575145/5836ED98F561E8D22F757ED906AB3F29776337FA/",
    3242051538: "https://images.steamusercontent.com/ugc/2471990508166995052/66E5EC179F7271547E43D7BC33DC36DAD1C6B84D/",
    3242051715: "https://images.steamusercontent.com/ugc/2471990508166996481/6E8A70B4E83FD29E756053B3D1C7F46F86D581AC/",
    3242051845: "https://images.steamusercontent.com/ugc/2471990508166997686/AFFE99114B61B501B9791A72FBFF3B240C78483D/",
    3242052032: "https://images.steamusercontent.com/ugc/2471990508166998884/26370EA79F3B8D9C8AC15D0C67895EACB9B5D84C/",
    3242052177: "https://images.steamusercontent.com/ugc/2471990508167000031/1A9D23276F80DF1C36497A3000A0FB0A9D260E54/",
    3242053234: "https://images.steamusercontent.com/ugc/2471990508167007929/E017B84D7C403BAEBED17CFA38E0CDA59349D706/",
    3242054597: "https://images.steamusercontent.com/ugc/2471990508167019217/4E8AD8659B6249A26EF637DE5A9B0D7DEB2849E4/",
    3242055401: "https://images.steamusercontent.com/ugc/2471990508167025888/29DE4D2EF6C7663D07F84DA9B3BAD4E225242DAC/",
    3255499539: "https://images.steamusercontent.com/ugc/2450599769593402675/589C9C28B17CD6FCFAA2263E2887484848088EBF/",
  };

  const KEYS = {
    dropInv: "Drop inventory on death instead of random loot",
    dropMurder: "Drop default murderer loot on death instead of random loot",
    alpha: "Drop one of the specified AlphaLoot profiles as loot",
    table: "Random loot table",
    min: "Minimum amount of items to spawn",
    max: "Maximum amount of items to spawn",
    list: "List",
    blacklist: "Dropped inventory item blacklist (shortnames)",
  };

  const blankItem = () => ({
    Shortname: "scrap",
    ItemName: "",
    Minimum: 1,
    Maximum: 1,
    SkinID: 0,
    "Spawn as blueprint": false,
    "Probability (0.0 - 1.0)": 0.25,
    "Minimum condition (0.0 - 1.0)": 1.0,
    "Maximum condition (0.0 - 1.0)": 1.0,
    "Spawn with": null,
  });

  const state = {
    config: null,
    filter: "",
    category: "all",
    sort: "chance-desc",
    selected: new Set(),
    dirty: false,
    pickerQ: "",
    pickerCat: "all",
    extraSkinMap: JSON.parse(localStorage.getItem("zh-skin-previews") || "{}"),
  };

  const $ = (id) => document.getElementById(id);
  const catalog = () => window.RUST_ITEMS || [];
  const byShort = () => {
    const m = new Map();
    for (const it of catalog()) m.set(it.s, it);
    return m;
  };

  function loot() {
    return state.config["Loot Table"];
  }
  function table() {
    return loot()[KEYS.table];
  }
  function items() {
    return table()[KEYS.list];
  }

  function displayName(it) {
    if (it.ItemName) return it.ItemName;
    const hit = byShort().get(it.Shortname);
    return hit ? hit.n : it.Shortname;
  }

  function skinUrl(id) {
    const n = Number(id) || 0;
    if (!n) return "";
    return state.extraSkinMap[n] || SKIN_PREVIEWS[n] || "";
  }

  function rememberSkin(id, url) {
    if (!id || !url) return;
    state.extraSkinMap[id] = url;
    localStorage.setItem("zh-skin-previews", JSON.stringify(state.extraSkinMap));
  }

  function markDirty(v = true) {
    state.dirty = v;
    $("brandSub").classList.toggle("dirty", v);
    renderStats();
  }

  function toast(msg) {
    const el = $("toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => el.classList.remove("show"), 2200);
  }

  function expectedCount() {
    const list = items();
    const exp = list.reduce((s, it) => s + (Number(it["Probability (0.0 - 1.0)"]) || 0), 0);
    return exp;
  }

  function clone(o) {
    return JSON.parse(JSON.stringify(o));
  }

  function normalizeLoaded(cfg) {
    if (!cfg || !cfg["Loot Table"]) throw new Error("Not a ZombieHorde config — missing Loot Table");
    const L = cfg["Loot Table"];
    L[KEYS.table] = L[KEYS.table] || { [KEYS.min]: 1, [KEYS.max]: 1, [KEYS.list]: [] };
    L[KEYS.table][KEYS.list] = L[KEYS.table][KEYS.list] || [];
    L[KEYS.alpha] = L[KEYS.alpha] || [];
    L[KEYS.blacklist] = L[KEYS.blacklist] || [];
    L[KEYS.dropInv] = !!L[KEYS.dropInv];
    L[KEYS.dropMurder] = !!L[KEYS.dropMurder];
    for (const it of L[KEYS.table][KEYS.list]) {
      if (it.ItemName == null) it.ItemName = "";
      if (it.SkinID == null) it.SkinID = 0;
      if (it["Probability (0.0 - 1.0)"] == null) it["Probability (0.0 - 1.0)"] = 1;
      if (it.Minimum == null) it.Minimum = 1;
      if (it.Maximum == null) it.Maximum = 1;
      if (it["Minimum condition (0.0 - 1.0)"] == null) it["Minimum condition (0.0 - 1.0)"] = 1;
      if (it["Maximum condition (0.0 - 1.0)"] == null) it["Maximum condition (0.0 - 1.0)"] = 1;
      if (it["Spawn as blueprint"] == null) it["Spawn as blueprint"] = false;
      if (!("Spawn with" in it)) it["Spawn with"] = null;
    }
    return cfg;
  }

  function loadConfig(cfg, label) {
    state.config = normalizeLoaded(clone(cfg));
    state.selected.clear();
    markDirty(false);
    renderAll();
    toast(`Loaded ${label || "config"} — ${items().length} loot rows`);
  }

  function filtered() {
    const q = state.filter.trim().toLowerCase();
    let list = items().map((it, i) => ({ it, i }));
    if (state.category !== "all") {
      const map = byShort();
      list = list.filter(({ it }) => (map.get(it.Shortname)?.c || "Misc") === state.category);
    }
    if (q) {
      list = list.filter(({ it }) => {
        const blob = `${it.Shortname} ${it.ItemName || ""} ${displayName(it)} ${it.SkinID}`.toLowerCase();
        return blob.includes(q);
      });
    }
    const [key, dir] = state.sort.split("-");
    list.sort((a, b) => {
      let av, bv;
      if (key === "chance") {
        av = Number(a.it["Probability (0.0 - 1.0)"]) || 0;
        bv = Number(b.it["Probability (0.0 - 1.0)"]) || 0;
      } else if (key === "name") {
        av = displayName(a.it).toLowerCase();
        bv = displayName(b.it).toLowerCase();
      } else if (key === "short") {
        av = a.it.Shortname;
        bv = b.it.Shortname;
      } else if (key === "skin") {
        av = Number(a.it.SkinID) || 0;
        bv = Number(b.it.SkinID) || 0;
      } else {
        av = a.i;
        bv = b.i;
      }
      if (av < bv) return dir === "asc" ? -1 : 1;
      if (av > bv) return dir === "asc" ? 1 : -1;
      return 0;
    });
    return list;
  }

  function renderStats() {
    const list = items() || [];
    const skins = list.filter((x) => Number(x.SkinID) > 0).length;
    const named = list.filter((x) => x.ItemName).length;
    $("statRows").textContent = list.length;
    $("statSkins").textContent = skins;
    $("statNamed").textContent = named;
    $("statExpected").textContent = expectedCount().toFixed(2);
    const mn = table()[KEYS.min];
    const mx = table()[KEYS.max];
    $("statRoll").textContent = `${mn}–${mx}`;
  }

  function chanceChip(p) {
    const cls = p >= 0.5 ? "hi" : p >= 0.15 ? "mid" : "lo";
    return `<span class="chip ${cls}">${Math.round(p * 100)}%</span>`;
  }

  function iconHtml(it) {
    const sid = Number(it.SkinID) || 0;
    const preview = skinUrl(sid);
    const skinBit = sid
      ? preview
        ? `<img class="skin-badge" src="${preview}" alt="skin" title="Workshop ${sid}">`
        : `<span class="skin-dot" title="Workshop ${sid}">SK</span>`
      : "";
    return `<div class="icon-stack">
      <img src="${ITEM_ICON(it.Shortname)}" alt="" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid'">
      <div class="icon-fallback" style="display:none">?</div>
      ${skinBit}
    </div>`;
  }

  function renderTable() {
    const rows = filtered();
    const html = rows
      .map(({ it, i }) => {
        const p = Number(it["Probability (0.0 - 1.0)"]) || 0;
        const sel = state.selected.has(i) ? "selected" : "";
        const custom = it.ItemName ? `<div class="custom-name">${escapeHtml(it.ItemName)}</div>` : "";
        return `<tr class="${sel}" data-i="${i}">
          <td><input type="checkbox" ${sel ? "checked" : ""} data-sel="${i}"></td>
          <td>
            <div class="item-meta">
              ${iconHtml(it)}
              <div class="names">
                <b>${escapeHtml(displayName(it))}</b>
                ${custom}
                <code>${escapeHtml(it.Shortname)}${it["Spawn as blueprint"] ? " · BP" : ""}</code>
              </div>
            </div>
          </td>
          <td>
            <div class="prob">
              <input type="range" min="0" max="1" step="0.01" value="${p}" data-prob="${i}">
              ${chanceChip(p)}
            </div>
          </td>
          <td>
            <input class="num" type="number" min="0" value="${it.Minimum}" data-min="${i}">
            –
            <input class="num" type="number" min="0" value="${it.Maximum}" data-max="${i}">
          </td>
          <td>
            <input class="num" style="width:110px" type="number" min="0" value="${it.SkinID || 0}" data-skin="${i}">
            ${Number(it.SkinID) ? `<a class="btn small ghost" target="_blank" href="https://steamcommunity.com/sharedfiles/filedetails/?id=${it.SkinID}">workshop</a>` : ""}
          </td>
          <td class="row-actions">
            <button class="btn small" data-edit="${i}">Edit</button>
            <button class="btn small" data-dup="${i}">Copy</button>
            <button class="btn small danger" data-del="${i}">✕</button>
          </td>
        </tr>`;
      })
      .join("");
    $("tbody").innerHTML = html || `<tr><td colspan="6"><div class="empty">No items match this filter.</div></td></tr>`;
    $("shownCount").textContent = `${rows.length} shown`;
  }

  function renderSidebar() {
    const L = loot();
    $("optDropInv").checked = !!L[KEYS.dropInv];
    $("optDropMurder").checked = !!L[KEYS.dropMurder];
    $("optMin").value = table()[KEYS.min];
    $("optMax").value = table()[KEYS.max];
    $("optAlpha").value = (L[KEYS.alpha] || []).join("\n");
    const bl = L[KEYS.blacklist] || [];
    $("blacklist").innerHTML = bl
      .map((s) => `<span class="tag" data-bl="${escapeHtml(s)}" title="Click to remove">${escapeHtml(s)}</span>`)
      .join("");
    $("blCount").textContent = `${bl.length} entries`;
  }

  function renderAll() {
    renderStats();
    renderSidebar();
    renderTable();
    fillCategories();
  }

  function fillCategories() {
    const cats = ["all", ...new Set(catalog().map((x) => x.c))].sort((a, b) =>
      a === "all" ? -1 : a.localeCompare(b)
    );
    const make = (sel, current) => {
      sel.innerHTML = cats
        .map((c) => `<option value="${c}" ${c === current ? "selected" : ""}>${c === "all" ? "All categories" : c}</option>`)
        .join("");
    };
    make($("filterCat"), state.category);
    make($("pickerCat"), state.pickerCat);
  }

  function escapeHtml(s) {
    return String(s ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function openModal(id, show = true) {
    $(id).classList.toggle("show", show);
  }

  function openEditor(i) {
    const it = items()[i];
    $("edIndex").value = i;
    $("edShort").value = it.Shortname;
    $("edName").value = it.ItemName || "";
    $("edMin").value = it.Minimum;
    $("edMax").value = it.Maximum;
    $("edSkin").value = it.SkinID || 0;
    $("edProb").value = it["Probability (0.0 - 1.0)"];
    $("edCmin").value = it["Minimum condition (0.0 - 1.0)"];
    $("edCmax").value = it["Maximum condition (0.0 - 1.0)"];
    $("edBp").checked = !!it["Spawn as blueprint"];
    const sw = it["Spawn with"];
    $("edSpawnWith").checked = !!sw;
    $("edSwWrap").style.display = sw ? "grid" : "none";
    $("edSwShort").value = sw?.Shortname || "";
    $("edSwMin").value = sw?.Minimum ?? 1;
    $("edSwMax").value = sw?.Maximum ?? 1;
    $("edSwSkin").value = sw?.SkinID ?? 0;
    $("edPreview").src = skinUrl(it.SkinID) || ITEM_ICON(it.Shortname);
    $("edItemIcon").src = ITEM_ICON(it.Shortname);
    $("edKnown").textContent = byShort().has(it.Shortname)
      ? `Catalog: ${byShort().get(it.Shortname).n} · ${byShort().get(it.Shortname).c}`
      : "Shortname not in catalog — still valid if Rust knows it.";
    openModal("editModal", true);
  }

  function saveEditor() {
    const i = Number($("edIndex").value);
    const it = items()[i];
    it.Shortname = $("edShort").value.trim();
    it.ItemName = $("edName").value.trim();
    it.Minimum = num($("edMin").value, 1);
    it.Maximum = num($("edMax").value, it.Minimum);
    it.SkinID = num($("edSkin").value, 0);
    it["Probability (0.0 - 1.0)"] = clamp(Number($("edProb").value), 0, 1);
    it["Minimum condition (0.0 - 1.0)"] = clamp(Number($("edCmin").value), 0, 1);
    it["Maximum condition (0.0 - 1.0)"] = clamp(Number($("edCmax").value), 0, 1);
    it["Spawn as blueprint"] = $("edBp").checked;
    if ($("edSpawnWith").checked && $("edSwShort").value.trim()) {
      it["Spawn with"] = {
        Shortname: $("edSwShort").value.trim(),
        Minimum: num($("edSwMin").value, 1),
        Maximum: num($("edSwMax").value, 1),
        SkinID: num($("edSwSkin").value, 0),
        "Spawn as blueprint": false,
        "Probability (0.0 - 1.0)": 1.0,
        "Spawn with": null,
      };
    } else {
      it["Spawn with"] = null;
    }
    markDirty();
    renderAll();
    openModal("editModal", false);
  }

  function num(v, d = 0) {
    const n = Number(v);
    return Number.isFinite(n) ? n : d;
  }
  function clamp(n, a, b) {
    if (!Number.isFinite(n)) return a;
    return Math.min(b, Math.max(a, n));
  }

  function addItem(partial) {
    const it = Object.assign(blankItem(), partial || {});
    items().push(it);
    markDirty();
    renderAll();
    toast(`Added ${it.Shortname}`);
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(state.config, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "ZombieHorde.json";
    a.click();
    URL.revokeObjectURL(a.href);
    markDirty(false);
    toast("Downloaded ZombieHorde.json — drop it on the server oxide/config folder");
  }

  function copyLootOnly() {
    const text = JSON.stringify(state.config["Loot Table"], null, 2);
    navigator.clipboard.writeText(text).then(
      () => toast("Loot Table JSON copied"),
      () => toast("Clipboard blocked")
    );
  }

  function applySidebar() {
    loot()[KEYS.dropInv] = $("optDropInv").checked;
    loot()[KEYS.dropMurder] = $("optDropMurder").checked;
    table()[KEYS.min] = num($("optMin").value, 1);
    table()[KEYS.max] = Math.max(table()[KEYS.min], num($("optMax").value, 1));
    loot()[KEYS.alpha] = $("optAlpha")
      .value.split(/\n+/)
      .map((s) => s.trim())
      .filter(Boolean);
    markDirty();
    renderStats();
  }

  function renderPicker() {
    const q = state.pickerQ.trim().toLowerCase();
    let list = catalog();
    if (state.pickerCat !== "all") list = list.filter((x) => x.c === state.pickerCat);
    if (q) list = list.filter((x) => `${x.s} ${x.n}`.toLowerCase().includes(q));
    list = list.slice(0, 120);
    $("pickerGrid").innerHTML = list
      .map(
        (x) => `<button class="pick" data-add="${escapeHtml(x.s)}">
          <img src="${ITEM_ICON(x.s)}" alt="" onerror="this.style.opacity=.2">
          <span><b>${escapeHtml(x.n)}</b><br><code>${escapeHtml(x.s)}</code></span>
        </button>`
      )
      .join("");
    $("pickerHint").textContent = `${list.length} shown${q || state.pickerCat !== "all" ? " (filtered)" : ""} · ${catalog().length} in catalog`;
  }

  function bind() {
    $("fileInput").addEventListener("change", (e) => {
      const f = e.target.files[0];
      if (f) readFile(f);
      e.target.value = "";
    });
    document.body.addEventListener("dragover", (e) => {
      e.preventDefault();
      $("dropzone").classList.add("hot");
    });
    document.body.addEventListener("dragleave", () => $("dropzone").classList.remove("hot"));
    document.body.addEventListener("drop", (e) => {
      e.preventDefault();
      $("dropzone").classList.remove("hot");
      const f = e.dataTransfer.files[0];
      if (f && f.name.endsWith(".json")) readFile(f);
    });

    $("btnLoad").addEventListener("click", () => $("fileInput").click());
    $("btnSave").addEventListener("click", exportJson);
    $("btnCopy").addEventListener("click", copyLootOnly);
    $("btnReset").addEventListener("click", () => {
      if (confirm("Reload the bundled FAFO ZombieHorde.json and discard edits?")) {
        loadConfig(window.DEFAULT_ZH_CONFIG, "bundled config");
      }
    });
    $("btnAdd").addEventListener("click", () => {
      openModal("pickerModal", true);
      renderPicker();
    });
    $("btnQuick").addEventListener("click", () => {
      const short = prompt("Shortname to add (e.g. scrap, syringe.medical)");
      if (!short) return;
      const hit = byShort().get(short.trim());
      addItem({ Shortname: short.trim(), ItemName: hit ? "" : "" });
    });

    $("filterQ").addEventListener("input", (e) => {
      state.filter = e.target.value;
      renderTable();
    });
    $("filterCat").addEventListener("change", (e) => {
      state.category = e.target.value;
      renderTable();
    });
    $("filterSort").addEventListener("change", (e) => {
      state.sort = e.target.value;
      renderTable();
    });

    ["optDropInv", "optDropMurder", "optMin", "optMax", "optAlpha"].forEach((id) => {
      $(id).addEventListener("change", applySidebar);
      $(id).addEventListener("input", applySidebar);
    });

    $("blAdd").addEventListener("click", () => {
      const s = $("blInput").value.trim();
      if (!s) return;
      const list = loot()[KEYS.blacklist];
      if (!list.includes(s)) list.push(s);
      $("blInput").value = "";
      markDirty();
      renderSidebar();
    });
    $("blacklist").addEventListener("click", (e) => {
      const s = e.target.getAttribute("data-bl");
      if (!s) return;
      loot()[KEYS.blacklist] = loot()[KEYS.blacklist].filter((x) => x !== s);
      markDirty();
      renderSidebar();
    });

    $("tbody").addEventListener("input", (e) => {
      const t = e.target;
      const list = items();
      if (t.dataset.prob != null) {
        const i = Number(t.dataset.prob);
        list[i]["Probability (0.0 - 1.0)"] = clamp(Number(t.value), 0, 1);
        t.parentElement.querySelector(".chip").outerHTML = chanceChip(list[i]["Probability (0.0 - 1.0)"]);
        markDirty();
        renderStats();
      }
      if (t.dataset.min != null) {
        list[Number(t.dataset.min)].Minimum = num(t.value, 1);
        markDirty();
      }
      if (t.dataset.max != null) {
        list[Number(t.dataset.max)].Maximum = num(t.value, 1);
        markDirty();
      }
      if (t.dataset.skin != null) {
        list[Number(t.dataset.skin)].SkinID = num(t.value, 0);
        markDirty();
        renderTable();
      }
    });
    $("tbody").addEventListener("change", (e) => {
      if (e.target.dataset.sel != null) {
        const i = Number(e.target.dataset.sel);
        if (e.target.checked) state.selected.add(i);
        else state.selected.delete(i);
        e.target.closest("tr").classList.toggle("selected", e.target.checked);
      }
    });
    $("tbody").addEventListener("click", (e) => {
      const btn = e.target.closest("button");
      if (!btn) return;
      if (btn.dataset.edit != null) openEditor(Number(btn.dataset.edit));
      if (btn.dataset.dup != null) {
        const i = Number(btn.dataset.dup);
        items().splice(i + 1, 0, clone(items()[i]));
        markDirty();
        renderAll();
      }
      if (btn.dataset.del != null) {
        items().splice(Number(btn.dataset.del), 1);
        markDirty();
        renderAll();
      }
    });

    $("btnBulkChance").addEventListener("click", () => {
      if (!state.selected.size) return toast("Select rows first");
      const raw = prompt("Set probability for selected (0–1 or 0–100)", "0.25");
      if (raw == null) return;
      let p = Number(raw);
      if (p > 1) p = p / 100;
      p = clamp(p, 0, 1);
      for (const i of state.selected) items()[i]["Probability (0.0 - 1.0)"] = p;
      markDirty();
      renderAll();
    });
    $("btnBulkDel").addEventListener("click", () => {
      if (!state.selected.size) return toast("Select rows first");
      if (!confirm(`Delete ${state.selected.size} rows?`)) return;
      const drop = state.selected;
      const next = items().filter((_, i) => !drop.has(i));
      table()[KEYS.list] = next;
      state.selected.clear();
      markDirty();
      renderAll();
    });
    $("btnSelAll").addEventListener("click", () => {
      filtered().forEach(({ i }) => state.selected.add(i));
      renderTable();
    });
    $("btnSelNone").addEventListener("click", () => {
      state.selected.clear();
      renderTable();
    });

    $("edSave").addEventListener("click", saveEditor);
    $("edCancel").addEventListener("click", () => openModal("editModal", false));
    $("pickerClose").addEventListener("click", () => openModal("pickerModal", false));
    $("pickerQ").addEventListener("input", (e) => {
      state.pickerQ = e.target.value;
      renderPicker();
    });
    $("pickerCat").addEventListener("change", (e) => {
      state.pickerCat = e.target.value;
      renderPicker();
    });
    $("pickerGrid").addEventListener("click", (e) => {
      const b = e.target.closest("[data-add]");
      if (!b) return;
      addItem({ Shortname: b.dataset.add });
    });
    $("edSpawnWith").addEventListener("change", () => {
      $("edSwWrap").style.display = $("edSpawnWith").checked ? "grid" : "none";
    });
    $("edShort").addEventListener("input", () => {
      $("edItemIcon").src = ITEM_ICON($("edShort").value.trim());
    });
    $("edLookup").addEventListener("click", lookupSkin);

    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        exportJson();
      }
    });
  }

  function readFile(file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        loadConfig(JSON.parse(reader.result), file.name);
      } catch (err) {
        alert("Could not parse JSON: " + err.message);
      }
    };
    reader.readAsText(file);
  }

  async function lookupSkin() {
    const id = num($("edSkin").value, 0);
    if (!id) return toast("Enter a workshop SkinID first");
    $("edLookup").disabled = true;
    $("edLookup").textContent = "Looking up…";
    try {
      const page = `https://steamcommunity.com/sharedfiles/filedetails/?id=${id}`;
      const proxies = [
        `https://api.allorigins.win/raw?url=${encodeURIComponent(page)}`,
        `https://corsproxy.io/?${encodeURIComponent(page)}`,
      ];
      let html = "";
      for (const url of proxies) {
        try {
          const res = await fetch(url);
          if (res.ok) {
            html = await res.text();
            if (html && html.includes("og:image")) break;
          }
        } catch (_) {}
      }
      const m = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
      if (m && m[1]) {
        rememberSkin(id, m[1]);
        $("edPreview").src = m[1];
        toast("Skin preview saved for this browser");
        renderTable();
      } else {
        toast("Could not fetch preview — workshop link still works");
        window.open(page, "_blank");
      }
    } finally {
      $("edLookup").disabled = false;
      $("edLookup").textContent = "Lookup skin icon";
    }
  }

  function init() {
    bind();
    loadConfig(window.DEFAULT_ZH_CONFIG, "bundled FAFO config");
  }

  document.addEventListener("DOMContentLoaded", init);
})();
