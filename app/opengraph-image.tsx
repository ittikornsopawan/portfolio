import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

// Link preview for LinkedIn / LINE / Slack; Next also uses it as the twitter image
export const alt = 'Ittikorn (Aof) Sopawan — Open to Work: Technical Product Owner, System Analyst, Solution Architect'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), 'public/profile.jpeg'))
  const photoSrc = `data:image/jpeg;base64,${photo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 64,
          padding: '0 80px',
          color: 'white',
          background: 'linear-gradient(135deg, #1e1145 0%, #4c1d95 45%, #1d4ed8 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              padding: 10,
              borderRadius: 9999,
              background: 'linear-gradient(135deg, #22c55e, #a3e635)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photoSrc} width={300} height={300} style={{ borderRadius: 9999, objectFit: 'cover', border: '6px solid white' }} />
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: -26,
              padding: '8px 22px',
              borderRadius: 9999,
              background: '#15803d',
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: 2,
            }}
          >
            #OPENTOWORK
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ display: 'flex', fontSize: 30, color: '#c4b5fd', fontWeight: 600 }}>Open to new opportunities</div>
          <div style={{ display: 'flex', fontSize: 68, fontWeight: 800, lineHeight: 1.05, marginTop: 12 }}>
            Ittikorn (Aof) Sopawan
          </div>
          <div style={{ display: 'flex', fontSize: 32, marginTop: 24, color: 'rgba(255,255,255,0.9)', lineHeight: 1.35 }}>
            Technical Product Owner · System Analyst · Solution Architect
          </div>
          <div style={{ display: 'flex', fontSize: 26, marginTop: 28, color: 'rgba(255,255,255,0.75)' }}>
            10 years in tech · 7 as SA, 3 as developer
          </div>
        </div>
      </div>
    ),
    size,
  )
}
