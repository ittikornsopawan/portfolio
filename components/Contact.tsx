'use client'

import { Mail, Phone, Link2, MapPin, Send, Clock } from 'lucide-react'
import RevealWrapper from './RevealWrapper'
import type { LucideIcon } from 'lucide-react'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

interface ContactLink { Icon: LucideIcon; label: string; sub?: string; href: string }

const contactLinks: ContactLink[] = [
  { Icon: Mail,   label: 'Email',        sub: 'ittikorn.sopawan@gmail.com',      href: 'mailto:ittikorn.sopawan@gmail.com'        },
  { Icon: Phone,  label: 'Phone',        sub: '(+66) 09 9116 1274',               href: 'tel:+66099116274'                         },
  { Icon: Link2,  label: 'LinkedIn',     sub: 'linkedin.com/in/ittikorn-sopawan', href: 'https://linkedin.com/in/ittikorn-sopawan' },
  { Icon: MapPin, label: 'Location',     sub: 'Thailand',                         href: '#'                                        },
  { Icon: Clock,  label: 'Availability', sub: '30 Days Notice',                   href: '#'                                        },
]

export default function Contact() {
  const { lang } = useLang()
  const T = i18n.contact

  return (
    <section id="contact" className="relative overflow-hidden py-24 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950/50 via-transparent to-blue-950/30 dark:from-violet-950/60 dark:to-blue-950/40 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-violet-600 blur-[120px] opacity-10 dark:opacity-15" />
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-blue-500 blur-[100px] opacity-8 dark:opacity-12" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">

          {/* Left */}
          <RevealWrapper>
            <div className="eyebrow-pill mb-5 w-fit">
              <Mail size={12} />
              {T.eyebrow[lang]}
            </div>
            <h2 className="font-display font-extrabold text-theme text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tight mb-5">
              {T.title1[lang]}
              <br />
              <span className="gradient-text">{T.title2[lang]}</span>
            </h2>
            <p className="text-theme2 text-[1rem] leading-relaxed max-w-sm mb-6">
              {T.subtitle[lang]}
            </p>

            {/* Availability indicator */}
            <div className="flex items-center gap-2.5 mb-8 p-3.5 rounded-xl card-surface w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span className="text-sm font-medium text-theme2">
                {T.available[lang]}<strong className="text-theme">{T.notice[lang]}</strong>
              </span>
            </div>

            <a
              href="mailto:ittikorn.sopawan@gmail.com"
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl text-[0.92rem] shadow-[0_4px_20px_rgba(124,58,237,0.35)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.5)] hover:-translate-y-0.5 transition-all duration-200"
            >
              <Send size={16} strokeWidth={2.5} />
              {T.sendEmail[lang]}
            </a>
          </RevealWrapper>

          {/* Right */}
          <RevealWrapper delay={120}>
            <div className="glass-card p-6 flex flex-col gap-2">
              {contactLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-4 p-4 rounded-xl surface-2 border border-[var(--border2)] hover:border-violet-500/25 hover:bg-violet-500/6 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600/15 to-blue-500/15 border border-violet-500/20 flex items-center justify-center shrink-0 group-hover:from-violet-600 group-hover:to-blue-500 transition-all duration-200 icon-box">
                    <link.Icon size={15} className="text-violet-500 dark:text-violet-400 group-hover:text-white transition-colors" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-theme3 uppercase tracking-wider">{link.label}</div>
                    <div className="text-sm font-medium text-theme2 group-hover:text-theme transition-colors mt-0.5">
                      {link.sub}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </RevealWrapper>

        </div>
      </div>
    </section>
  )
}
