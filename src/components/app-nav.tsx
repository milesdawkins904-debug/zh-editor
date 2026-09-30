import { Link, useRouterState } from "@tanstack/react-router";

const LINKS = [
  { to: "/", label: "Loot table" },
  { to: "/clothing", label: "NPC clothing" },
] as const;

export function AppNav() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="mb-4 flex gap-2">
      {LINKS.map((link) => {
        const on = path === link.to;
        return (
          <Link
            key={link.to}
            to={link.to}
            className={`inline-flex min-h-11 items-center rounded-xl px-4 text-sm font-semibold ${on ? "bg-accent text-accent-ink" : "border border-line bg-surface text-muted"}`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
