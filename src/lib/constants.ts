import { ProjectProps } from "wp/components/project";
import { SocialLinksProps } from "wp/components/socials";

export const projects = [
  {
    title: "sb-boilerplate",
    description: "Spring Boot boilerplate for quick project setup.",
    href: "https://github.com/hunlorvike/sb-boilerplate",
    status: "maintained",
  },
  {
    title: "ts-node-express",
    description: "Express boilerplate using TypeScript.",
    href: "https://github.com/hunlorvike/ts-node-express",
    status: "maintained",
  },
  {
    title: "servlet-boilerplate",
    description: "Java servlet boilerplate for web projects.",
    href: "https://github.com/hunlorvike/servlet-boilerplate",
    status: "maintained",
  },
  {
    title: "ejb-boilerplate",
    description: "EJB boilerplate for enterprise applications.",
    href: "https://github.com/hunlorvike/ejb-boilerplate",
    status: "maintained",
  },
  {
    title: "fucking-programming",
    description:
      "Comprehensive guide covering algorithms, data structures, design patterns, system design, and interview prep.",
    href: "https://github.com/hunlorvike/fucking-programming",
    status: "maintained",
  },
] as ProjectProps[];

export const socialLinks = [
  {
    title: "Email",
    href: "mailto:viethung0106.developer@gmail.com",
  },

  {
    title: "Github",
    href: "https://github.com/hunlorvike",
  },
] as SocialLinksProps[];
