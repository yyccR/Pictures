(function () {
    require.config({
        paths: {
			echarts: "echarts",
		},
    });

    require(
    [
        "echarts",
        "echarts/chart/main",
		"echarts/chart/map",	
    ],
    function (echarts, BMapExtension) {
        $('#main').css({
            height:$('body').height(),
            width:$('body').width()
        });

        // 初始化地图
        var BMapExt = new BMapExtension($('#main')[0], BMap, echarts,{
            enableMapClick: false
        });
        var map = BMapExt.getMap();
        var container = BMapExt.getEchartsContainer();

        var startPoint = {
            x: -102.119632, //USA -122.419632, 37.802006
            y: 35.802006
        };

        var point = new BMap.Point(startPoint.x, startPoint.y);
        map.centerAndZoom(point, 5);
        map.enableScrollWheelZoom(true);
        // 地图自定义样式
        map.setMapStyle({
           styleJson: [
          {
                    'featureType': 'land',     //调整土地颜色
                    'elementType': 'geometry',
                    'stylers': {
                              'color': '#081734'
                    }
          },
          {
                    'featureType': 'building',   //调整建筑物颜色
                    'elementType': 'geometry',
                    'stylers': {
                              'color': '#04406F'
                    }
          },
         {
                    'featureType': 'building',   //调整建筑物标签是否可视
                    'elementType': 'labels',
                    'stylers': {
                    'visibility': 'off'
                    }
          },
          {
                    'featureType': 'highway',     //调整高速道路颜色
                    'elementType': 'geometry',
                    'stylers': {
                    'color': '#015B99'
                    }
          },
          {
                    'featureType': 'highway',    //调整高速名字是否可视
                    'elementType': 'labels',
                    'stylers': {
                    'visibility': 'off'
                    }
          },
          {
                    'featureType': 'arterial',   //调整一些干道颜色
                    'elementType': 'geometry',
                    'stylers': {
                    'color':'#003051'
                    }
          },
          {
                    'featureType': 'arterial',
                    'elementType': 'labels',
                    'stylers': {
                    'visibility': 'off'
                    }
          },
          {
                    'featureType': 'green',
                    'elementType': 'geometry',
                    'stylers': {
                    'visibility': 'off'
                    }
          },
          {
                    'featureType': 'water',
                    'elementType': 'geometry',
                    'stylers': {
                              'color': '#044161'
                    }
          },
          {
                    'featureType': 'subway',    //调整地铁颜色
                    'elementType': 'geometry.stroke',
                    'stylers': {
                    'color': '#003051'
                    }
          },
          {
                    'featureType': 'subway',
                    'elementType': 'labels',
                    'stylers': {
                    'visibility': 'off'
                    }
          },
          {
                    'featureType': 'railway',
                    'elementType': 'geometry',
                    'stylers': {
                    'visibility': 'off'
                    }
          },
          {
                    'featureType': 'railway',
                    'elementType': 'labels',
                    'stylers': {
                    'visibility': 'off'
                    }
          },
          {
                    'featureType': 'all',     //调整所有的标签的边缘颜色
                    'elementType': 'labels.text.stroke',
                    'stylers': {
                              'color': '#313131'
                    }
          },
          {
                    'featureType': 'all',     //调整所有标签的填充颜色
                    'elementType': 'labels.text.fill',
                    'stylers': {
                              'color': '#FFFFFF'
                    }
          },
          {
                    'featureType': 'manmade',   
                    'elementType': 'geometry',
                    'stylers': {
                    'visibility': 'off'
                    }
          },
          {
                    'featureType': 'manmade',
                    'elementType': 'labels',
                    'stylers': {
                    'visibility': 'off'
                    }
          },
          {
                    'featureType': 'local',
                    'elementType': 'geometry',
                    'stylers': {
                    'visibility': 'off'
                    }
          },
          {
                    'featureType': 'local',
                    'elementType': 'labels',
                    'stylers': {
                    'visibility': 'off'
                    }
          },
          {
                    'featureType': 'subway',
                    'elementType': 'geometry',
                    'stylers': {
                              'lightness': -65
                    }
          },
          {
                    'featureType': 'railway',
                    'elementType': 'all',
                    'stylers': {
                              'lightness': -40
                    }
          },
          {
                    'featureType': 'boundary',
                    'elementType': 'geometry',
                    'stylers': {
                              'color': '#8b8787',
                              'weight': '1',
                              'lightness': -29
                    }
          }
    ]
        });

option = {
	
    color: ['gold','aqua','lime'],
    title : {
        text: '',
        subtext: '',
        x:'center',
        textStyle : {
            color: '#fff',
			fontSize:20,
			fontWeight:'bold',
        }
    },
    tooltip : {
        show: true,
		trigger:'item',
		hideDelay:4000,
        formatter: function(d) {
			var jw= '经度：'+d.value[0]+'<br/>'
			    jw += '纬度：'+d.value[1]
			return jw       
        }
	},
	color:['gold','red'],
	legend:{
		data:['44 points route planning(no cycle)','42 points route planning(cycle)'],
		x:'left',
		orient:'vertical',
		padding:[30,15,15,30],
		textStyle:{
			fontSize:17,
			color:'rgb(204,204,204)',
		},
		selected:{
			'44 points route planning(no cycle)':true,
			'42 points route planning(cycle)':false
		},
		selectedMode:'single',
	},
	/*
    toolbox: {
        show : true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
           mark : {show: true},
           dataView : {show: true, readOnly: false},
           restore : {show: true},
           saveAsImage : {show: true}
        }
    },*/
  series : [
{
	  name:'44 points route planning(no cycle)',
      type:'map',
      mapType: 'none',
      data:[],
      
      markLine : {
      Symbol:['none', 'arrow'],
      symbolSize:['0', '0.1'],
      smooth:true,
      smooth:1,
      effect : {
          show: true,
          scaleSize: 1,
          period: 30,
          color: '#fff',
          shadowBlur: 10
      },
      itemStyle : {
          color: 'red',
          normal: {
              color:function(param){
              return(param.data[0].value.colorValue);
              },
              borderWidth:3,
              lineStyle: {
                  type: 'solid',
                  width: 3,
                  shadowBlur: 10
              },
              label:{show:false,value:'USA'}
        }
      },

    data : [

[{name: 'P.102323'}, {name: 'A.48296', value: {colorValue: 'gold'}}] ,
[{name: 'A.48296'}, {name: 'A.48456', value: {colorValue: 'gold'}}] ,
[{name: 'A.48456'}, {name: 'A.48387', value: {colorValue: 'gold'}}] ,
[{name: 'A.48387'}, {name: 'A.48307', value: {colorValue: 'gold'}}] ,
[{name: 'A.48307'}, {name: 'A.48312', value: {colorValue: 'gold'}}] ,
[{name: 'A.48312'}, {name: 'A.48288', value: {colorValue: 'gold'}}] ,
[{name: 'A.48288'}, {name: 'A.48295', value: {colorValue: 'gold'}}] ,

[{name: 'A.48295'}, {name: 'A.48289', value: {colorValue: 'gold'}}] ,
[{name: 'A.48289'}, {name: 'A.48300', value: {colorValue: 'gold'}}] ,
[{name: 'A.48300'}, {name: 'A.48286', value: {colorValue: 'gold'}}] ,
[{name: 'A.48286'}, {name: 'A.48310', value: {colorValue: 'gold'}}] ,
[{name: 'A.48310'}, {name: 'A.50855', value: {colorValue: 'gold'}}] ,
[{name: 'A.50855'}, {name: 'A.50857', value: {colorValue: 'gold'}}] ,
[{name: 'A.50857'}, {name: 'A.50845', value: {colorValue: 'gold'}}] ,
[{name: 'A.50845'}, {name: 'A.50464', value: {colorValue: 'gold'}}] ,
[{name: 'A.50464'}, {name: 'A.50460', value: {colorValue: 'gold'}}] ,
[{name: 'A.50460'}, {name: 'A.50468', value: {colorValue: 'gold'}}] ,
[{name: 'A.50468'}, {name: 'A.50526', value: {colorValue: 'gold'}}] ,
[{name: 'A.50526'}, {name: 'A.50577', value: {colorValue: 'gold'}}] ,
[{name: 'A.50577'}, {name: 'A.103496', value: {colorValue: 'gold'}}] ,

[{name: 'A.103496'}, {name: 'A.51007', value: {colorValue: 'gold'}}] ,
[{name: 'A.51007'}, {name: 'A.50789', value: {colorValue: 'gold'}}] ,
[{name: 'A.50789'}, {name: 'A.50348', value: {colorValue: 'gold'}}] ,
[{name: 'A.50348'}, {name: 'A.47349', value: {colorValue: 'gold'}}] ,
[{name: 'A.47349'}, {name: 'A.50362', value: {colorValue: 'gold'}}] ,
[{name: 'A.50362'}, {name: 'A.50355', value: {colorValue: 'gold'}}] ,
[{name: 'A.50355'}, {name: 'A.50346', value: {colorValue: 'gold'}}] ,
[{name: 'A.50346'}, {name: 'A.47335', value: {colorValue: 'gold'}}] ,
[{name: 'A.47335'}, {name: 'A.47342', value: {colorValue: 'gold'}}] ,
[{name: 'A.47342'}, {name: 'A.47370', value: {colorValue: 'gold'}}] ,
[{name: 'A.47370'}, {name: 'A.47341', value: {colorValue: 'gold'}}] ,
[{name: 'A.47341'}, {name: 'A.47350', value: {colorValue: 'gold'}}] ,
[{name: 'A.47350'}, {name: 'A.47418', value: {colorValue: 'gold'}}] ,
[{name: 'A.47418'}, {name: 'A.47346', value: {colorValue: 'gold'}}] ,
[{name: 'A.47346'}, {name: 'A.47332', value: {colorValue: 'gold'}}] ,
[{name: 'A.47332'}, {name: 'A.47328', value: {colorValue: 'gold'}}] ,
[{name: 'A.47328'}, {name: 'A.47388', value: {colorValue: 'gold'}}] ,

[{name: 'A.47388'}, {name: 'A.47414', value: {colorValue: 'gold'}}] ,
[{name: 'A.47414'}, {name: 'A.47333', value: {colorValue: 'gold'}}] ,
[{name: 'A.47333'}, {name: 'A.47330', value: {colorValue: 'gold'}}] ,
[{name: 'A.47330'}, {name: 'A.47375', value: {colorValue: 'gold'}}] ,
[{name: 'A.47375'}, {name: 'A.47368', value: {colorValue: 'gold'}}] ,
[{name: 'A.47368'}, {name: 'D.102258', value: {colorValue: 'gold'}}]




		]
		},

      geoCoord:{

 
				 		  
'A.47388': [-118.114449, 34.129074] ,
'A.47346': [-118.326881, 34.101505] ,
'D.102258': [-118.408, 33.942] ,
'A.48286':[-122.478722, 37.819794] ,
'A.50346':[-119.668251, 34.419445] ,
'A.50577':[-121.901718, 36.371418] ,
'A.50348':[-120.144257, 34.596298] ,
'A.50789':[-121.187553, 35.644032] ,
'A.48288':[-122.419632, 37.802006] ,
'A.48289':[-122.449028, 37.802624] ,
'A.48456':[-122.433014, 37.776394] ,
'A.47370':[-118.386192, 34.090511] ,
'A.47375':[-118.411705, 33.884388] ,
'A.48387':[-122.425194, 37.783997] ,
'A.50362':[-119.703323, 34.423985] ,
'A.47350':[-118.341003, 34.102043] ,
'A.48307':[-122.407539, 37.787884] ,
'A.48300':[-122.468674, 37.771469] ,
'A.47328':[-118.353416, 34.138077] ,
'A.47335':[-118.499359, 34.007885] ,
'A.47333':[-118.266838, 34.043022] ,
'P.102323': [-122.393, 37.616] ,
'A.47330': [-118.286209, 34.015789] ,
'A.50526': [-121.910812, 36.563637] ,
'A.50845': [-122.018364, 36.963409] ,
'A.51007': [-121.25769, 35.662872] ,
'A.50355': [-119.674377, 34.415691] ,
'A.47414': [-118.250435, 34.053303] ,
'A.50468': [-121.91951, 36.543346] ,
'A.47368': [-118.001045, 33.655754] ,
'A.47332': [-118.300354, 34.118374] ,
'A.50460': [-121.901825, 36.618275] ,
'A.47418': [-118.319412, 34.08527] ,
'A.50464': [-121.93148, 36.617451] ,
'A.47349': [-120.13765, 34.595821] ,
'A.103496': [-121.807976, 36.27042] ,
'A.47342': [-118.400505, 34.07373] ,
'A.47341': [-118.341537, 34.101723] ,
'A.48295': [-122.410416, 37.810017] ,
'A.48296': [-122.416046, 37.780125] ,
'A.50857': [-122.393936, 37.181736] ,
'A.50855': [-122.166077, 37.424107] ,
'A.48310': [-122.446938, 37.770004] ,
'A.48312': [-122.407951, 37.79401] 
    }
},


{
	  name:'42 points route planning(cycle)',
      type:'map',
      mapType: 'none',
      data:[],
      
      markLine : {
      Symbol:['none', 'arrow'],
      symbolSize:['0', '0.1'],
      smooth:true,
      smooth:1,
      effect : {
          show: true,
          scaleSize: 1,
          period: 30,
          color: '#fff',
          shadowBlur: 10
      },
      itemStyle : {
          color: 'red',
          normal: {
              color:function(param){
              return(param.data[0].value.colorValue);
              },
              borderWidth:3,
              lineStyle: {
                  type: 'solid',
                  width: 3,
                  shadowBlur: 10
              },
              label:{show:false,value:'USA'}
        }
      },

    data : [

[{name: 'A.48938'}, {name: 'A.48916', value: {colorValue: 'gold'}}] ,
[{name: 'A.48916'}, {name: 'A.48914', value: {colorValue: 'gold'}}] ,
[{name: 'A.48914'}, {name: 'A.48907', value: {colorValue: 'gold'}}] ,
[{name: 'A.48907'}, {name: 'P.10876', value: {colorValue: 'gold'}}] ,
[{name: 'P.10876'}, {name: 'D.10876', value: {colorValue: 'gold'}}] ,
[{name: 'D.10876'}, {name: 'A.48947', value: {colorValue: 'gold'}}] ,
[{name: 'A.48947'}, {name: 'A.48909', value: {colorValue: 'gold'}}] ,
[{name: 'A.48909'}, {name: 'A.48912', value: {colorValue: 'gold'}}] ,
[{name: 'A.48912'}, {name: 'A.48905', value: {colorValue: 'gold'}}] ,
[{name: 'A.48905'}, {name: 'A.48899', value: {colorValue: 'gold'}}] ,
[{name: 'A.48899'}, {name: 'A.48918', value: {colorValue: 'gold'}}] ,
[{name: 'A.48918'}, {name: 'A.48898', value: {colorValue: 'gold'}}] ,
[{name: 'A.48898'}, {name: 'A.48987', value: {colorValue: 'gold'}}] ,
[{name: 'A.48987'}, {name: 'A.48922', value: {colorValue: 'gold'}}] ,
[{name: 'A.48922'}, {name: 'A.48937', value: {colorValue: 'gold'}}] ,
[{name: 'A.48937'}, {name: 'A.48924', value: {colorValue: 'gold'}}] ,
[{name: 'A.48924'}, {name: 'A.48904', value: {colorValue: 'gold'}}] ,
[{name: 'A.48904'}, {name: 'A.48940', value: {colorValue: 'gold'}}] ,
[{name: 'A.48940'}, {name: 'A.47736', value: {colorValue: 'gold'}}] ,
[{name: 'A.47736'}, {name: 'A.47652', value: {colorValue: 'gold'}}] ,
[{name: 'A.47652'}, {name: 'A.47658', value: {colorValue: 'gold'}}] ,
[{name: 'A.47658'}, {name: 'A.47668', value: {colorValue: 'gold'}}] ,
[{name: 'A.47668'}, {name: 'A.47642', value: {colorValue: 'gold'}}] ,
[{name: 'A.47642'}, {name: 'A.47647', value: {colorValue: 'gold'}}] ,
[{name: 'A.47647'}, {name: 'A.47633', value: {colorValue: 'gold'}}] ,
[{name: 'A.47633'}, {name: 'A.47634', value: {colorValue: 'gold'}}] ,
[{name: 'A.47634'}, {name: 'A.47671', value: {colorValue: 'gold'}}] ,
[{name: 'A.47671'}, {name: 'A.47673', value: {colorValue: 'gold'}}] ,
[{name: 'A.47673'}, {name: 'A.47726', value: {colorValue: 'gold'}}] ,
[{name: 'A.47726'}, {name: 'A.47659', value: {colorValue: 'gold'}}] ,
[{name: 'A.47659'}, {name: 'A.47653', value: {colorValue: 'gold'}}] ,
[{name: 'A.47653'}, {name: 'A.47643', value: {colorValue: 'gold'}}] ,
[{name: 'A.47643'}, {name: 'A.47710', value: {colorValue: 'gold'}}] ,
[{name: 'A.47710'}, {name: 'A.47717', value: {colorValue: 'gold'}}] ,
[{name: 'A.47717'}, {name: 'A.47635', value: {colorValue: 'gold'}}] ,
[{name: 'A.47635'}, {name: 'A.47684', value: {colorValue: 'gold'}}] ,
[{name: 'A.47684'}, {name: 'A.50944', value: {colorValue: 'gold'}}] ,
[{name: 'A.50944'}, {name: 'A.50945', value: {colorValue: 'gold'}}] ,
[{name: 'A.50945'}, {name: 'A.48897', value: {colorValue: 'gold'}}] ,
[{name: 'A.48897'}, {name: 'A.48901', value: {colorValue: 'gold'}}] ,
[{name: 'A.48901'}, {name: 'A.48973', value: {colorValue: 'gold'}}] ,
[{name: 'A.48973'}, {name: 'A.48938', value: {colorValue: 'gold'}}] ,



		]
		},

      geoCoord:{




'A.48918' : [-71.099014, 42.338245] ,
'A.48937' : [-71.097618, 42.36208] ,
'A.48912' : [-71.076324, 42.349911] ,
'A.48916' : [-71.04937, 42.359131] ,
'A.50945' : [-71.307213, 41.474922] ,
'A.48914' : [-71.055634, 42.36013] ,
'A.47673' : [-74.000099, 40.730965] ,
'A.47684' : [-73.956558, 40.773563] ,
'A.48973' : [-71.062103, 42.358109] ,
'A.48898' : [-71.097221, 42.346687] ,
'A.47647' : [-73.9832, 40.753597] ,
'A.48897' : [-71.063896, 42.355461] ,
'A.50944' : [-71.297775, 41.485153] ,
'A.47643' : [-74.044533, 40.689301] ,
'A.47642' : [-73.980392, 40.754162] ,
'A.47668' : [-73.976532, 40.758587] ,
'A.47726' : [-73.995888, 40.729458] ,
'A.48922' : [-71.099129, 42.359859] ,
'A.48909' : [-71.075401, 42.350098] ,
'A.48899' : [-71.096863, 42.338596] ,
'A.48924' : [-71.117287, 42.374928] ,
'A.48905' : [-71.077881, 42.349449] ,
'A.48904' : [-71.115677, 42.37632] ,
'A.48907' : [-71.054504, 42.36628] ,
'D.10876' : [-71.0133060459, 42.3631111005] ,
'A.48901' : [-71.063828, 42.355412] ,
'A.48987' : [-71.084999, 42.344479] ,
'P.10876' : [-71.0133060459, 42.3631111005] ,
'A.48940' : [-71.115562, 42.37846] ,
'A.48947' : [-71.08252, 42.347141] ,
'A.47633' : [-73.982254, 40.753128] ,
'A.47717' : [-74.004791, 40.747978] ,
'A.47710' : [-74.01326, 40.711536] ,
'A.47634' : [-73.985664, 40.748459] ,
'A.47635' : [-73.97393, 40.771717] ,
'A.47659' : [-73.990776, 40.707497] ,
'A.47652' : [-73.962769, 40.779144] ,
'A.47653' : [-73.996826, 40.706051] ,
'A.48938' : [-71.059219, 42.358063] ,
'A.47658' : [-73.977631, 40.761356] ,
'A.47736' : [-73.959061, 40.782948] ,
'A.47671' : [-73.990395, 40.735859] 



    }
},
	

	
    ]
};


var myChart = BMapExt.initECharts(container);
window.onresize = myChart.onresize;
BMapExt.setOption(option);
                }
                );
                })();

