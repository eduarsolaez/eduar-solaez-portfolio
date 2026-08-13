import { Workflow, Server, MonitorSmartphone, Smartphone, Map } from "lucide-react";
import type { ProjectItem } from "@/types/content";

export const projects: ProjectItem[] = [
  { id: "n8nAutomation", icon: Workflow },
  { id: "microservices", icon: Server },
  { id: "desktopAutomation", icon: MonitorSmartphone },
  { id: "androidBot", icon: Smartphone },
  { id: "gisDashboards", icon: Map },
];
