import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const faq: AppRouteModule = {
  path: '/faq',
  name: 'FAQ',
  component: LAYOUT,
  redirect: '/faq/faqManage',
  meta: {
    hideChildrenInMenu: false,
    icon: 'ion:ios-bookmarks',
    title: t('routes.main.faq.faq'),
    orderNo: 10,
  },
  children: [
    {
      path: 'faqManage',
      name: 'FAQ',
      component: () => import('/@/views/faq/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.main.faq.faqManage'),
      },
    },
    {
      path: 'tagManage',
      name: 'Tag',
      component: () => import('/@/views/faq/tagManage/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.main.faq.tagManage'),
      },
    },
  ],
}

export default faq
