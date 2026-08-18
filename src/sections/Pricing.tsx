import { motion } from 'framer-motion'
import { Check, Crown, MessageCircle } from 'lucide-react'

const plans = [
  {
    name: 'Weekly',
    price: '$4.99',
    period: '/ 7 days',
    tagline: 'Try it out, risk-free.',
    features: ['Full aim assist + ESP suite', 'Anti-ban shield included', '1 device key', 'Same-day patch updates', 'Telegram support'],
    highlight: false,
  },
  {
    name: 'Monthly',
    price: '$9.99',
    period: '/ 30 days',
    tagline: 'The most popular choice.',
    features: ['Everything in Weekly', '2 device keys', 'Priority support queue', 'Stealth / stream-proof mode', 'HWID reset anytime'],
    highlight: true,
  },
  {
    name: 'Lifetime',
    price: '$24.99',
    period: 'one-time',
    tagline: 'Pay once, own forever.',
    features: ['Everything in Monthly', '3 device keys', 'Lifetime updates included', 'VIP Discord role', 'Early beta access'],
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#ff4ecd]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-medium text-[#ff4ecd] tracking-widest uppercase">Pricing</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
            Simple, honest <span className="text-gradient">pricing</span>
          </h2>
          <p className="mt-5 text-neutral-400 text-lg">
            Instant key delivery after payment. No subscriptions you forget about.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-5 items-stretch">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                p.highlight
                  ? 'glow-card bg-white/[0.05] md:-translate-y-3'
                  : 'border border-white/10 bg-white/[0.03] hover:border-white/20'
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#00d4ff] via-[#7b61ff] to-[#ff4ecd] text-white">
                  <Crown size={12} /> Most Popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-white">{p.name}</h3>
              <p className="mt-1 text-sm text-neutral-500">{p.tagline}</p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-4xl font-bold tracking-tight text-white">{p.price}</span>
                <span className="text-sm text-neutral-500">{p.period}</span>
              </div>

              <ul className="mt-7 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-300">
                    <Check size={16} className="mt-0.5 shrink-0 text-[#00d4ff]" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-all duration-300 active:scale-95 ${
                  p.highlight
                    ? 'bg-white text-black hover:shadow-[0_0_32px_rgba(255,255,255,0.25)] hover:scale-[1.02]'
                    : 'border border-white/15 text-white hover:bg-white/5 hover:border-white/25'
                }`}
              >
                <MessageCircle size={15} />
                Buy {p.name}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 text-center text-sm text-neutral-500"
        >
          Pay via UPI, bKash, crypto or gift cards — message us on Telegram to order.
        </motion.p>
      </div>
    </section>
  )
}
