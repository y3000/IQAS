export interface GrowCardItem {
  icon: string
  title: string
  value: number
  total?: number
  color: string
  action?: string
  compareYesterday: string
}

export const growCardList: GrowCardItem[] = [
  {
    title: '浏览量(PV)',
    icon: 'visit-count|svg',
    value: 12980,
    compareYesterday: '15.78%',
    color: 'green',
    action: '月',
  },
  {
    title: '访客数(UV)',
    icon: 'total-sales|svg',
    value: 19800,
    compareYesterday: '10%',
    color: 'blue',
    action: '月',
  },
  {
    title: 'IP数',
    icon: 'download-count|svg',
    value: 8890,
    compareYesterday: '15.67%',
    color: 'orange',
    action: '月',
  },
  {
    title: '新访客',
    icon: 'transaction|svg',
    value: 1680,
    compareYesterday: '5%',
    color: 'purple',
    action: '月',
  },
];
