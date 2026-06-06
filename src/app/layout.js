import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://jhay-oteda.vercel.app"),
  title: "Jhay Oteda | Web Developer Portfolio",
  description: "Web developer portfolio of Jhay Oteda, currently studying at the University of Cebu - Main Campus. Explore my projects, skills, and education history.",
  keywords: ["Jhay Oteda", "Portfolio", "Web Developer", "Next.js", "React", "Cebu Developer"],
  authors: [{ name: "Jhay Oteda" }],
  openGraph: {
    title: "Jhay Oteda | Web Developer Portfolio",
    description: "Web developer portfolio of Jhay Oteda, currently studying at the University of Cebu - Main Campus.",
    url: "https://jhay-oteda.vercel.app",
    siteName: "Jhay Oteda Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/j-img.jpg",
        width: 800,
        height: 800,
        alt: "Jhay Oteda Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhay Oteda | Web Developer Portfolio",
    description: "Web developer portfolio of Jhay Oteda, currently studying at the University of Cebu - Main Campus.",
    images: ["/j-img.jpg"],
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
