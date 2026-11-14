'use client'

import Image from 'next/image'
import { useLang } from '@/app/lang-context'
import { i18n } from '@/lib/i18n'

export default function Footer() {
  const { lang } = useLang()
  const T = i18n.footer

  return (
    <footer className="border-t border-[var(--border)] py-7 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="" width={28} height={31} className="h-8 w-7 object-contain" />
          <span className="text-sm font-semibold gradient-text tracking-wide">Ittikorn</span>
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
