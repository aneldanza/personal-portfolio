export type Project = {
  id: number;
  title: string;
  desc: () => JSX.Element;
  img: string;
  tools: string[];
  link: string;
  repo: string;
};
