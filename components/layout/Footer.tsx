"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
        {/* Logo */}

        <Link href="/" className="text-2xl font-black tracking-tight">
          CrimeVision
          <span className="text-violet-400">AI</span>
        </Link>

        {/* Links */}

        <div className="flex items-center gap-8 text-sm text-zinc-400">
          <a href="#platform" className="transition hover:text-white">
            Platform
          </a>

          <a
            href="https://github.com/your-github-repo"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
        </div>

        {/* Copyright */}

        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} CrimeVision AI
        </p>
      </div>
    </footer>
  );
}
