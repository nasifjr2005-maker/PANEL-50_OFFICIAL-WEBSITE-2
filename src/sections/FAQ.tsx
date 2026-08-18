import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Is Panel 50 safe to use on my main account?',
    a: 'Panel 50 ships with a kernel-level anti-ban shield, HWID spoofing and daily bypass updates. While no third-party tool can guarantee 100% safety, our detection rate is under 0.1% across 12,000+ active users. We still recommend testing on a secondary account first.',
  },
  {
    q: 'Does it work on the latest Free Fire / FF MAX version?',
    a: 'Yes. Every game patch is reversed and pushed as an update within hours. The panel auto-updates on launch, so you are always on a working build — both Free Fire and FF MAX are supported.',
  },
  {
    q: 'Do I need root access?',
    a: 'No. Panel 50 runs on both rooted and non-rooted Android devices (Android 8 and above). Non-root setup uses a virtual-space injection that takes under 2 minutes — our support team walks you through it.',
  },
  {
    q: 'How do I receive my key after payment?',
    a: 'Message us on Telegram with your payment screenshot and chosen plan. Keys are delivered instantly, 24/7, along with a download link and a step-by-step setup guide.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'UPI, bKash, Nagad, PayPal, USDT/crypto and popular gift cards. If you need another method, just ask — we are flexible.',
  },
  {
    q: 'Can I move my key to a new device?',
    a: 'Yes. Monthly and Lifetime plans include free HWID resets anytime. Weekly plans get one free reset per week. Just ping support and it is done in minutes.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="text-sm font-medium text-[#7b61ff] tracking-widest uppercase">FAQ</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tighter">
            Questions, <span className="text-gradient">answered</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-white/10 rounded-2xl bg-white/[0.03] px-6 transition-colors duration-300 hover:border-white/20 data-[state=open]:border-[#7b61ff]/40"
              >
                <AccordionTrigger className="text-left text-white hover:no-underline py-5 text-[15px] font-medium">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-400 leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
