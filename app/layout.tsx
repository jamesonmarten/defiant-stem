import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Defiant STEM | Hands-on learning for curious kids",
  description:
    "Defiant STEM creates playful, hands-on educational kits for kids and families, helping children build confidence through discovery, design, and problem-solving.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fffaf2] text-slate-900">
        <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/85 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0f172a] text-lg font-black text-white">
                D
              </div>
              <div>
                <div className="text-lg font-black tracking-tight">Defiant STEM</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">For curious kids</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
              <Link href="/" className="transition hover:text-slate-900">Home</Link>
              <Link href="/shop" className="transition hover:text-slate-900">Shop</Link>
              <Link href="/#programs" className="transition hover:text-slate-900">Programs</Link>
              <Link href="/#benefits" className="transition hover:text-slate-900">Why it works</Link>
              <Link href="/#reviews" className="transition hover:text-slate-900">Reviews</Link>
              <Link href="/#faq" className="transition hover:text-slate-900">FAQ</Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/cart"
                className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 sm:inline-flex hover:border-slate-400"
              >
                Cart
              </Link>
              <Link
                href="/shop"
                className="rounded-full bg-[#0f172a] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-[#1e293b]"
              >
                Shop kits
              </Link>
            </div>
          </div>
        </header>

        {children}

        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-600 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0f172a] text-sm font-black text-white">
                D
              </div>
              <span className="font-semibold text-slate-800">Defiant STEM</span>
            </div>
            <div className="flex flex-wrap gap-5">
              <Link href="/" className="hover:text-slate-900">Home</Link>
              <Link href="/shop" className="hover:text-slate-900">Shop</Link>
              <Link href="/cart" className="hover:text-slate-900">Cart</Link>
              <Link href="/#faq" className="hover:text-slate-900">FAQ</Link>
            </div>
            <div>© 2026 Defiant STEM</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
