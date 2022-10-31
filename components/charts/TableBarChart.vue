<template>
  <div :id="chartId" style="height: 100%">

  </div>
</template>

<script>
  export default {
    props: {
      chartId: '',
      chartTitle: {
        default: '达标率',
        type: String
      },
      data: {
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
        let lineId = document.getElementById(this.chartId); //找到绘制的区域,强烈推荐使用refs
        let myChart = this.$echarts.init(lineId); //初始化
        myChart.setOption({ //官网例子
          grid: {
            top:'4%',
            left: '5%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
          },
          series: [
            {
              radius: "100%", //仪表大小
              name: '',
              type: 'gauge',
              title : {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  fontSize: 13,
                  color: '#808080',
                  shadowColor : '#fff', //默认透明
                  shadowBlur: 10
                }
              },
              axisLine: {
                lineStyle: {
                  width: 8, // 这个是修改宽度的属性
                  color: [[0.2, '#c23531'], [0.8, '#63869e'], [1, '#91c7ae']]
                }
              },
              axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式

                }
              },
              splitLine: {           // 分隔线
                length :10,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                  width:3,
                  color: '#fff',
                  shadowColor : '#fff', //默认透明
                  shadowBlur: 10
                }
              },
              pointer: {
                width:2,//指针的宽度
                length:"50%", //指针长度，按照半圆半径的百分比
                shadowColor : '#ccc', //默认透明
                shadowBlur: 5
              },
              detail: {
                formatter:'{value}%',
                offsetCenter: [0,"20%"],
                textStyle:{
                  fontSize:12
                }

              },
              title: {                // 仪表盘标题。
                show: true,             // 是否显示标题,默认 true。
                offsetCenter: [0,"-20%"],//相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                color: "#333",          // 文字的颜色,默认 #333。
                fontSize: 12,           // 文字的字体大小,默认 15。
              },
              data: [{value: this.data, name: this.chartTitle}]
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
