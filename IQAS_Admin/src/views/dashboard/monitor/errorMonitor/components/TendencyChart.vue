<template>
  <div>
    <div ref="chartRef" :style="{ width: '500px', height: '300px' }"></div>
  </div>
</template>
<script lang='ts'>
import { onMounted, Ref, ref, watch } from 'vue'
import { defineComponent } from 'vue';
import { useECharts } from '/@/hooks/web/useECharts';
import { getLineData } from './data';
export default defineComponent({
  name:'TendencyChart',
  props:{
    chartData:{
      type: Array<any>,
      default: []
    }
  },
  setup() {
      const chartRef = ref<HTMLDivElement | null>(null);
      const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
      const date = ref<string>('今天');

      const { todayData, category, sevendaysData, thirtydaysData } = getLineData;
      let chartsData: any[] = [];
      let category1 = category;
      chartsData = todayData;
      onMounted(() => {
        setOptions({
          backgroundColor: '#ffff',
          tooltip: {
            trigger: 'axis',
            valueFormatter: (value: number) => {
              value = parseInt(value);
              if (value < 60) {
                return value + 'min';
              } else {
                const h = parseInt(value / 60);
                const m = parseInt(value % 60);
                return h + 'h' + m + 'min';
              }
            },
            axisPointer: {
              type: 'shadow',
              label: {
                show: true,
                backgroundColor: '#333',
              },
            },
          },
          legend: {
            name: '时间',
            data: [date.value],
            textStyle: {
              color: '#000',
            },
          },
          xAxis: {
            data: category1,
            axisLine: {
              lineStyle: {
                color: '#000',
              },
            },
          },
          yAxis: {
            name: '时长',
            splitLine: { show: true },
            axisLine: {
              lineStyle: {
                color: '#000',
              },
            },
            axisLabel: {
              formatter: function (value: number) {
                value = parseInt(value);
                if (value < 60) {
                  return value + 'min';
                } else {
                  const h = parseInt(value / 60);
                  const m = value % 60;
                  return h + 'h' + m + 'min';
                }
              },
            },
          },
          series: [
            {
              name: '今天',
              type: 'line',
              smooth: true,
              showAllSymbol: 'auto',
              symbol: 'emptyCircle',
              symbolSize: 15,
              data: chartsData,
            },
          ],
        });
      });
      const changDate = (date) => {
        date = date.target.value;
        // console.log(date);
        if (date == '今天') {
          chartsData = todayData;
          category.length = 0;
          for (let i = 0; i <= 24; i += 4) {
            category.push(i + '时');
          }
        } else if (date == '最近7天') {
          chartsData = sevendaysData;
          category.length = 0;
          let dottedBase = +new Date();
          for (let i = 0; i < 7; i++) {
            const date = new Date((dottedBase -= 1000 * 3600 * 24));
            category.push([date.getMonth() + 1, date.getDate() + 1].join('-'));
          }
        } else {
          chartsData = thirtydaysData;
          category.length = 0;
          let dottedBase = +new Date();
          for (let i = 0; i < 30; i++) {
            const date = new Date((dottedBase -= 1000 * 3600 * 24));
            category.push([date.getMonth() + 1, date.getDate() + 1].join('-'));
          }
        }
        console.log(chartsData, category1);
      };
      watch(date, (val, oldval) => {
        // 监听数据变了  就重新绘制一遍  也就是大佬们说的  "切记，数据变化后需要再次调init方法刷线图表"
        // 绘制图表
        setOptions({
          backgroundColor: '#ffff',
          tooltip: {
            trigger: 'axis',
            valueFormatter: (value: number) => {
              value = parseInt(value);
              if (value < 60) {
                return value + 'm';
              } else {
                const h = parseInt(value / 60);
                const m = parseInt(value % 60);
                return h + 'h' + m + 'm';
              }
            },
            axisPointer: {
              type: 'shadow',
              label: {
                show: true,
                backgroundColor: '#333',
              },
            },
          },
          legend: {
            name: '时间',
            data: [date.value],
            textStyle: {
              color: '#000',
            },
          },
          xAxis: {
            data: category1,
            axisLine: {
              lineStyle: {
                color: '#000',
              },
            },
          },
          yAxis: {
            name: '时长',
            splitLine: { show: true },
            axisLine: {
              lineStyle: {
                color: '#000',
              },
            },
            axisLabel: {
              formatter: function (value: number) {
                value = parseInt(value);
                if (value < 60) {
                  return value + 'm';
                } else {
                  const h = parseInt(value / 60);
                  const m = value % 60;
                  return h + 'h' + m + 'm';
                }
              },
            },
          },
          series: [
            {
              name: date.value,
              type: 'line',
              smooth: true,
              showAllSymbol: 'auto',
              symbol: 'emptyCircle',
              symbolSize: 15,
              data: chartsData,
            },
          ],
        });

        console.log(val, oldval);
        console.log('bianbianbian');
      });

      return { chartRef, date, chartsData, changDate };
    },
})
</script>
<style scoped lang='less'>
</style>