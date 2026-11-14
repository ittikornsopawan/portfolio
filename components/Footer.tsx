'use client'

import { Cpu } from 'lucide-react'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

export default function Footer() {
  const { lang } = useLang()
  const T = i18n.footer

  return (
    <footer className="border-t border-[var(--border)] py-7 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 flex items-center justify-center bg-gradient-to-br from-violet-600 to-blue-500 rounded-xl shadow-[0_4px_12px_rgba(124,58,237,0.3)] icon-box">
            <Cpu size={14} className="text-white" strokeWidth={2} />
          </div>
          <span className="text-sm font-semibold gradient-text tracking-wide">Aof.Portfolio</span>
        </div>
        <p className="text-xs text-theme3">
          &copy; {new Date().getFullYear()} {T.name[lang]}
        </p>
        <div className="text-xs text-theme3">
          {T.built[lang]}
        </div>
      </div>
    </footer>
  )
}
