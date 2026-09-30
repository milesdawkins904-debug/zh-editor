import { createFileRoute } from "@tanstack/react-router";
import { SettingsEditor } from "@/components/settings-editor";

export const Route = createFileRoute("/settings")({ component: SettingsEditor });
