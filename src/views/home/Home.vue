<template>
  <div class="bg"></div>
  <div class="cont">
    <div class="flx-sb title-top">
      <img class="top-title" src="../../assets/images/home/top-title.png" alt="">
      <div class="top-img">
        <a href="javascript:;"><img src="../../assets/images/home/top-l.png" /></a>
      </div>
      <div class="top-img">
        <a href="javascript:;"><img src="../../assets/images/home/top-r.png" /></a>
      </div>
    </div>
    <div class="cont-b mt2">
      <div class="msg-data">
        <div class="flx-sa">
          <div class="msg-item">
            <div class="msg-num">1,444,221</div>
            <p class="msg-t">海南省小微企业个数</p>
          </div>
          <div class="msg-item">
            <div class="msg-num">144</div>
            <p class="msg-t">海南省个体工商户</p>
          </div>
        </div>
        <img src="../../assets/images/home/border.png" alt="">
        <div class="flx-sa">
          <div class="msg-item">
            <div class="msg-num">106<span>个</span></div>
            <p class="msg-t">党组织总数</p>
          </div>
          <div class="msg-item">
            <div class="msg-num">32<span>%</span></div>
            <p class="msg-t">党组织覆盖率</p>
          </div>
          <div class="msg-item">
            <div class="msg-num">317<span>个</span></div>
            <p class="msg-t">党员总数</p>
          </div>
          <div class="msg-item">
            <div class="msg-num">32<span>个</span></div>
            <p class="msg-t">党组织发展数</p>
          </div>
          <div class="msg-item">
            <div class="msg-num">1,286<span>个</span></div>
            <p class="msg-t">党员发展数</p>
          </div>
        </div>
        <img src="../../assets/images/home/border.png" alt="">
        <div class="flx-sa">
          <div class="msg-item">
            <div class="msg-num">106<span>个</span></div>
            <p class="msg-t">已覆盖群团组织</p>
          </div>
          <div class="msg-item">
            <div class="msg-num">13<span>个</span></div>
            <p class="msg-t">专业市场</p>
          </div>
        </div>
      </div>
      <div class="mt2">
        <div class="fl">
          <div class="clearfix">
            <div class="map-data">
              <img src="../../assets/images/home/map.png" alt="">
              <!-- <img src="img/icon1.png" />
              <img src="img/icon2.png"> -->
              <!-- <div id="demo" style="width: 400px;height: 400px"></div> -->
            </div>
          </div>
          <div class="clearfix mt2">
            <div class="fl">
              <div class="bottom-l">
                <div class="party-job">党员从事行业前6位</div>
                <div id="partyMember" style="width: 311px;height: 247px;"></div>
              </div>
            </div>
            <div class="fr">
              <div class="bottom-r">
                <div class="party-num">各个市县党员人数对比</div>
                <div id="partyNum" style="width: 559px;height: 247px;"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="fr map-r pa">
          <div class="min-com-t">海南省小个专企业数</div>
          <div id="miniCompany" style="width: 350px;height: 750px;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar'); // 引入柱状图
require('echarts/lib/chart/pie');
require('echarts/lib/component/graphic')
require('echarts/lib/component/tooltip'); // 引入提示框
require('echarts/lib/component/title'); //标题组件
require('echarts/lib/component/grid');
require('echarts/lib/component/toolbox');
require('echarts/lib/component/legend');
import { Home } from '@/api/home'



