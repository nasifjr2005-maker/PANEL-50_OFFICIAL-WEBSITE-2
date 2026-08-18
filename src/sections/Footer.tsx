import { motion } from 'framer-motion'
import { Zap, ArrowRight, Send, MessageCircle, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      {/* CTA band */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#7b61ff]/15 rounded-full blur-[120px] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl mx-auto text-center px-6 py-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Ready to <span className="text-gradient">rank up?</span>
          </h2>
          <p className="mt-5 text-neutral-400 text-lg">
            Join 12,000+ players already using Panel 50. Key delivered in minutes.
          </p>
          <a
            href="#pricing"
            className="group mt-9 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] active:scale-95"
          >
            Get Panel 50
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
              <Zap size={15} strokeWidth={2.5} className="text-black" />
            </div>
            <span className="font-semibold text-white">Panel 50</span>
            <span className="text-neutral-600 text-sm ml-2">by Astro Jr</span>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: Send, label: 'Telegram' },
              { icon: MessageCircle, label: 'WhatsApp' },
              { icon: Mail, label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 transition-all duration-300 hover:text-white hover:border-white/30 hover:bg-white/5"
              >
                <s.icon size={15} />
              </a>
            ))}
          </div>

          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Panel 50 · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
