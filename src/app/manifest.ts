import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} – ${site.tagline}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#080b14",
    theme_color: "#080b14",
    lang: "nl-NL",
    categories: ["entertainment", "multimedia"],
    icons: [
      { src: "/logo.svg", sizes: "any", type: "image/svg+xml" }, { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
