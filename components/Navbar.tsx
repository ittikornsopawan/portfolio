'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon, Menu, X } from './PixelIcon'
import Image from 'next/image'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const { lang, setLang }   = useLang()
  const [mounted, setMounted]   = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#about')

  useEffect(() => {
    setMounted(true)
    const fn = () => {
      setScrolled(window.scrollY > 16)
      // scroll-spy: the last section whose top has passed just under the navbar
      const sections = [...document.querySelectorAll<HTMLElement>('main section[id]')]
      const current = sections.filter(s => s.getBoundingClientRect().top <= 120).pop()
      if (current) setActive(`#${current.id === 'about-me' ? 'about' : current.id}`)
    }
    fn()
    // the browser jumps to #hash before client sections have their final height; jump again once they do
    const target = window.location.hash && document.getElementById(decodeURIComponent(window.location.hash.slice(1)))
    const hashTimer = target ? setTimeout(() => target.scrollIntoView({ behavior: 'instant' }), 150) : undefined
    window.addEventListener('scroll', fn, { passive: true })
    return () => {
      clearTimeout(hashTimer)
      window.removeEventListener('scroll', fn)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const T = i18n.nav
  const isDark = resolvedTheme === 'dark'

  const links = [
    { href: '#about',          label: T.about[lang]        },
    { href: '#experience',     label: T.experience[lang]   },
    { href: '#projects',       label: T.projects[lang]     },
    { href: '#github',         label: T.github[lang]       },
    { href: '#skills',         label: T.skills[lang]       },
    { href: '#testimonials',   label: T.testimonials[lang] },
    { href: '#certifications', label: T.education[lang]    , secondary: true },
    { href: '#careerpath',     label: T.careerPath[lang]   , secondary: true },
    { href: '#personality',    label: T.personality[lang]  , secondary: true },
    { href: '#hobbies',        label: T.hobbies[lang]      , secondary: true },
    { href: '#contact',        label: T.contact[lang]      },
  ]

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-violet-600 focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        {T.skipToContent[lang]}
      </a>
    <nav className={`fixed inset-x-0 top-0 z-50 nav-glass transition-all duration-300 ${scrolled ? 'shadow-[0_1px_30px_rgba(124,58,237,0.1)]' : ''}`}>
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
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
        {/* 1280px can't fit all 11 links plus the controls; secondary ones join at 2xl and live in the menu below that */}
        <ul className="hidden xl:flex flex-1 items-center justify-center gap-0.5 list-none mx-4">
          {links.map(l => (
            <li key={l.href} className={'secondary' in l ? 'hidden 2xl:block' : ''}>
              <a
                href={l.href}
                aria-current={active === l.href ? 'true' : undefined}
                className={`whitespace-nowrap text-sm font-medium px-2.5 py-2 rounded-lg transition-all duration-150 ${
                  active === l.href ? 'text-violet-600 bg-violet-500/10 dark:text-violet-300' : 'text-theme2 hover:text-theme hover:bg-violet-500/[0.08]'
                }`}
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
                aria-pressed={lang === 'en'}
                className={`min-h-11 min-w-10 px-2.5 rounded-lg transition-all duration-150 ${
                  lang === 'en'
                    ? 'bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-sm'
                    : 'text-theme3 hover:text-theme'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('th')}
                aria-pressed={lang === 'th'}
                className={`min-h-11 min-w-10 px-2.5 rounded-lg transition-all duration-150 ${
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
            aria-label={T.toggleTheme[lang]}
            className="w-11 h-11 rounded-xl bg-[var(--surface2)] border border-[var(--border)] flex items-center justify-center text-theme2 hover:text-theme hover:border-violet-500/30 hover:bg-violet-500/[0.08] transition-all duration-200"
          >
            {mounted ? (isDark ? <Sun size={16} /> : <Moon size={16} />) : <span className="w-4 h-4" />}
          </button>

          {/* Menu (everything below 2xl) */}
          <button
            type="button"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? T.closeMenu[lang] : T.openMenu[lang]}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            className="2xl:hidden w-11 h-11 rounded-xl bg-[var(--surface2)] border border-[var(--border)] flex items-center justify-center text-theme2 hover:text-theme hover:border-violet-500/30 hover:bg-violet-500/[0.08] transition-all duration-200"
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
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

      {menuOpen && (
        <div id="site-menu" className="2xl:hidden border-t border-[var(--border2)] nav-glass">
          <ul className="max-w-screen-2xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 px-4 sm:px-6 py-3 list-none">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === l.href ? 'true' : undefined}
                  className={`block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                    active === l.href ? 'text-violet-600 bg-violet-500/10 dark:text-violet-300' : 'text-theme2 hover:text-theme hover:bg-violet-500/[0.08]'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
    </>
  )
}
