<template>
  <div :id="chartId" style="height: 100%">

  </div>
</template>

<script>
export default {
  props: {
    chartId: '',
    chartTitle: '',
    dataLegned: {
      default: function(){
        return [];
      },
      type: Array
    },
    dataKey: {
      default: function(){
        return [];
      },
      type: Array
    },
    total: {
      default: 0,
      type: [String, Number]
    },
    male: {
      default: 0,
      type: [String, Number]
    },
    famale: {
      default: 0,
      type: [String, Number]
    },
    other: {
      default: 0,
      type: [String, Number]
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
      let other = this.total - this.male - this.famale;

      let lineId = document.getElementById(this.chartId); //找到绘制的区域,强烈推荐使用refs
      let myChart = this.$echarts.init(lineId); //初始化
      myChart.setOption({ //官网例子
        tooltip: {
          trigger: 'item',
          formatter: '{b}:{c}人'
        },
        series: [{
          name: '性别分布',
          type: "pie",
          radius: ['70%', '100%'],
          startAngle: 180,
          center: ['center', '65%'],
          data: [{
            value: this.male,
            name: "男",
            itemStyle: {
              normal: {
                color: '#4C8DFA'
              }
            }
          }, {
            value: this.famale,
            name: "女",
            itemStyle: {
              normal: {
                color: '#FFD18B'
              }
            }
          }, {
            value: other,
            name: "其他",
            itemStyle: {
              normal: {
                color: '#FF0033'
              }
            }
          }, {
            value: this.total,
            name: '',
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            itemStyle: {
              normal: {
                color: 'transparent',
                borderWidth: 0,
                shadowBlur: 0,
                borderColor: 'transparent',
                shadowColor: 'transparent'
              }
            },
          }]
        }]
      },true);
    }
  },
  watch: {
    total: function (newQuestion, oldQuestion) {
      this.lineChart();
    },
    male: function (newQuestion, oldQuestion) {
      this.lineChart();
    },
    famale: function (newQuestion, oldQuestion) {
      this.lineChart();
    }
  }
}
</script>

<style scoped>

</style>
