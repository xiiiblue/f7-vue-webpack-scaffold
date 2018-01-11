<template>
  <f7-page :name="$route.route.name" :class="$route.route.name">
    <navbar :title="$route.route.title"></navbar>

    <f7-block-title>积分报表</f7-block-title>

    <f7-block>
      <f7-buttons>
        <f7-button href="#report1" class="tab-link active">报表1</f7-button>
        <f7-button href="#report2" class="tab-link">报表2</f7-button>
        <f7-button href="#report3" class="tab-link">报表3</f7-button>
      </f7-buttons>

      <f7-tabs animated>
        <f7-tab id="report1" active>
          <div class="blank-block1"></div>
        </f7-tab>
        <f7-tab id="report2">
          <div class="blank-block2"></div>
        </f7-tab>
        <f7-tab id="report3">
          <div class="blank-block3"></div>
        </f7-tab>
      </f7-tabs>
    </f7-block>

  </f7-page>
</template>


<style lang="less">
  //@import "~c3/c3.css";
  @import "../../assets/styles/mixins.less";

  .showcase-report {
    .blank-block1 {
      height: 160px;
      margin-top: 15px;
      background-color: @lightGreyColor;
    }
    .blank-block2 {
      height: 160px;
      margin-top: 15px;
      background-color: @greyColor;
    }
    .blank-block3 {
      height: 160px;
      margin-top: 15px;
      background-color: @mainColor;
    }
  }
</style>

<script-delete>
  import c3 from 'c3'

  export default {
    data() {
      return {}
    },
    methods: {
      // 绘制报表
      drawChart() {
        var chart1 = c3.generate({
          bindto: '#tab1',
          data: {
            columns: [
              ['data1', 30, 200, 100, 400, 150, 250],
              ['data2', 50, 20, 10, 40, 15, 25]
            ],
            axes: {
              data2: 'y2'
            },
            types: {
              data2: 'bar'
            }
          },
          size: {
            height: 240
          }
        })
        setTimeout(function () {
          chart1.load({
            columns: [
              ['data1', 230, 190, 300, 500, 300, 400]
            ]
          })
        }, 1000)

        setTimeout(function () {
          chart1.load({
            columns: [
              ['data3', 130, 150, 200, 300, 200, 100]
            ]
          })
        }, 1500)


        var chart2 = c3.generate({
          bindto: '#tab2',
          data: {
            // iris data from R
            columns: [
              ['data1', 30],
              ['data2', 120],
            ],
            type: 'pie',
            onclick: function (d, i) {
              console.log('onclick', d, i)
            },
            onmouseover: function (d, i) {
              console.log('onmouseover', d, i)
            },
            onmouseout: function (d, i) {
              console.log('onmouseout', d, i)
            }
          },
          size: {
            height: 240
          }
        })

        setTimeout(function () {
          chart2.load({
            columns: [
              ['setosa', 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
              ['versicolor', 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
              ['virginica', 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
            ]
          })
        }, 1500)

        setTimeout(function () {
          chart2.unload({
            ids: 'data1'
          })
          chart2.unload({
            ids: 'data2'
          })
        }, 2500)


        c3.generate({
          bindto: '#tab3',
          data: {
            columns: [
              ['data1', 30, 200, 100, 400, 150, 250],
            ],
            types: {
              data1: 'bar'
            }
          },
          size: {
            height: 240
          }
        })
      },
    },
    mounted() {
      this.drawChart()
    },
  }
</script-delete>
