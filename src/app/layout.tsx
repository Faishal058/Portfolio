import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

import { Navbar } from "@/components/Navbar";
import { PageLoader } from "@/components/PageLoader";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faishal Rahman Ansari",
  description:
    "Portfolio of Faishal Rahman Ansari — Full Stack Developer, AI/ML Enthusiast, and Blockchain Innovator based in Bangalore. B.Tech CSE graduate building intelligent, scalable digital solutions.",
  keywords: [
    "Faishal Rahman Ansari",
    "Full Stack Developer",
    "AI Engineer",
    "Blockchain Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Python",
    "Machine Learning",
  ],
  authors: [{ name: "Faishal Rahman Ansari" }],
  openGraph: {
    title: "Faishal Rahman Ansari",
    description:
      "Full Stack Developer, AI/ML Enthusiast, and Blockchain Innovator based in Bangalore.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground selection:bg-accent-primary/20 selection:text-white antialiased`}
      >
        <PageLoader />
        <Navbar />

        {/* Viewport Ambient Corner Glow Backdrops (Themed & Atmospheric) */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden block">
          {/* Top-Left: Warm Amber in Light Mode, Violet/Purple in Dark Mode */}
          <div className="absolute -top-[12%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-[#e65100]/5 dark:from-violet-600/15 to-transparent blur-[130px] animate-cosmic-glow-left" />
          {/* Bottom-Right: Sunset Red/Sepia in Light Mode, Fuchsia/Purple in Dark Mode */}
          <div className="absolute -bottom-[12%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tl from-[#c2410c]/3 dark:from-fuchsia-600/10 to-transparent blur-[140px] animate-cosmic-glow-right" />
          {/* Subtle side spotlight: Soft Amber in Light Mode, Purple in Dark Mode */}
          <div className="absolute top-[35%] right-[-15%] w-[45vw] h-[45vw] rounded-full bg-[#ff6b00]/2 dark:bg-purple-600/5 blur-[120px]" />
        </div>

        <SmoothScrollProvider>
          <main className="relative min-h-screen">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
