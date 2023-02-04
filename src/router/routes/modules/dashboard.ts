import type { AppRouteModule } from '/@/router/types'

import { LAYOUT, getParentLayout } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard'),
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('/@/views/dashboard/analysis/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.main.dashboard.analysis'),
      },
    },
    // {
    //   path: 'workbench',
    //   name: 'Workbench',
    //   component: () => import('/@/views/dashboard/workbench/index.vue'),
    //   meta: {
    //     title: t('routes.dashboard.workbench'),
    //   },
    // },
    {
      path: 'monitor',
      name: 'Monitor',
      component: getParentLayout('Monitor'),
      redirect: '/dashboard/monitor/errorMonitor',
      meta: {
        // affix: true,
        title: t('routes.main.dashboard.monitor'),
      },
      children: [
        {
          path: 'errorMonitor',
          name: 'ErrorMonitor',
          component: () => import('/@/views/dashboard/monitor/errorMonitor/index.vue'),
          meta: {
            // affix: true,
            title: t('routes.main.dashboard.errorMonitor'),
          },
        },
        {
          path: 'performance',
          name: 'Performance',
          component: () => import('/@/views/dashboard/monitor/performance/index.vue'),
          meta: {
            // affix: true,
            title: t('routes.main.dashboard.performance'),
          },
        },
      ],
    },
  ],
}

export default dashboard
