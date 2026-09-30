# Zombie Horde Loot Editor

Local web editor for the `Loot Table` section of Chaos/uMod **ZombieHorde.json**.

Bundled with the current FAFO config so it opens with your live table (114 rows, custom ZHH skins, blacklist, min/max 4–5).

## Use it

1. Open `index.html` in Chrome / Edge / Firefox.
2. Tweak chances, stacks, skins, names.
3. **Download ZombieHorde.json** and drop it on the server at `oxide/config/ZombieHorde.json`.
4. `o.reload ZombieHorde` (or Carbon equivalent).

You can also drag an existing `ZombieHorde.json` onto the page. The editor keeps Horde Options, loadouts, monuments, and profiles untouched and only writes the Loot Table fields back into that full file.

## What the sliders mean

ZombieHorde does **not** pick N weighted items from the list.

On each corpse it:

1. Picks how many slots to fill (`Minimum amount of items to spawn` … `Maximum`).
2. For candidates, rolls 0–1 and keeps a row if `Probability >= roll`.

So `0.70` is common, `0.05` is rare. Sum of probabilities is only a hint, not a guarantee of that many drops.

Row **Min / Max** is stack size for that item.

## Skin icons

- Default item art: `wiki.rustclash.com` by shortname.
- Custom ZHH workshop skins already in this table have preview images baked in.
- New SkinIDs: open the row → **Lookup skin icon** (internet) or use the Steam workshop link. Preview URLs stay in browser storage and are **not** saved into the plugin config.

If you have more custom workshop IDs you want baked in permanently, send the SkinID list.

## Files

```
index.html
styles.css
app.js
data/items.js            Rust shortname catalog
data/default-config.js   Your current ZombieHorde.json
data/ZombieHorde.json    Same file, raw
```

No install, no server required. Ctrl+S downloads the config.
