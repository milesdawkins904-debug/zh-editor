import { createFileRoute } from "@tanstack/react-router";
import { ClothingEditor } from "@/components/clothing-editor";

export const Route = createFileRoute("/clothing")({ component: ClothingEditor });
