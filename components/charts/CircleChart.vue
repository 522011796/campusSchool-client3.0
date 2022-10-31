<template>
  <div :id="chartId" style="height: 100%">

  </div>
</template>

<script>
  export default {
    name: 'circleChart',
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
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)',
            position: function (point, params, dom, rect, size) {
              // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下
              // 提示框位置
              var x = 0; // x坐标位置
              var y = 0; // y坐标位置

              // 当前鼠标位置
              var pointX = point[0];
              var pointY = point[1];

              // 外层div大小
              // var viewWidth = size.viewSize[0];
              // var viewHeight = size.viewSize[1];

              // 提示框大小
              var boxWidth = size.contentSize[0];
              var boxHeight = size.contentSize[1];

              // boxWidth > pointX 说明鼠标左边放不下提示框
              if (boxWidth > pointX) {
                x = 5;
              } else { // 左边放的下
                x = pointX - boxWidth;
              }

              // boxHeight > pointY 说明鼠标上边放不下提示框
              if (boxHeight > pointY) {
                y = 5;
              } else { // 上边放得下
                y = pointY - boxHeight;
              }

              return [x, y];
            }
          },
          legend: {
            type: 'scroll',
            orient: 'vertical',
            right: this.legendRight,
            itemWidth: 15,
            itemHeight: 10,
            textStyle: {
              fontSize: 12,
              color: '#909399'
            },
            data: this.dataKey
          },
          series: [
            {
              name: this.chartTitle ? this.chartTitle : '信息',
              type: 'pie',
              radius: this.radius,
              center: this.center,
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '10',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: this.data
            }
          ]
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
