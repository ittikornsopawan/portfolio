'use client'

import { useEffect } from 'react'

export default function AnimatedDocumentTitle() {
  useEffect(() => {
    const title = document.title
    const cycle = `${title}   |   ${title}   |   `
    let position = 0

    const intervalId = window.setInterval(() => {
      document.title = cycle.slice(position) + cycle.slice(0, position)
      position = (position + 1) % cycle.length
    }, 50)

    return () => {
      window.clearInterval(intervalId)
      document.title = title
    }
  }, [])

  return null
}
