import "~/styles/globals.css";

import { type Metadata } from "next";
import { Paprika } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "~/components/ui/theme-provider";
import Footer from "./_components/Footer";
import {
  ClerkProvider,
  SignedIn,
  SignInButton,
  SignedOut,
} from "@clerk/nextjs";
import NavigationMenubar from "./_components/NavBar";

// https://nextjs.org/learn/dashboard-app/adding-metadata
export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "The Novel",
  },
  description: "The Novel Platform.",
  metadataBase: new URL("https://novel.skywalkersam.dev/"),
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const paprika = Paprika({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${paprika.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <header className="flex h-16 items-center justify-end gap-4 p-4">
              <SignedOut>
                <div className="p-2 hover:cursor-pointer hover:rounded-md hover:border-2 hover:border-b-sky-400">
                  <SignInButton />
                </div>
              </SignedOut>
              <SignedIn>
                <NavigationMenubar></NavigationMenubar>
              </SignedIn>
            </header>
            <main>{children}</main>
            <Footer></Footer>
          </ThemeProvider>
          <SpeedInsights></SpeedInsights>
        </body>
      </html>
    </ClerkProvider>
  );
}
