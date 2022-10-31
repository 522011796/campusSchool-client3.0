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
      myChart.setOption({ //官网例子
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: this.dataLegned
        },
        grid: {
          top: '15%',
          left: '2%',
          right: '2%',
          bottom: '8%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#DCDFE6',//左边线的颜色
              width:'1'//坐标线的宽度
            }
          },
          axisLabel: {
            interval:0,
            rotate:40,
            textStyle: {
              color: '#333333',//坐标值得具体的颜色
            }
          },
          data: this.dataKey
        },
        yAxis: {
          type: 'value',
          splitLine:{
            show:true,
            lineStyle:{
              type:'dashed',
              color: '#eeeeee'
            }
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#DCDFE6',//左边线的颜色
              width:'1'//坐标线的宽度
            }
          },
          axisLabel: {
            textStyle: {
              color: '#333333',//坐标值得具体的颜色

            }
          },
        },
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
