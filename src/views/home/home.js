//地图右边的柱状图
var miniCompany = echarts.init(document.getElementById('miniCompany'));
option ={
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
      fontSize: '.8rem'
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
      "fontSize": '5rem'
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
};
miniCompany.setOption(option);

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
      fontSize: '1.2rem',
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
        color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#5ef3ff'
        }, {
          offset: 1,
          color: '#06a4f4'
        }], false)
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

$.get('http://192.168.0.20:8080/CMS/api/queryXGZTJ.do', function(res){
  console.log('ddd',res)
})