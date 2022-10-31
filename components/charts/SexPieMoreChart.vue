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
    data: {
      default: function(){
        return [];
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
      let dataList = [];
      if (this.data.length > 0){
        for (let i = 0; i < this.data.length; i++){
          dataList.push(
            {
              value: this.data[i].count,
              name: this.data[i].str1,
              itemStyle: {
                normal: {
                  //color: '#4C8DFA'
                }
              }
            }
          );
        }
        dataList.push(
          {
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
          }
        );
      }

      let lineId = document.getElementById(this.chartId); //找到绘制的区域,强烈推荐使用refs
      let myChart = this.$echarts.init(lineId); //初始化
      myChart.setOption({ //官网例子
        tooltip: {
          trigger: 'item',
          formatter: '{b}:{c}人'
        },
        series: [{
          name: '类型分布',
          type: "pie",
          radius: ['70%', '100%'],
          startAngle: 180,
          center: ['center', '65%'],
          data: dataList
        }]
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
