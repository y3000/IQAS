/*
 * @Description:
 * @Version: 2.0
 * @Autor: y3000
 * @Date: 2022-08-09 14:45:10
 * @LastEditors: y3000
 * @LastEditTime: 2022-09-02 21:15:42
 */

import { BasicColumn } from '/@/components/Table/src/types/table';
import { mapData } from './mapdata';
export const getLineData = (() => {
  const category: any[] = [];
  const sevendaysData: any[] = [];
  const todayData: any[] = [];
  const thirtydaysData: any[] = [];
  //x轴刻度
  for (let i = 0; i <= 24; i += 4) {
    category.push(i + '时');
  }
  //随机30天数据
  for (let i = 0; i < 30; i++) {
    const b = parseInt(Math.random() * 300);
    thirtydaysData.push(b);
  }
  //随机7天数据
  for (let i = 0; i < 7; i++) {
    const b = parseInt(Math.random() * 100);
    const d = parseInt(Math.random() * 300);
    todayData.push(b);
    sevendaysData.push(d);
  }

  return { todayData, category, sevendaysData, thirtydaysData };
})();

export const trackList = [
  {
    uuid: 'admin',
    acData: {
      type: '点击', //事件类型
      path: 'https://localhost:8080/home', //发生页面地址
      time: '2022/09/01 09:00:00', //上报时间
      className: 'btn', //元素的class
      val: '提交', //元素的vlaue或innertext
      attrs: "{class:'bb',placeholder:''}", //元素的属性对象
    },
  },
  {
    uuid: 'admin',
    acData: {
      type: '输入', //事件类型
      path: 'https://localhost:8080/home', //发生页面地址
      time: '2022/09/01 09:00:00', //上报时间
      className: 'input', //元素的class
      val: '234444', //元素的vlaue或innertext
      attrs: "{class:'in',placeholder:''}", //元素的属性对象
    },
  },
  {
    uuid: 'admin',
    acData: {
      type: '浏览', //事件类型浏览
      from: 'https://localhost:8080/index', //来源路由
      to: 'https://localhost:8080/login', //目标路由 当前路由
      time: '2022/09/02 09:00:00', //进入页面时间
      outTime: '2022/09/02 10:00:00', //离开页面时间
    },
  },
  {
    uuid: 'admin',
    acData: {
      type: '点击', //事件类型
      path: 'https://localhost:8080/home', //发生页面地址
      time: '2022/09/01 09:00:00', //上报时间
      className: 'btn', //元素的class
      val: '提交', //元素的vlaue或innertext
      attrs: "{class:'bb',placeholder:''}", //元素的属性对象
    },
  },
  {
    uuid: 'admin',
    acData: {
      type: '输入', //事件类型
      path: 'https://localhost:8080/home', //发生页面地址
      time: '2022/09/01 09:00:00', //上报时间
      className: 'input', //元素的class
      val: '234444', //元素的vlaue或innertext
      attrs: "{class:'in',placeholder:''}", //元素的属性对象
    },
  },
  {
    uuid: 'admin',
    acData: {
      type: '浏览', //事件类型浏览
      from: 'https://localhost:8080/index', //来源路由
      to: 'https://localhost:8080/login', //目标路由 当前路由
      time: '2022/09/02 09:00:00', //进入页面时间
      outTime: '2022/09/02 10:00:00', //离开页面时间
    },
  },
  {
    uuid: 'admin',
    acData: {
      type: '点击', //事件类型
      path: 'https://localhost:8080/home', //发生页面地址
      time: '2022/09/01 09:00:00', //上报时间
      className: 'btn', //元素的class
      val: '提交', //元素的vlaue或innertext
      attrs: "{class:'bb',placeholder:''}", //元素的属性对象
    },
  },
  {
    uuid: 'admin',
    acData: {
      type: '输入', //事件类型
      path: 'https://localhost:8080/home', //发生页面地址
      time: '2022/09/01 09:00:00', //上报时间
      className: 'input', //元素的class
      val: '234444', //元素的vlaue或innertext
      attrs: "{class:'in',placeholder:''}", //元素的属性对象
    },
  },
  {
    uuid: 'admin',
    acData: {
      type: '浏览', //事件类型浏览
      from: 'https://localhost:8080/index', //来源路由
      to: 'https://localhost:8080/login', //目标路由 当前路由
      time: '2022/09/02 09:00:00', //进入页面时间
      outTime: '2022/09/02 10:00:00', //离开页面时间
    },
  },
];

export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: '地区',
      dataIndex: 'area',
      width: 150,
    },
    {
      title: '用户数',
      dataIndex: 'count',
      width: 150,
      sorter: true,
    },
  ];
}
export const getAreaData = function () {
  const areaData: any = [];
  mapData.forEach((item) => {
    areaData.push({
      area: item.name,
      count: item.value,
    });
  });
  return areaData;
};
