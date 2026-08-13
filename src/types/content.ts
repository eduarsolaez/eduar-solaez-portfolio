import type { LucideIcon } from "lucide-react";

export type SkillCategoryId =
  | "development"
  | "aiAutomation"
  | "data"
  | "devops"
  | "cybersecurity";

export interface SkillCategory {
  id: SkillCategoryId;
  skillIds: string[];
  inProgress?: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  period: string;
}

export interface ProjectItem {
  id: string;
  icon: LucideIcon;
}

export interface EducationItem {
  id: string;
  institution: string;
}

export interface CybersecurityTrack {
  id: string;
  stage: "foundations" | "inProgress";
}
