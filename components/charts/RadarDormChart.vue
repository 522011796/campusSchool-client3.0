<template>
  <div :id="chartId" style="height: 100%">

  </div>
</template>

<script>
  export default {
    name: 'radarChart',
    props: {
      chartId: '',
      chartTitle: '',
      radius: {
        default: 70,
        type: [String, Number]
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
      legendRight: {
        default: 50,
        type: [String, Number]
      }
    },
    data(){
      return {
        dataIndicator: 0
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
          title: {
            text: ''
          },
          tooltip: {},
          radar: {
            // shape: 'circle',
            name: {
              textStyle: {
                color: '#434343',
              }
            },
            /*indicator: [
              { name: '正常', max: this.data[0]},
              { name: '早退', max: this.data[1]},
              { name: '旷课', max: this.data[2]},
              { name: '迟到', max: this.data[3]},
              { name: '请假', max: this.data[4]}
            ],*/
            indicator: (function(data){
              return [
                { name: '正常', max: _self.data[0]+10},
                { name: '未归', max: _self.data[1]+10},
                { name: '晚归', max: _self.data[2]+10},
                { name: '超长未归', max: _self.data[3]+10},
                { name: '请假', max: _self.data[4]+10}
              ];
            })(),
            radius: _self.radius,
          },
          series: [{
            name: this.chartTitle,
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
              {
                value : this.data
              }
            ]
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
