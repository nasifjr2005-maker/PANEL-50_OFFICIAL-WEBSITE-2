import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#7b61ff]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#00d4ff]/10 rounded-full blur-[120px] pointer-events-none" />
      {/* fade grid at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-16">
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 backdrop-blur-sm">
            <Sparkles size={13} className="text-[#00d4ff]" />
            v5.0 — Updated for the latest Free Fire patch
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-8 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1.05]"
        >
          Dominate every match
          <br />
          with <span className="text-gradient">Panel 50</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed"
        >
          The smoothest Free Fire panel on the market. Precision aim assist, crystal-clear ESP,
          and bulletproof anti-ban — all in one lightweight package.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-semibold transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] active:scale-95"
          >
            Get Access
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-white font-medium transition-all duration-300 hover:bg-white/5 hover:border-white/25 active:scale-95"
          >
            <ShieldCheck size={17} className="text-[#00d4ff]" />
            View Features
          </a>
        </motion.div>

        {/* stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-20 grid grid-cols-3 gap-4 max-w-xl mx-auto"
        >
          {[
            { value: '12K+', label: 'Active users' },
            { value: '99.9%', label: 'Undetected' },
            { value: '24/7', label: 'Support' },
          ].map((s) => (
            <div key={s.label} className="border border-white/10 rounded-2xl bg-white/[0.03] backdrop-blur-sm py-5 px-2">
              <div className="text-2xl md:text-3xl font-bold text-gradient">{s.value}</div>
              <div className="mt-1 text-xs text-neutral-500">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
