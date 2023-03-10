<template>
  <div class="p-4"> 
    <Card title="异常数据" :loading="loading" class="errorDiv">
      <div class="content">
        <div class="leftDiv">
          <a-progress type="circle" :width="140" :percent="80" status="exception" strokeWidth="8">
            <template #format="percent">
              <span style="color: red">{{ percent }}</span>
              <div class="health-status">健康状态</div>
            </template>
          </a-progress>
        </div>
      
        <a-divider type="vertical" class="divider" />
      
        <div class="right">
          <div class="data">
            <a-progress type="circle" :percent="30" :width="90" strokeColor="red" />
            <div class="data-title">JS 异常</div>
          </div>
          <div class="data">
            <a-progress type="circle" :percent="40" :width="90" />
            <div class="data-title">静态资源异常</div>
          </div>
          <div class="data">
            <a-progress type="circle" :percent="70" :width="90" strokeColor="green" />
            <div class="data-title">接口异常</div>
          </div>
          <div class="data">
            <a-progress type="circle" :percent="88.9" :width="90" strokeColor="orange" />
            <div class="data-title">自定义异常</div>
          </div>
        </div>
      </div>
     
    </Card>
    
    <Card title="异常趋势" :loading="loading">
      <!-- <div v-for=""> </div> -->
      <div class="chart">
        <TendencyChart />
        <TendencyChart />
        <TendencyChart />
        <TendencyChart />
      </div>
      
    </Card>
  </div>
</template>
<script lang="ts" setup>
  import { Ref, ref, watch } from 'vue'
  import { Card } from 'ant-design-vue'
  import { useECharts } from '/@/hooks/web/useECharts'
  import TendencyChart from './components/TendencyChart.vue'
  const props = defineProps({
    loading: Boolean,
    width: {
      type: String as PropType<string>,
      default: '500px',
    },
    height: {
      type: String as PropType<string>,
      default: '500px',
    },
  })
  const chartRef = ref<HTMLDivElement | null>(null)
  const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>)

  watch(
    () => props.loading,
    () => {
      if (props.loading) {
        return
      }
      setOptions({
        tooltip: {
          trigger: 'item',
        },
        legend: {
          bottom: '1%',
          left: 'center',
        },
        series: [
          {
            color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2,
            },
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '12',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: '搜索引擎' },
              { value: 735, name: '直接访问' },
              { value: 580, name: '邮件营销' },
              { value: 484, name: '联盟广告' },
            ],
            animationType: 'scale',
            animationEasing: 'exponentialInOut',
            animationDelay: function () {
              return Math.random() * 100
            },
          },
        ],
      })
    },
    { immediate: true },
  )
  
</script>
<style scoped lang="less">
.errorDiv{
  min-width: 800px;
  margin-bottom: 10px;

  .content{
    position: relative;
    display: flex;
    flex-wrap: nowrap;
  }

  .divider{
    height: 200px;
    margin: 0 30px;
  }

  .leftDiv{
    float: left;
    width: 250px;
    height: 200px;
    padding: 0 0 0 50px;
    margin-left: 50px;
    line-height: 200px;
    // background-color: pink;
  }

  .right{
    float: right;
    right: 0;
    height: 200px;
    padding-top: 55px;
    width: 650px;
    margin-left: 50px;

    .data{
      display: inline-block;
      width: 100px;
      margin: 0 20px;

      .data-title{
        text-align: center;
      }
    }
  }

  .health-status{
    font-size: 18px;
    margin-top: 5px;
  }
  
}

.chart{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
