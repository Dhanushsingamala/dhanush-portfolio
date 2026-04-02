import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Sora } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dhanush-portfolio-seven-jade.vercel.app"),
  title: "Dhanush Singamala | React Developer | CRM Builder",
  description:
    "Portfolio of Dhanush Singamala, a React Developer and CRM Builder focused on scalable web applications, dashboards, and modern frontend systems.",
  verification: {
    google: "KoDqLqmE9yJQ1G1G_ebp0sSPC2OaLyKWtCpq8odWiEU",
  },
  openGraph: {
    title: "Dhanush Singamala | React Developer | CRM Builder",
    description:
      "Explore projects, skills, and professional background of Dhanush Reddy.",
    url: "https://dhanush-portfolio-seven-jade.vercel.app",
    siteName: "Dhanush Singamala  Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhanush Singamala | React Developer | CRM Builder",
    description:
      "Portfolio featuring CRM systems, React Native apps, and web dashboards.",
  },
  keywords: [
    "Dhanush Reddy",
    "Dhanush Singamala",
    "Dhanush Portfolio",
    "Software Developer",
    "React Developer",
    "CRM Builder",
    "Next.js Portfolio",
    "Frontend Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable} ${ibmPlexMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}
