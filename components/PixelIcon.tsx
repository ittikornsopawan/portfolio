import type { ReactElement, SVGProps } from 'react'
import { PIXEL_GLYPHS } from './pixel-icon-data'

export type PixelIconComponent = (props: PixelIconProps) => ReactElement
export interface PixelIconProps extends Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> { size?: number }

function createPixelIcon(id: keyof typeof PIXEL_GLYPHS): PixelIconComponent {
  return function PixelGlyph({ size = 24, ...props }) {
    const glyph = PIXEL_GLYPHS[id]
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={glyph.viewBox}
        fill="none"
        focusable="false"
        aria-hidden={props['aria-hidden'] ?? true}
        {...props}
        dangerouslySetInnerHTML={{ __html: glyph.markup }}
      />
    )
  }
}

export const ArrowRight = createPixelIcon('arrows-arrow-right')
export const ArrowUp = createPixelIcon('arrows-arrow-up')
export const ArrowUpRight = createPixelIcon('arrows-arrow-up-right')
export const BarChart2 = createPixelIcon('metrics-chart-bar')
export const BookOpen = createPixelIcon('documents-file-text')
export const Brain = createPixelIcon('tools-sparkles')
export const Briefcase = createPixelIcon('money-shopping-bag')
export const Building2 = createPixelIcon('tools-house')
export const CheckCircle2 = createPixelIcon('indicators-circle-check')
export const ChevronDown = createPixelIcon('arrows-chevron-down')
export const Clock = createPixelIcon('schedule-clock')
export const Cloud = createPixelIcon('nature-cloud')
export const Code2 = createPixelIcon('code-code')
export const Compass = createPixelIcon('code-compass')
export const Crown = createPixelIcon('tools-star')
export const Download = createPixelIcon('arrows-arrow-down-to-line')
export const ExternalLink = createPixelIcon('indicators-square-arrow-out-up-right')
export const Factory = createPixelIcon('tools-settings-2')
export const FileCode2 = createPixelIcon('code-code-xml')
export const FileText = createPixelIcon('documents-file-text')
export const FolderKanban = createPixelIcon('layouts-kanban')
export const Gamepad2 = createPixelIcon('gadgets-tv')
export const GitBranch = createPixelIcon('code-git-branch')
export const GitFork = createPixelIcon('code-git-branch')
export const Globe = createPixelIcon('other-globe')
export const GraduationCap = createPixelIcon('tools-star')
export const Heart = createPixelIcon('tools-heart')
export const Layers = createPixelIcon('layouts-layers-2')
export const Leaf = createPixelIcon('nature-earth')
export const Lightbulb = createPixelIcon('tools-sparkles')
export const Link2 = createPixelIcon('code-link-2')
export const Lock = createPixelIcon('identity-lock')
export const Mail = createPixelIcon('messaging-mail')
export const Map = createPixelIcon('tools-map')
export const MapPin = createPixelIcon('tools-map-pin')
export const Menu = createPixelIcon('layouts-menu')
export const MessageSquare = createPixelIcon('messaging-message-square')
export const Moon = createPixelIcon('nature-moon')
export const Pause = createPixelIcon('playback-pause')
export const PawPrint = createPixelIcon('tools-heart')
export const Phone = createPixelIcon('messaging-phone')
export const Play = createPixelIcon('playback-play')
export const Rocket = createPixelIcon('arrows-arrow-up')
export const Server = createPixelIcon('code-server')
export const Settings2 = createPixelIcon('tools-settings-2')
export const ShieldCheck = createPixelIcon('identity-shield-check')
export const ShoppingCart = createPixelIcon('money-shopping-cart')
export const Smile = createPixelIcon('indicators-circle-user')
export const Sparkles = createPixelIcon('tools-sparkles')
export const Star = createPixelIcon('tools-star')
export const Sun = createPixelIcon('nature-sun')
export const Target = createPixelIcon('indicators-circle-dot')
export const TrendingUp = createPixelIcon('metrics-trending-up')
export const Trophy = createPixelIcon('money-gift')
export const Tv = createPixelIcon('gadgets-tv')
export const Users = createPixelIcon('identity-users')
export const UtensilsCrossed = createPixelIcon('money-shopping-basket')
export const Wrench = createPixelIcon('tools-settings')
export const X = createPixelIcon('indicators-x')
