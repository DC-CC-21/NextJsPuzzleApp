import { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Puzzle App",
        short_name: "Puzzle App",
        theme_color: "#000000",
        background_color: "#ffffff",
        display: "standalone",
        orientation: "landscape",
        scope: "/",
        start_url: "/",
        icons: [
            {
                src: "./icons/192x192x1.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "./icons/512x512x1.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: "./icons/384x384x2-2x.png",
                sizes: "384x384",
                type: "image/png",
            },
            {
                src: "./icons/1024x1024x2-2x.png",
                sizes: "1024x1024",
                type: "image/png",
            },
        ],
    };
}
