import type { SkillCategory } from "@/types/content";

export const skillCategories: SkillCategory[] = [
  {
    id: "development",
    skillIds: ["python", "java", "n8n", "microservices", "restApis"],
  },
  {
    id: "aiAutomation",
    skillIds: ["ai", "machineLearning", "generativeAi", "automation"],
  },
  {
    id: "data",
    skillIds: ["sql", "powerBi", "arcgis"],
  },
  {
    id: "devops",
    skillIds: ["git", "github", "gitlab", "cloud"],
  },
  {
    id: "cybersecurity",
    skillIds: ["linux", "offensivePython", "webPentesting"],
    inProgress: true,
  },
];
