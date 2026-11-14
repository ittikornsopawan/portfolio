'use client'

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Purple orb — top left */}
      <div className="absolute rounded-full blur-[90px] opacity-25 dark:opacity-30 bg-violet-600 w-[650px] h-[650px] -top-56 -left-28 animate-drift-1" />
      {/* Blue orb — middle right */}
      <div className="absolute rounded-full blur-[80px] opacity-20 dark:opacity-25 bg-blue-500 w-[520px] h-[520px] top-[20%] -right-40 animate-drift-2" />
      {/* Deep violet orb — bottom center */}
      <div className="absolute rounded-full blur-[100px] opacity-20 dark:opacity-25 bg-violet-800 w-[450px] h-[450px] bottom-[8%] left-[28%] animate-drift-3" />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}
