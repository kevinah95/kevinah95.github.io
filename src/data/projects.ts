export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Hacienda CLI",
    techs: ["Go", "Cosign", "MkDocs", "Medium Story"],
    link: "https://kevinah95.github.io/hacienda",
  },
  {
    title: "Portfolio",
    techs: ["Astro"],
    link: "/",
  },
  {
    title: "Hecho en Costa Rica",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
