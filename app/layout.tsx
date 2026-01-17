import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PDFBoss | Online PDF tools for PDF Lovers",
  description:
    "Powerful tools for working with PDFs. No installation, no uploads, no hassle. Merge, split, compress, convert, and edit PDFs online - fast, secure, and completely free.",
  generator: "v0.app",
  keywords: ["PDF tools", "merge PDF", "split PDF", "compress PDF", "convert PDF", "online PDF editor"],
  icons: {
    icon: "/app-icon.jpg",
    apple: "/app-icon.jpg",
  },
}

import { ThemeProvider } from "@/components/theme-provider"
import { AppSidebar } from "@/components/app-sidebar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased bg-background min-h-screen relative overflow-x-hidden max-w-[100vw]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen bg-premium overflow-hidden font-sans">
            <AppSidebar />
            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto bg-transparent relative z-10">
              <Header />
              <main className="flex-1 relative">
                {children}
              </main>
              <Footer />
            </div>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
