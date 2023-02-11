import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const faq: AppRouteModule = {
  path: '/set',
  name: 'Set',
  component: LAYOUT,
  redirect: '/set/sysSet',
  meta: {
    hideChildrenInMenu: false,
    icon: 'ion:gear-a',
    title: t('routes.main.set.set'),
    orderNo: 10,
  },
  children: [
    {
      path: 'sysSet',
      name: 'systemSet',
      component: () => import('/@/views/basicSet/sysSet/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.main.set.sysSet'),
      },
    },
    {
      path: 'basicSet',
      name: 'basicSet',
      component: () => import('/@/views/basicSet/companySet/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.main.set.companySet'),
      },
    },
  ],
}

export default faq
