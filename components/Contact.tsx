'use client'

import { Mail, Phone, Link2, MapPin, Clock, ArrowUpRight } from './PixelIcon'
import RevealWrapper from './RevealWrapper'
import type { PixelIconComponent } from './PixelIcon'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

interface ContactLink { Icon: PixelIconComponent; key: keyof typeof i18n.contact.details; sub: keyof typeof i18n.contact.details | 'emailValue' | 'phoneValue' | 'linkedinValue'; href?: string }

const contactLinks: ContactLink[] = [
  { Icon: Mail,   key: 'email',        sub: 'emailValue',    href: 'mailto:ittikorn.sopawan@gmail.com' },
  { Icon: Phone,  key: 'phone',        sub: 'phoneValue',    href: 'tel:+66991161274' },
  { Icon: Link2,  key: 'linkedin',     sub: 'linkedinValue', href: 'https://linkedin.com/in/ittikorn-sopawan' },
  { Icon: MapPin, key: 'location',     sub: 'thailand' },
  { Icon: Clock,  key: 'availability', sub: 'noticePeriod' },
]

export default function Contact() {
  const { lang } = useLang()
  const T = i18n.contact

  return (
    <section id="contact" className="relative overflow-hidden py-8 sm:py-12 px-4 sm:px-6">
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
            <p className="text-theme2 text-[1rem] leading-relaxed max-w-sm">
              {T.subtitle[lang]}
            </p>
          </RevealWrapper>

          {/* Right */}
          <RevealWrapper delay={120}>
            <div className="contact-card relative">
              <div className="glass-card relative flex flex-col gap-2 p-6 shadow-[0_20px_60px_rgba(124,58,237,0.25)]">
                {contactLinks.map((link, i) => {
                  const primary = i === 0
                  const availability = link.key === 'availability'
                  const sub = link.sub === 'emailValue' ? 'ittikorn.sopawan@gmail.com'
                    : link.sub === 'phoneValue' ? '+66 99 116 1274'
                    : link.sub === 'linkedinValue' ? 'linkedin.com/in/ittikorn-sopawan'
                    : T.details[link.sub][lang]
                  const Row = link.href ? 'a' : 'div'
                  return (
                    <Row
                      key={link.key}
                      {...(link.href ? { href: link.href, ...(link.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {}) } : {})}
                      className={`group flex items-center gap-4 rounded-xl p-4 transition-all duration-200 ${
                        primary
                          ? 'bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-[0_8px_24px_rgba(124,58,237,0.4)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(124,58,237,0.55)]'
                          : availability
                            ? 'bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-[0_8px_24px_rgba(124,58,237,0.4)]'
                            : `surface-2 border border-[var(--border2)] ${link.href ? 'hover:border-violet-500/40 hover:bg-violet-500/[0.06] hover:translate-x-1' : ''}`
                      }`}
                    >
                      <div
                        className={`icon-box flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${
                          primary
                            ? 'bg-white/20'
                            : availability
                              ? 'bg-white/20'
                              : 'border border-violet-500/20 bg-gradient-to-br from-violet-600/15 to-blue-500/15 group-hover:from-violet-600 group-hover:to-blue-500'
                        }`}
                      >
                        {availability ? (
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
                          </span>
                        ) : (
                          <link.Icon
                            size={16}
                            strokeWidth={2}
                            className={primary ? 'text-white' : 'text-violet-500 transition-colors group-hover:text-white dark:text-violet-400'}
                          />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className={`text-xs font-semibold uppercase tracking-wider ${primary ? 'text-white/75' : availability ? 'text-white/75' : 'text-theme3'}`}>
                          {T.details[link.key][lang]}
                        </div>
                        <div className={`mt-0.5 truncate font-semibold ${primary ? 'text-[0.95rem] text-white' : availability ? 'text-[0.95rem] text-white' : 'text-sm text-theme2 transition-colors group-hover:text-theme'}`}>
                          {sub}
                        </div>
                      </div>
                      {link.href && (
                        <ArrowUpRight
                          size={18}
                          className={`shrink-0 transition-all duration-200 ${primary ? 'text-white' : 'text-theme3 opacity-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-violet-500'}`}
                        />
                      )}
                    </Row>
                  )
                })}
              </div>
            </div>
          </RevealWrapper>

        </div>
      </div>
    </section>
  )
}
