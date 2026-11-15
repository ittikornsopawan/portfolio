'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import Image from 'next/image'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const { lang, setLang }   = useLang()
  const [mounted, setMounted]   = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const fn = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const T = i18n.nav
  const isDark = resolvedTheme === 'dark'

  const links = [
    { href: '#about',          label: T.about[lang]        },
    { href: '#personality',    label: T.personality[lang]  },
    { href: '#experience',     label: T.experience[lang]   },
    { href: '#projects',       label: T.projects[lang]     },
    { href: '#skills',         label: T.skills[lang]       },
    { href: '#certifications', label: T.education[lang]    },
    { href: '#careerpath',     label: T.careerPath[lang]   },
    { href: '#testimonials',   label: T.testimonials[lang] },
    { href: '#github',         label: T.github[lang]       },
    { href: '#contact',        label: T.contact[lang]      },
  ]

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 nav-glass transition-all duration-300 ${scrolled ? 'shadow-[0_1px_30px_rgba(124,58,237,0.1)]' : ''}`}>
      <div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#about" className="flex items-center gap-2.5 select-none shrink-0">
          <div className="relative h-10 w-10 shrink-0">
            <Image
              src="/logo.png"
              alt=""
              fill
              sizes="40px"
              loading="eager"
              className="object-contain drop-shadow-[0_0_8px_rgba(34,211,238,0.45)]"
            />
          </div>
          <span className="font-display font-bold text-sm gradient-text tracking-tight">Ittikorn</span>
        </a>

        {/* Nav links */}
        <ul className="hidden xl:flex flex-1 items-center justify-center gap-0.5 list-none mx-4">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="whitespace-nowrap text-sm font-medium px-2.5 py-2 rounded-lg text-theme2 hover:text-theme hover:bg-violet-500/8 transition-all duration-150"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2 shrink-0">
          {/* EN / TH switcher */}
          {mounted && (
            <div className="flex items-center bg-[var(--surface2)] border border-[var(--border)] rounded-xl p-0.5 text-xs font-bold">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1.5 rounded-lg transition-all duration-150 ${
                  lang === 'en'
                    ? 'bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-sm'
                    : 'text-theme3 hover:text-theme'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('th')}
                className={`px-2.5 py-1.5 rounded-lg transition-all duration-150 ${
                  lang === 'th'
                    ? 'bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-sm'
                    : 'text-theme3 hover:text-theme'
                }`}
              >
                TH
              </button>
            </div>
          )}

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-xl bg-[var(--surface2)] border border-[var(--border)] flex items-center justify-center text-theme2 hover:text-theme hover:border-violet-500/30 hover:bg-violet-500/8 transition-all duration-200"
          >
            {mounted ? (isDark ? <Sun size={16} /> : <Moon size={16} />) : <span className="w-4 h-4" />}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-[0_4px_14px_rgba(124,58,237,0.35)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.5)] hover:-translate-y-px transition-all duration-200"
          >
            {T.hireMe[lang]}
          </a>
        </div>
      </div>
    </nav>
  )
}
