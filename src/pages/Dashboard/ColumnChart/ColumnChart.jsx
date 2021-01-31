import React, {useLayoutEffect, useState, useEffect} from 'react';
import './styles.scss';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4langRu from '@amcharts/amcharts4/lang/ru_RU';
import {Card} from 'antd';
import axios from 'axios';

am4core.useTheme(am4themes_animated);

const testChartData = [
  {
    'tag': 'lazarus group',
    'count': '1767876'
  }, {
    'tag': 'comment crew',
    'count': '1437326'
  }, {
    'tag': 'axiom',
    'count': '1433234'
  }, {
    'tag': 'turla group',
    'count': '1465346'
  }, {
    'tag': 'naikon',
    'count': '1643434'
  }, {
    'tag': 'sofacy',
    'count': '1635765'
  }, {
    'tag': 'anunak',
    'count': '1736445'
  }, {
    'tag': 'apt41',
    'count': '1634564'
  }, {
    'tag': 'leviathan',
    'count': '1453575'
  }, {
    'tag': 'oilrig',
    'count': '1743433'
  }, {
    'tag': 'apt32',
    'count': '1765445'
  }, {
    'tag': 'apt 29',
    'count': '1437457'
  }, {
    'tag': 'stone panda',
    'count': '1573457'
  }, {
    'tag': 'cleaver',
    'count': '1345686'
  }, {
    'tag': 'apt33',
    'count': '1365756'
  }, {
    'tag': 'magnallium',
    'count': '1456845'
  }, {
    'tag': 'apt34',
    'count': '1568333'
  }, {
    'tag': 'apt 30',
    'count': '1854334'
  }, {
    'tag': 'chrysene',
    'count': '1434355'
  }, {
    'tag': 'operation c-major',
    'count': '1433457'
  }, {
    'tag': 'ta505',
    'count': '1435734'
  }, {
    'tag': 'equation group',
    'count': '1474345'
  }, {
    'tag': 'mirage',
    'count': '1457345'
  }, {
    'tag': 'apt37',
    'count': '1573465'
  }, {
    'tag': 'molerats',
    'count': '1564556'
  }, {
    'tag': 'dropping elephant',
    'count': '1356345'
  }, {
    'tag': 'fin6',
    'count': '1445754'
  }, {
    'tag': 'pirate panda',
    'count': '1456746'
  }, {
    'tag': 'rocket kitten',
    'count': '1457435'
  }, {
    'tag': 'telebots',
    'count': '1324232'
  }, {
    'tag': 'tick',
    'count': '1325222'
  }, {
    'tag': 'ups',
    'count': '1235224'
  }, {
    'tag': 'cobalt',
    'count': '1463364'
  }, {
    'tag': 'darkhotel',
    'count': '1574547'
  }, {
    'tag': 'dragonok',
    'count': '1457344'
  }, {
    'tag': 'electrum',
    'count': '1466323'
  }, {
    'tag': 'emissary panda',
    'count': '1234534'
  }, {
    'tag': 'hellsing',
    'count': '1234235'
  }, {
    'tag': 'luckymouse',
    'count': '1246355'
  }, {
    'tag': 'the gorgon group',
    'count': '1473435'
  }, {
    'tag': 'threat group-3390',
    'count': '1235232'
  }, {
    'tag': 'aurora panda',
    'count': '1223344'
  }, {
    'tag': 'energetic bear',
    'count': '1232355'
  }, {
    'tag': 'sandworm',
    'count': '1234233'
  }, {
    'tag': 'ta428',
    'count': '1235223'
  }, {
    'tag': 'blacktech',
    'count': '1353455'
  }, {
    'tag': 'henbox',
    'count': '1463643'
  }, {
    'tag': 'hurricane panda',
    'count': '1346343'
  }, {
    'tag': 'kimsuky',
    'count': '346343'
  }, {
    'tag': 'muddywater',
    'count': '547455'
  }, {
    'tag': 'samurai panda',
    'count': '137434'
  }, {
    'tag': 'tonto team',
    'count': '457234'
  }, {
    'tag': 'apt31',
    'count': '743434'
  }, {
    'tag': 'apt39',
    'count': '136545'
  }, {
    'tag': 'calypso group',
    'count': '963865'
  }, {
    'tag': 'gallium',
    'count': '436434'
  }, {
    'tag': 'ixeshe',
    'count': '724666'
  }, {
    'tag': 'temper panda',
    'count': '312355'
  }, {
    'tag': 'thrip',
    'count': '146336'
  }, {
    'tag': 'unc1878',
    'count': '1346344'
  }, {
    'tag': 'venom spider',
    'count': '312345'
  }, {
    'tag': 'wizard spider',
    'count': '446234'
  }, {
    'tag': 'aridviper',
    'count': '746322'
  }, {
    'tag': 'charming kitten',
    'count': '324623'
  }, {
    'tag': 'darkhydrus',
    'count': '123466'
  }, {
    'tag': 'gamaredon group',
    'count': '426234'
  }, {
    'tag': 'platinum',
    'count': '2326346'
  }, {
    'tag': 'rancor',
    'count': '364334'
  }, {
    'tag': 'snowglobe',
    'count': '362346'
  }, {
    'tag': 'sweed',
    'count': '134623'
  }, {
    'tag': 'ta413',
    'count': '234666'
  }, {
    'tag': 'winnti umbrella',
    'count': '546856'
  }, {
    'tag': 'apt-c-35',
    'count': '437237'
  }, {
    'tag': 'apt-c-36',
    'count': '235745'
  }, {
    'tag': 'apt35',
    'count': '253743'
  }, {
    'tag': 'apt 16',
    'count': '163743'
  }, {
    'tag': 'apt 22',
    'count': '26233'
  }, {
    'tag': 'apt 26',
    'count': '34645'
  }, {
    'tag': 'dark caracal',
    'count': '1234645'
  }, {
    'tag': 'dnspionage',
    'count': '234633'
  }, {
    'tag': 'greenbug',
    'count': '324534'
  }, {
    'tag': 'greyenergy',
    'count': '145234'
  }, {
    'tag': 'inception framework',
    'count': '234555'
  }, {
    'tag': 'indrik spider',
    'count': '324523'
  }, {
    'tag': 'longhorn',
    'count': '46334'
  }, {
    'tag': 'lunar spider',
    'count': '146523'
  }, {
    'tag': 'mummy spider',
    'count': '334433'
  }, {
    'tag': 'nettraveler',
    'count': '72343'
  }, {
    'tag': 'nightshade panda',
    'count': '634633'
  }, {
    'tag': 'pinchy spider',
    'count': '46233'
  }, {
    'tag': 'pitty panda',
    'count': '236343'
  }, {
    'tag': 'poison carp',
    'count': '43455'
  }, {
    'tag': 'rocke',
    'count': '234533'
  }, {
    'tag': 'silence group',
    'count': '346233'
  }, {
    'tag': 'sowbug',
    'count': '346346'
  }, {
    'tag': 'tortoiseshell',
    'count': '16346'
  }, {
    'tag': 'violin panda',
    'count': '26465'
  }, {
    'tag': 'wekby',
    'count': '54634'
  }, {
    'tag': 'apt-c-12',
    'count': '562344'
  }, {
    'tag': 'apt-c-27',
    'count': '134234'
  }, {
    'tag': 'apt-c-34',
    'count': '124632'
  }, {
    'tag': 'bahamut',
    'count': '727643'
  }, {
    'tag': 'boss spider',
    'count': '157344'
  }, {
    'tag': 'buhtrap',
    'count': '36455'
  }, {
    'tag': 'codoso',
    'count': '463455'
  }, {
    'tag': 'copykittens',
    'count': '235466'
  }, {
    'tag': 'danti',
    'count': '23455'
  }, {
    'tag': 'domestic kitten',
    'count': '164653'
  }, {
    'tag': 'doppel spider',
    'count': '234556'
  }, {
    'tag': 'dust storm',
    'count': '14325'
  }, {
    'tag': 'el machete',
    'count': '15434'
  }
];

const ColumnChart = () => {
  const [chartData, setChartData] = useState(testChartData);

  /*
  useEffect(() => {
    axios.get('/data/cloud.json').then((r) => setChartData(r.data));
  }, [])
  */

  useLayoutEffect(() => {
    let chart = am4core.create('columnChart', am4charts.XYChart);
    chart.language.locale = am4langRu;
    chart.scrollbarX = new am4core.Scrollbar();
    chart.data = chartData;

    let title = chart.titles.create();
    title.text = '[bold font-size: 20]Теги в сравнении[/]';
    title.textAlign = 'middle';

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "tag";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 110;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 50;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "count";
    series.dataFields.categoryX = "tag";
    series.tooltipText = "{count}";
    series.columns.template.strokeWidth = 0;

    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.fillOpacity = 0.8;

    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    chart.cursor = new am4charts.XYCursor();

    return () => {
      chart.dispose();
    };
  }, [chartData])

  return (
    <Card bordered={false}>
      <div id="columnChart" style={{width: '100%', height: '600px'}} />
    </Card>
  )
}

export default ColumnChart
  