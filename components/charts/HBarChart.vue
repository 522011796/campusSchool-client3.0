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
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          show: true,
          data: this.dataLegned
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis : {
          type : 'category',
          data : this.dataKey,
          axisLabel: {
            interval: 0,
            formatter:function(value){
              let str = value;
              if (value && value.length >= 5){
                str = str.substr(0,4)+"..."
              }
              return str;
            }
          }
        },
        xAxis : {
          type : 'value',
          minInterval : 1
        },
        dataZoom: [
          //y轴内置滑动
          {
            type: 'slider',
            yAxisIndex: 0,
            orient: 'vertical',  // 竖直。
            filterMode: 'empty', // 当前数据窗口外的数据，被 设置为空。即 不会 影响其他轴的数据范围。
            startValue: 0,
            endValue: this.dataKey.length - 6,
            borderColor: 'transparent',
            handleSize: 0,
            showDetail: false  // 是否显示detail，即拖拽时候显示详细数值信息。
          }
        ],
        series : this.data
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
