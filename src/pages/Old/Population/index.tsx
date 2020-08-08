import React, { useLayoutEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const Population = () => {
  useLayoutEffect(() => {
    const map = am4core.create('population', am4maps.MapChart);

    map.geodataSource.url = '/china.json';
    map.projection = new am4maps.projections.Miller();

    const polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    // polygonSeries.calculateVisualCenter = true;
    polygonSeries.mapPolygons.template.events.on("hit", function(ev) {
      map.zoomToMapObject(ev.target);
    });
    const title = map.chartContainer.createChild(am4core.Label);
    title.text = "西汉人口统计";

    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = am4core.color("#DE290F");

    // Create hover state and set alternative fill color
    const hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#D1020A");

    const imageSeries = map.series.push(new am4maps.MapImageSeries());
    imageSeries.dataFields.value = 'population';
  
    const template = imageSeries.mapImages.template;
    template.verticalCenter = "middle";
    template.horizontalCenter = "middle";
    template.propertyFields.latitude = "latitude";
    template.propertyFields.longitude = "longitude";
    template.tooltipText = "{name}:\n[bold]{population} 人口[/]";
  
    const circle = template.createChild(am4core.Circle);
    circle.radius = 10;
    circle.fillOpacity = 0.7;
    circle.verticalCenter = "middle";
    circle.horizontalCenter = "middle";
    circle.nonScaling = true;
  
    const label = template.createChild(am4core.Label);
    label.text = "{population}";
    label.fill = am4core.color("#fff");
    label.verticalCenter = "middle";
    label.horizontalCenter = "middle";
    label.nonScaling = true;
  
    imageSeries.heatRules.push({
      target: circle,
      property: "radius",
      min: 10,
      max: 50
    });

    imageSeries.data = [{
      "latitude": 34.290567,
      "longitude": 113.382697,
      "name": "河南",
      "population": 12983310,
    }, {
      "latitude": 35.893673,
      "longitude": 117.925071,
      "name": "山东",
      "population": 11769340,
    }, {
      "latitude": 37.904578,
      "longitude": 114.898566,
      "name": "河北",
      "population": 6938713,
    }, {
      "latitude": 30.283762,
      "longitude": 102.813537,
      "name": "四川",
      "population": 3831124,
    }, {
      "latitude": 30.576936,
      "longitude": 117.923181,
      "name": "安徽",
      "population": 3748634,
    }, {
      "latitude": 35.383766,
      "longitude": 109.192191,
      "name": "陕西",
      "population": 3432736,
    }, {
      "latitude": 33.134192,
      "longitude": 119.794325,
      "name": "江苏",
      "population": 2873158,
    }, {
      "latitude": 37.219645,
      "longitude": 111.826606,
      "name": "山西",
      "population": 2687095,
    }, {
      "latitude": 43.349354,
      "longitude": 115.089083,
      "name": "内蒙古",
      "population": 1698992,
    }, {
      "latitude": 30.737328,
      "longitude": 112.260079,
      "name": "湖北",
      "population": 1500934,
    }, {
      "latitude": 35.759514,
      "longitude": 104.298546,
      "name": "甘肃",
      "population": 1431309,
    }, {
      "latitude": 24.487618,
      "longitude": 101.344279,
      "name": "云南",
      "population": 1027769,
    }, {
      "latitude": 29.138999,
      "longitude": 119.807246,
      "name": "浙江",
      "population": 812547,
    }, {
      "latitude": 41.939230,
      "longitude": 122.558571,
      "name": "辽宁",
      "population": 694488,
    }, {
      "latitude": 42.502665,
      "longitude": 87.531843,
      "name": "新疆",
      "population": 631394,
    }, {
      "latitude": 27.597332,
      "longitude": 111.875481,
      "name": "湖南",
      "population": 568878,
    }, {
      "latitude": 27.087922,
      "longitude": 114.920889,
      "name": "江西",
      "population": 370105,
    }, {
      "latitude": 23.384045,
      "longitude": 113.792104,
      "name": "广东",
      "population": 253851,
    }, {
      "latitude": 23.716433,
      "longitude": 108.836000,
      "name": "广西",
      "population": 220416,
    }, {
      "latitude": 30.157199,
      "longitude": 88.769599,
      "name": "西藏",
      "population": 200000,
    }, {
      "latitude": 43.155691,
      "longitude": 126.426660,
      "name": "吉林",
      "population": 178948,
    }, {
      "latitude": 19.564385,
      "longitude": 109.952074,
      "name": "海南",
      "population": 150000,
    }, {
      "latitude": 47.092726,
      "longitude": 128.750971,
      "name": "黑龙江",
      "population": 140000,
    }, {
      "latitude": 26.483221,
      "longitude": 117.932234,
      "name": "福建",
      "population": 139716,
    }, {
      "latitude": 37.195335,
      "longitude": 106.153998,
      "name": "宁夏",
      "population": 123605,
    }, {
      "latitude": 26.846727,
      "longitude": 107.302212,
      "name": "贵州",
      "population": 103939,
    }, {
      "latitude": 35.731344,
      "longitude": 96.411683,
      "name": "青海",
      "population": 106048,
    }];
    
    return () => map.dispose();
  }, []);

  return <div id="population" style={{ width: '90vw', height: '100vh', margin: 'auto' }}></div>;
};

export default Population;