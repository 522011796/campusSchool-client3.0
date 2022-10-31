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
      let schema = [
        {name: 'date', index: 0, text: ''},
        {name: 'A', index: 1, text: '已归率'},
        {name: 'B', index: 2, text: '未归率'},
        {name: 'C', index: 3, text: '已归'},
        {name: 'D', index: 3, text: '晚归'},
        {name: 'E', index: 4, text: '超长未归'},
        {name: 'F', index: 5, text: '未归'},
        {name: 'G', index: 6, text: '请假'}
      ];


      let itemStyle = {
        normal: {
          opacity: 0.8,
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'rgba(0, 0, 0, 0.8)'
        }
      };
      myChart.setOption({ //官网例子
        backgroundColor: '#ffffff',
        grid: {
          x: '5%',
          x2: 50,
          y: '18%',
          y2: '10%'
        },
        tooltip: {
          padding: 10,
          backgroundColor: '#222',
          borderColor: '#777',
          borderWidth: 1,
          formatter: function (obj) {
            var value = obj.value;
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 15px;padding-bottom: 7px;margin-bottom: 7px">'
              + obj.seriesName
              + '</div>'
              + schema[1].text + '：' + value[1] + '<br>'
              + schema[2].text + '：' + value[2] + '<br>'
              + schema[3].text + '：' + value[3] + '<br>'
              + schema[4].text + '：' + value[4] + '<br>'
              + schema[5].text + '：' + value[5] + '<br>'
              + schema[6].text + '：' + value[6] + '<br>'
              + schema[7].text + '：' + value[7] + '<br>';
          }
        },
        xAxis: {
          type: 'category',
          nameGap: 16,
          nameTextStyle: {
            color: '#434343',
            fontSize: 14
          },
          //max: 31,
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#434343'
            }
          },
          data: this.dataKey
        },
        yAxis: {
          type: 'value',
          nameLocation: 'end',
          nameGap: 20,
          nameTextStyle: {
            color: '#434343',
            fontSize: 12
          },
          axisLine: {
            lineStyle: {
              color: '#434343'
            }
          },
          splitLine: {
            show: false
          }
        },
        visualMap: [
          {
            text: ['已归率'],
            left: 'right',
            top: '5%',
            dimension: 1,
            min: 0,
            max: 100,
            itemWidth: 20,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            textGap: 30,
            textStyle: {
              color: '#434343'
            },
            inRange: {
              symbolSize: [10, 70]
            },
            outOfRange: {
              symbolSize: [10, 70],
              color: ['rgba(255,255,255,.2)']
            },
            controller: {
              inRange: {
                color: ['#c23531']
              },
              outOfRange: {
                color: ['#444']
              }
            }
          }
        ],
        series: this.data
      },true);
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
