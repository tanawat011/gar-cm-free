import type { IconType } from '@/components/Icon'

export type MenuProps = {
  label: string
  icon?: IconType
  id: string
  link?: string
  isGroupLabel?: boolean
  items?: MenuProps[]
}

export const menu: MenuProps[] = [
  {
    label: 'Dashboard',
    icon: 'FaShop',
    id: 'dashboard',
    link: '/',
  },
  {
    label: 'Application',
    icon: 'FaShop',
    id: 'app',
    items: [
      {
        label: 'Link Remember',
        icon: 'FaShop',
        id: 'link-remember',
      },
      {
        label: 'TODO',
        icon: 'FaShop',
        id: 'todo',
      },
    ],
  },
  {
    label: 'Example',
    id: 'example',
    isGroupLabel: true,
  },
  {
    label: 'Level 1',
    icon: 'FaRegSun',
    id: 'level1',
    items: [
      {
        label: 'Level 2',
        id: 'level2',
        link: '/level1/level2',
      },
      {
        label: 'Level 2(2)',
        id: 'level22',
        items: [
          {
            label: 'Level 3',
            id: 'level3',
            link: '/level1/level2/level3',
          },
        ],
      },
    ],
  },
]
