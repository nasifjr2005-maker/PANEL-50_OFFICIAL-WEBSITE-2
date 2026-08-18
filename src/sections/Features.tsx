import { motion } from 'framer-motion'
import { Crosshair, Eye, ShieldCheck, Gauge, RefreshCw, Headset, Smartphone, Ghost } from 'lucide-react'

const features = [
  {
    icon: Crosshair,
    title: 'Aim Assist Pro',
    desc: 'Buttery-smooth aim correction with adjustable FOV, smoothing and target priority — headshots feel natural.',
  },
  {
    icon: Eye,
    title: 'Full ESP Suite',
    desc: 'Enemy boxes, health bars, distance, loot and vehicle ESP rendered at a steady 60fps with zero lag.',
  },
  {
    icon: ShieldCheck,
    title: 'Anti-Ban Shield',
    desc: 'Kernel-level protection, HWID spoofer and daily bypass updates keep your account safe around the clock.',
  },
  {
    icon: Gauge,
    title: 'Zero Performance Hit',
    desc: 'Under 40MB footprint. Runs clean on low-end devices — no frame drops, no overheating, no crashes.',
  },
  {
    icon: Ghost,
    title: 'Stealth Mode',
    desc: 'Invisible overlay, stream-proof rendering and spectator-cloak keep you hidden while recording or streaming.',
  },
  {
    icon: RefreshCw,
    title: 'Same-Day Updates',
    desc: 'Every Free Fire patch is reversed within hours. Your panel is never outdated or offline for long.',
  },
  {
    icon: Smartphone,
    title: 'All Devices Supported',
    desc: 'Android 8–15, rooted or non-rooted, plus emulator builds for PC players. One key works everywhere.',
  },
  {
    icon: Headset,
    title: '24/7 Human Support',
    desc: 'Real support on Telegram and WhatsApp — setup help, key resets and troubleshooting in minutes, not days.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-medium text-[#00d4ff] tracking-widest uppercase">Features</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
            Everything you need to <span className="text-gradient">win</span>
          </h2>
          <p className="mt-5 text-neutral-400 text-lg">
            Packed with tournament-grade tools, tuned for smooth gameplay on any device.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-[#00d4ff]/40 group-hover:shadow-[0_0_24px_rgba(0,212,255,0.15)]">
                <f.icon size={20} className="text-neutral-300 transition-colors duration-300 group-hover:text-[#00d4ff]" />
              </div>
              <h3 className="mt-5 font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
