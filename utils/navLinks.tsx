import { ArrowBackIcon, PresentationIcon, ShareIcon, ShoppingIcon, UsersIcon } from "@/app/components/icons"

export interface NavLinkObject {
  name: string
  url: string
 icon: React.ReactNode
}

export const NAVLINKS: NavLinkObject[] = [
  {
    name: 'Início',
    url: '/',
    icon:  <ArrowBackIcon />
  },
  {
    name: 'Quem somos',
    url: '/',
    icon:  <PresentationIcon />
  },
  {
    name: 'Nossos artistas',
    url: '/artistas',
    icon:  <UsersIcon />
  },
  {
    name: 'Como comprar',
    url: '/',
    icon:  <ShoppingIcon />
  },
  {
    name: 'Contato',
    url: '/',
    icon:  <ShareIcon />
  }
]