export default {
  name: 'Index',
  components: {},
  data() {
    return {

    }
  },
  methods: {
    gethome() {
      Home().then(function(res){
        console.log(res)
      })
    },
    homeEcharts() {
      //地图右边的柱状图
      var miniCompany = echarts.init(document.getElementById('miniCompany'));
      miniCompany.setOption({
        color: ['#2ddfef', '#ffdb31', '#dc1443'],
        backgroundColor: 'rgba(0,0,0,0)',
        tooltip: {
          trigger: 'axis',
          color: '#fff'
        },
        animation: false,
        grid: {
          "top": "10%",
          "left": "13%",
          "bottom": "1%",
          "right": "1%",
          "containLabel": true
        },
        legend:{
          type: 'plain',
          show:true,
          top: '30px',
          right: '0px',
          align: 'left',
          icon: 'circle',
          itemHeight: 10,
          itemGap: 10,
          textStyle: {
            color: '#fff',
            fontSize: 12
          },
          data:['党员人数','个体户','小微企业'],
        },
        "xAxis": [{
          "type": "value",
          "axisLabel": {
            "textStyle": {
              "color": "white"
            },
            "formatter": "{value}"
          },
          "splitLine": {
            "lineStyle": {
              "color": "RGB(47,68,114)"
            }
          },
          "axisLine": {
            "show": true,
            "lineStyle": {
              "color": "#09aaf6"
            }
          }
        }],
        "yAxis": [{
          "type": "category",
          "nameGap": 3,
          "data": ['海口市', '屯昌县', '五指山市', '白沙县', '琼中县', '文昌市', '琼海市', '陵水县', '保亭县', '三亚市', '乐东县', '东方市', '昌江县', '儋州市', '临高县', '澄迈县', '定安县', '万宁市'],
          "axisTick": {
            "alignWithLabel": true
          },
          "TextStyle": {
            "color": "RGB(47,68,114)",
            "fontSize": 5
          },
          "axisLine": {
            "lineStyle": {
              "color": "#09aaf6"
            }
          },
          "axisLabel": {
            "textStyle": {
              "color": "#fff"
            }
          }
        }],
        "series": [
          {
            name:'个体户',
            type: 'bar',
            //silent: true,
            backgroundColor: '#2ddfef',
            "barWidth": "5",
            //barGap: '-100%', // Make series be overlap
            "data": [{
              "value": 32
            }, {
              "value": 57
            },{
              "value": 45
            }, {
              "value": 52
            },{
              "value": 61
            },{
              "value": 50
            },{
              "value": 50
            }, {
              "value": 57
            },{
              "value": 45
            }, {
              "value": 52
            },{
              "value": 61
            },{
              "value": 50
            },{
              "value": 50
            },{
              "value": 50
            },{
              "value": 50
            },{
              "value": 50
            },{
              "value": 50
            },{
              "value": 50
            }]
          },{
            name:'党员人数',
            type: 'bar',
            //silent: true,
            "barWidth": "5",
            //barGap: '-100%', // Make series be overlap
            "data": [{
              "value": 32
            }, {
              "value": 57
            },{
              "value": 45
            }, {
              "value": 52
            },{
              "value": 61
            },{
              "value": 50
            },{
              "value": 50
            }, {
              "value": 57
            },{
              "value": 45
            }, {
              "value": 52
            },{
              "value": 61
            },{
              "value": 50
            },{
              "value": 50
            },{
              "value": 50
            },{
              "value": 50
            },{
              "value": 50
            },{
              "value": 50
            },{
              "value": 50
            }]
          },
          {
            name:'小微企业',
            type: 'bar',
            "barWidth": "5",
            "data": [{
              "value": 32
            }, {
              "value": 57
            },{
              "value": 45
            }, {
              "value": 52
            },{
              "value": 61
            },{
              "value": 50
            },{
              "value": 50
            }, {
              "value": 57
            },{
              "value": 45
            }, {
              "value": 52
            },{
              "value": 61
            },{
              "value": 50
            },{
              "value": 50
            },{
              "value": 50
            },{
              "value": 50
            },{
              "value": 50
            },{
              "value": 50
            },{
              "value": 50
            }]
          }
        ]
      });

      // 饼图
      var partyMember = echarts.init(document.getElementById('partyMember'));
      var partydata = [{
        "name": "行业一",
        "value": 50
      }, {
        "name": "行业二",
        "value": 50
      }, {
        "name": "行业三",
        "value": 50
      }, {
        "name": "行业四",
        "value": 50
      }, {
        "name": "行业五",
        "value": 50
      }]

      partyMember.setOption({
        color: ['#eeb814', '#726ee1', '#e16b3d', '#3dd4a1', '#f03f65', '#69d0e6'],
        backgroundColor: 'rgba(0,0,0,0)',
        title: {
          text: '14.3%',
          subtext: '行业名称',
          textAlign: 'center',
          x: '39%',
          y: '47%',
          textStyle: {
            color: '#f8c017',
            fontSize: 20,
          },
          subtextStyle: {
            fontSize: 10,
            color: '#fff',
          }
          
        },
        grid: {
          bottom: '0%',
          right: '10%'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/> {c}亿元  ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: '5%',
          top: '30%',
          itemHeight: 6,
          textStyle: {
            color: '#f2f2f2',
            fontSize: 12,
          },
          icon: 'circle',
          data: partydata,
        },
        series: [{
            radius: ['30%', '60%'],
            center: ['40%', '57%'],
            type: 'pie',
            labelLine: {
              normal: {
                show: false,
                length: 30,
                length2: 55
              },
              emphasis: {
                show: false
              }
            },
            label: {
              normal: {
                show: false,
              }
            },
            data: partydata,
          },
          // 边框的设置
          {
            name: '外边框',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: ['70%', '70%'],
            center: ['40%', '57%'],
            label: {
              normal: {
                show: false
              }
            },
            data: [{
              value: 9,
              name: '',
              itemStyle: {
                normal: {
                  borderWidth: 2,
                  borderColor: 'rgba(0,72,255,0.5)'
                }
              }
            }]
          },
        ]
      });

      // 各市县党员人数对比
      var partyNum = echarts.init(document.getElementById('partyNum'));
      partyNum.setOption({
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'item',
          color: '#fff',
          show: 'true'
        },
        xAxis: {
          data: ['海口市', '屯昌县', '五指山市', '白沙县', '琼中县', '文昌市', '琼海市', '陵水县', '保亭县', '三亚市', '乐东县', '东方市', '昌江县', '儋州市', '临高县', '澄迈县', '定安县', '万宁市'],
          axisLine: {
            lineStyle: {
              color: '#09aaf6'
            }
          },
          axisLabel: {
            color: '#fff',
            fontSize: 11,
            interval: 0,
            rotate: 30
          }
        },
        yAxis: {
          nameTextStyle: {
            color: '#fff',
            fontSize: 10
          },
          axisLine: {
            lineStyle: {
              color: '#09aaf6'
            }
          },
          axisLabel: {
            color: 'rgba(197,236,255,0.7)',
            fontSize: 12
          },
          splitLine: {
            show:true,
            lineStyle: {
              color: 'rgba(197,236,255,0.2)'
            }
          },
          interval:500,
        },
        series: [{
          type: 'bar',
          barWidth: 7,
          backgroundStyle: {
            color: 'red'
          },
          itemStyle:{
            normal:{
              color: function() {
                return {
                  colorStops: [{
                    offset: 0,
                    color: '#5ef3ff'
                  },{
                    offset: 1,
                    color: '#06a4f4'
                  }]
                }
              }
            }
          },
          label: {
            normal: {
              show: false,
              fontSize: 10,
              fontWeight: 'bold',
              color: '#ffffff',
              position: 'inside',
            }
          },
          data: [254, 322, 164, 2434, 457, 201, 121, 24, 324, 164, 244, 457, 201, 121, 244, 477, 201, 111]
        }]
      })

      // $.get('http://192.168.0.20:8080/CMS/api/queryXGZTJ.do', function(res){
      //   console.log('ddd',res)
      // })
    }
  },
  mounted(){
    this.homeEcharts()
    this.gethome()
  }
}
</script>
<style scoped>
html,body{font-size: 10px;}
*{
  box-sizing: border-box;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
.mt2{
  margin-top: 20px;
}
.bg{
  background: url(../../assets/images/home/bg.jpg) no-repeat;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  position: fixed;
  left: 0;
  left: 0;
  z-index: 1;
}
.cont{
  position: relative;
  left: 0;
  top: 0;
  width: 1280px;
  margin: 0 auto;
  z-index: 1;
}
.title-top{
  position: relative;
  height: 59px;
  width: 100%;
  max-width: 100%;
}
.top-title{
  width: 100%;
  max-width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.top-img{
  position: relative;
  height: 28px;
  z-index: 2;
  padding: 10px;
}

.flx-sb{
  display: flex;
  justify-content: space-between;
  justify-items: center;
}
.flx-sa{
  display: flex;
  justify-content: space-around;
  justify-items: center;
}

.cont-b{
  position: relative;
  padding: 15px;
  z-index: 2;
}
.cont-b .msg-data{
  background: url(../../assets/images/home/msg.png) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 101px;
  max-width: 100%;
  padding: 15px;
  display: flex;
  justify-content: space-around;
}

.msg-item{
  text-align: center;
  padding: 0 15px;
}
.msg-item .msg-num{
  color: #34fafc;
  font-size: 24px;
  margin-bottom: 8px;
  font-weight: 500;
}
.msg-item .msg-num span{
  font-size: 16px;
  color: #fff;
  margin-left: 5px;
}
.msg-item .msg-t{
  color: #fff;
  font-size: 16px;
  margin: 0;
}

.map-data{
  position: relative;
  width: 831px;
  height: 499px;
  background: url(../../assets/images/home/map-bg.png) no-repeat,url(../../assets/images/home/icon1.png) no-repeat,url(../../assets/images/home/icon2.png) no-repeat;
  background-size: 100% 100%, auto,auto;
  background-position: center,0% 120%,center center;
}
.map-data > img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.map-r{
  position: relative;
  width: 397px;
  height: 771px;
  background: url(../../assets/images/home/map-on-r.png) no-repeat;
  background-size: 100% 100%;
}
.pa{
  position: absolute;
  right: 20px;
}
.min-com-t{
  position: absolute;
  left: 10px;
  top: 15px;
  color: #b6e1ff;
  width: 20px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;
}

.bottom-l{
  position: relative;
  width: 311px;
  height: 247px;
  background: url(../../assets/images/home/bottom-l.png) no-repeat;
  background-size: 100% 100%;
}
.party-job{
  position: absolute;
  left: 15px;
  top: 7px;
  color: #b6e1ff;
  font-size: 18px;
  font-weight: 500;
}
.bottom-r{
  position: relative;
  width: 559px;
  height: 247px;
  background: url(../../assets/images/home/bottom-r.png) no-repeat;
  background-size: 100% 100%;
}
.party-num{
  position: absolute;
  left: 15px;
  top: 7px;
  color: #b6e1ff;
  font-size: 18px;
  font-weight: 500;
}
</style>
