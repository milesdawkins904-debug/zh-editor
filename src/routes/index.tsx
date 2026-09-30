import { createFileRoute } from "@tanstack/react-router";
import { LootEditor } from "@/components/loot-editor";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <LootEditor />;
}
