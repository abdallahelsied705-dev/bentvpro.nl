"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { waLink } from "@/lib/site";

const ease = [0.2, 0.8, 0.2, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Spinning conic glow */}
      <div className="conic-glow pointer-events-none absolute -top-40 left-1/2 -z-10 h-[620px] w-[620px] -translate-x-1/2 rounded-full opacity-50" />
      {/* Morphing colour blobs */}
      <div className="animate-blob pointer-events-none absolute -left-24 top-24 -z-10 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
      <div className="animate-blob pointer-events-none absolute -right-20 top-10 -z-10 h-80 w-80 rounded-full bg-red/20 blur-3xl" style={{ animationDelay: "-7s" }} />

      <div className="container-x relative grid gap-12 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-gold" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            🇳🇱 #1 IPTV in Nederland · 100% uptime
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            className="mt-5 font-display text-4xl font-black leading-[1.05] text-white sm:text-6xl"
          >
            IPTV Nederland
            <span className="mt-2 block text-flag text-3xl font-extrabold sm:text-4xl">
              Onbeperkt Entertainment in 4K
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-cloud/85"
          >
            Toegang tot <strong className="text-gold">55.000+ tv-kanalen</strong> en{" "}
            <strong className="text-gold">90.000+ films &amp; series</strong> on demand — in
            HD, FHD &amp; 4K. Geen contract, direct actief in heel Nederland.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="#pricing"
              className="shimmer relative overflow-hidden rounded-full bg-gold px-7 py-3.5 font-extrabold text-ink transition hover:bg-gold-600"
            >
              Bestel nu →
            </Link>
            <a
              href={waLink("Hi! Ik wil een gratis test van IPTV Nederland.")}
              className="rounded-full border border-white/20 px-7 py-3.5 font-bold text-white transition hover:border-gold hover:text-gold"
            >
              Gratis proef
            </a>
          </motion.div>

          {/* mini trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted"
          >
            <span className="flex items-center gap-2">
              <span className="text-gold">★★★★★</span>
              <span>Vertrouwd door duizenden Nederlandse kijkers</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-red-300">✓</span> 7 dagen geld-terug
            </span>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="relative"
        >
          <div className="animate-bob gradient-border p-2.5 shadow-2xl">
            <Image
              src="/images/2025/08/telewizja-iptv-10.webp"
              alt="IPTV Nederland op meerdere apparaten"
              width={640}
              height={420}
              priority
              className="w-full rounded-[1.1rem]"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass absolute -bottom-5 -left-5 rounded-xl border border-gold/40 px-4 py-3"
          >
            <p className="font-display text-2xl font-black text-gold">4K</p>
            <p className="text-xs text-muted">Ultra HD kwaliteit</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72 }}
            className="glass absolute -right-4 top-6 rounded-xl border border-red/40 px-4 py-3"
          >
            <p className="font-display text-2xl font-black text-red-300">24/7</p>
            <p className="text-xs text-muted">Support</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.85 }}
            className="glass absolute -top-4 left-8 rounded-full border border-white/15 px-4 py-1.5 text-xs font-bold text-cloud"
          >
            55.000+ kanalen live
          </motion.div>
        </motion.div>
      </div>

      {/* animated gradient divider */}
      <div className="container-x">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </div>
    </section>
  );
}
