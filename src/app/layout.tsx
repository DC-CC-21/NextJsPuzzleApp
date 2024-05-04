import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

// !
const APP_NAME = "Puzzle App";
const APP_DEFAULT_TITLE = "Puzzle App";
const APP_TITLE_TEMPLATE = "%s - Puzzle App";
const APP_DESCRIPTION = "Puzzle App!";
// !

export const metadata: Metadata = {
    applicationName: APP_NAME,
    title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: APP_DEFAULT_TITLE,
    },
};

export const viewport: Viewport = {
    themeColor: "#000000",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`flex min-h-[100vh] flex-col ${inter.className}`}
                suppressHydrationWarning={true}
            >
                {children}
                <SpeedInsights />
            </body>
        </html>
    );
}
