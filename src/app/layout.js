import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Jhay | Developer Portfolio",
  description: "Modern web based portfolio of Jhay, a software developer and creative engineer. Explore projects, education, and technical skills.",
  keywords: ["Jhay", "Portfolio", "Software Developer", "Web Developer", "Next.js", "React", "Frontend Developer"],
  authors: [{ name: "Jhay" }],
  openGraph: {
    title: "Jhay | Developer Portfolio",
    description: "Modern web based portfolio of Jhay, a software developer and creative engineer.",
    url: "https://your-portfolio-domain.vercel.app", // Fallback Vercel URL
    siteName: "Jhay Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhay | Developer Portfolio",
    description: "Modern web based portfolio of Jhay, a software developer and creative engineer.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable} style={{ scrollBehavior: 'smooth' }} suppressHydrationWarning>
      <head>
        {/* Anti-FOUC script for local theme caching */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
