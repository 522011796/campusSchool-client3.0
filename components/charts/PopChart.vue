<template>
  <div :id="chartId" style="height: 100%">

  </div>
</template>

<script>
  export default {
    props: {
      chartId: '',
      chartTitle: '',
      dataKey: {
        default: function(){
          return [];
        },
        type: Array
      },
      data: {
        default: function(){
          return [];
        },
        type: Array
      },
      legendRight: {
        default: 50,
        type: [String, Number]
      },
      radius: {
        default: function(){
          return ['50%', '80%'];
        },
        type: Array
      },
      center: {
        default: function(){
          return ['30%', '50%'];
        },
        type: Array
      }
    },
    data(){
      return {

      }
    },
    mounted() {
      this.lineChart();
    },
    created() {

    },
    methods: {
      lineChart(){
        let _self=this;
        let lineId = document.getElementById(this.chartId); //找到绘制的区域,强烈推荐使用refs
        let myChart = this.$echarts.init(lineId); //初始化
        myChart.setOption({ //官网例子
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'none'
            },
            formatter: function (params) {
              return params[0].name + ': ' + params[0].value;
            }
          },
          xAxis: {
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {
              textStyle: {
                color: '#e54035',
                fontSize:10
              },
              rotate:-20,
            },
            data: this.dataKey,
          },
          yAxis: {
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {show: false}
          },
          color: ['#e54035'],
          series: [{
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '-130%',
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
              normal: {
                opacity: 0.5
              },
              emphasis: {
                opacity: 1
              }
            },
            data: this.data,
            z: 10
          }]
        });
      }
    },
    watch: {
      data: function (newQuestion, oldQuestion) {
        this.lineChart();
      }
    }
  }
</script>

<style scoped>

</style>
