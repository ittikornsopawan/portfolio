'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

/** Keeps the back-to-top action available at the page end without covering reading content. */
export default function ScrollHint() {
  const { lang } = useLang()
  const [visible, setVisible] = useState(false)
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    const update = () => {
      const remaining = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight)
      const nearBottom = window.scrollY > 400 && remaining < 120
      setAtBottom(nearBottom)
      setVisible(nearBottom)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const handleClick = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const next = [...document.querySelectorAll<HTMLElement>('main section[id]')].find(
      section => section.getBoundingClientRect().top > 96,
    )
    if (next) next.scrollIntoView({ behavior: 'smooth', block: 'start' })
    else window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={i18n.scrollToTop[lang]}
      tabIndex={visible ? 0 : -1}
      className={`scroll-hint fixed left-2 z-50 inline-flex translate-x-0 items-center gap-1.5 rounded-full border border-violet-500/30 bg-[var(--nav-bg)] px-3 py-2 text-[0.7rem] font-semibold text-violet-700 shadow-[0_8px_24px_rgba(124,58,237,0.25)] backdrop-blur-md transition-all duration-300 hover:border-violet-500/60 dark:text-violet-200 sm:left-1/2 sm:-translate-x-1/2 sm:gap-2 sm:px-4 sm:text-xs ${atBottom ? 'bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] sm:bottom-20' : 'bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] sm:bottom-6'} ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      {i18n.scrollToTop[lang]}
      <ArrowUp size={15} strokeWidth={2.5} />
    </button>
  )
}
