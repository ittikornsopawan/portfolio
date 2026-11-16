'use client'

import Image from 'next/image'
import RevealWrapper from './RevealWrapper'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

/** Motto as the quote, with the CV's professional summary beside it, right under the hero. */
export default function AboutQuote() {
  const { lang } = useLang()
  const T = i18n.aboutQuote

  return (
    <section id="about-me" className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-12 sm:pb-16">
      <RevealWrapper>
        <figure className="about-quote aq-card glass-card relative overflow-hidden p-6 sm:p-10">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet-600/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-48 w-48 rounded-full bg-blue-500/15 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
            {/* The motto is the quote */}
            <div className="flex flex-col">
              <span aria-hidden="true" className="aq-fade aq-glyph block h-10 font-display text-[4.5rem] font-extrabold leading-none">
                &ldquo;
              </span>
              <blockquote className="aq-fade mt-3 font-display text-[1.3rem] font-bold leading-[1.4] tracking-tight text-theme sm:text-[1.6rem]">
                {T.motto.quote[lang]}
              </blockquote>
              <span className="aq-bar mt-6 h-1.5 w-20 rounded-full" />

              <figcaption className="aq-fade aq-late mt-6 flex items-center gap-3 lg:mt-auto lg:pt-8">
                <Image
                  src="/profile.jpeg"
                  alt=""
                  width={96}
                  height={96}
                  className="h-11 w-11 rounded-full object-cover object-top ring-2 ring-fuchsia-400/60 ring-offset-2 ring-offset-transparent"
                />
                <div>
                  <div className="font-display text-[0.92rem] font-bold text-theme">{T.by[lang]}</div>
                  <div className="text-[0.75rem] text-theme3">{T.role[lang]}</div>
                </div>
              </figcaption>
            </div>

            {/* CV summary as supporting text */}
            <p className="text-[0.95rem] leading-[1.9] text-theme2 lg:border-l lg:border-[var(--border2)] lg:pl-12 lg:text-[1rem] lg:self-center">
              {T.quote[lang].map(([text, highlighted], i) => (
                <span key={`${lang}-${i}`} className="aq-seg" style={{ '--i': i } as React.CSSProperties}>
                  {highlighted ? <mark className="testimonial-mark">{text}</mark> : text}
                </span>
              ))}
            </p>
          </div>
        </figure>
      </RevealWrapper>
    </section>
  )
}
