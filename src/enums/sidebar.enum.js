import { PERMISSION } from '@/enums/permission.enum'

export const SIDEBAR = [
  {
    id: 'management_event',
    icon: 'dashboard',
    title: 'management_event.menu_name',
    dropdown: false,
    routeName: 'management_event',
    childrenRoutes: ['create_event', 'edit_event'],
    role: [PERMISSION.ADMIN],
  },
  {
    id: 'management_frame',
    icon: 'form',
    title: 'management_frame.menu_name',
    dropdown: false,
    routeName: 'management_frame',
    childrenRoutes: ['create_frame', 'edit_frame'],
    role: [PERMISSION.ADMIN],
  },
  {
    id: 'management_collection',
    icon: 'table',
    title: 'management_collection.menu_name',
    dropdown: false,
    routeName: 'management_collection',
    childrenRoutes: ['create_collection', 'edit_collection'],
    role: [PERMISSION.ADMIN],
  },
  // {
  //   id: 'management_account',
  //   icon: 'user',
  //   title: 'management_account.menu_name',
  //   dropdown: true,
  //   routeName: 'management_account',
  //   childrenRoutes: [],
  //   role: [PERMISSION.ADMIN],
  //   dropdownItems: [
  //     {
  //       id: 'list_account',
  //       title: 'management_account.page_list',
  //       routeName: 'management_account_list',
  //       childrenRoutes: [],
  //       role: [PERMISSION.ADMIN]
  //     },
  //     {
  //       id: 'decentralization',
  //       title: 'management_account.decentralization',
  //       routeName: 'management_account_decentralization',
  //       childrenRoutes: [],
  //       role: [PERMISSION.ADMIN]
  //     }
  //   ]
  // }
]
