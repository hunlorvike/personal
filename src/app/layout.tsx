import { ThemeProvider } from "wp/components/providers/theme-provider";
import type { Metadata, Viewport } from "next";
import "../assets/styles/globals.css";
import { siteConfig } from "wp/config/site";
import { cn } from "wp/lib/utils";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: "Nguyễn Việt Hưng", url: "" }],
  creator: "Nguyễn Việt Hưng",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <main className="mx-auto w-full mb-16 max-w-screen-sm overflow-x-hidden py-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
