import { MetadataRoute } from "next";
import { projects } from "./data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://web-portfolio-omega-brown.vercel.app";

  // Static routes
  const routes = ["", "/projects", "/about", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic project routes
  const projectRoutes = projects.flatMap((category) =>
    category.projects.map((project) => ({
      url: `${baseUrl}/project/${category.id}/${project.id}`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }))
  );

  return [...routes, ...projectRoutes];
}
