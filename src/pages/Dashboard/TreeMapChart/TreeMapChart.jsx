import React, {useLayoutEffect, useState, useEffect} from 'react';
import './styles.scss';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4langRu from '@amcharts/amcharts4/lang/ru_RU';
import {Card} from 'antd';
import axios from 'axios';

am4core.useTheme(am4themes_animated);

const testChartData = [
  {
    "name": "grim spider",
    "children": [{
      "name": "groundbait", "value": 1
    }, {
      "name": "hacking team",
      "children": [{
        "name": "higaisa", "value": 1
      }, {
        "name": "ice fog", "value": 1
      }, {
        "name": "iron group", "value": 1
      }]
    }]
  }, {
    "name": "anunak",
    "children": [{
      "name": "apt41",
      "children": [{
        "name": "leviathan", "value": 1
      }, {
        "name": "oilrig", "value": 1
      }, {
        "name": "apt32", "value": 1
      }, {
        "name": "stone panda", "value": 1
      }]
    }, {
      "name": "cleaver",
      "children": [{
        "name": "apt33", "value": 1
      }, {
        "name": "magnallium", "value": 1
      }]
    }, {
      "name": "apt34",
      "children": [{
        "name": "apt 30", "value": 1
      }, {
        "name": "chrysene", "value": 1
      }, {
        "name": "operation c-major", "value": 1
      }, {
        "name": "ta505", "value": 1
      }, {
        "name": "equation group", "value": 1
      }, {
        "name": "mirage", "value": 1
      }, {
        "name": "apt37", "value": 1
      }, {
        "name": "molerats", "value": 1
      }]
    }, {
      "name": "dropping elephant",
      "children": [{
        "name": "fin6", "value": 1
      }, {
        "name": "pirate panda", "value": 1
      }, {
        "name": "rocket kitten", "value": 1
      }, {
        "name": "telebots", "value": 1
      }]
    }]
  }, {
    "name": "tick",
    "children": [{
      "name": "ups",
      "children": [{
        "name": "cobalt", "value": 1
      }, {
        "name": "darkhotel", "value": 1
      }, {
        "name": "dragonok", "value": 1
      }, {
        "name": "electrum", "value": 1
      }, {
        "name": "emissary panda", "value": 1
      }, {
        "name": "hellsing", "value": 1
      }]
    }, {
      "name": "luckymouse",
      "children": [{
        "name": "the gorgon group", "value": 1
      }, {
        "name": "threat group-3390", "value": 1
      }, {
        "name": "aurora panda", "value": 1
      }, {
        "name": "energetic bear", "value": 1
      }]
    }]
  }, {
    "name": "sandworm",
    "children": [{
      "name": "ta428", "value": 1
    }, {
      "name": "blacktech", "value": 1
    }, {
      "name": "henbox",
      "children": [{
        "name": "hurricane panda", "value": 1
      }, {
        "name": "kimsuky", "value": 1
      }, {
        "name": "muddywater", "value": 1
      }, {
        "name": "samurai panda", "value": 1
      }, {
        "name": "tonto team", "value": 1
      }, {
        "name": "apt31", "value": 1
      }, {
        "name": "apt39", "value": 1
      }]
    }, {
      "name": "calypso group", "value": 1
    }]
  }, {
    "name": "gallium",
    "children": [{
      "name": "ixeshe",
      "children": [{
        "name": "temper panda", "value": 1
      }, {
        "name": "thrip", "value": 1
      }, {
        "name": "unc1878", "value": 1
      }, {
        "name": "venom spider", "value": 1
      }, {
        "name": "wizard spider", "value": 1
      }, {
        "name": "aridviper", "value": 1
      }, {
        "name": "charming kitten", "value": 1
      }, {
        "name": "darkhydrus", "value": 1
      }, {
        "name": "gamaredon group", "value": 1
      }, {
        "name": "platinum", "value": 1
      }]
    }, {
      "name": "rancor",
      "children": [{
        "name": "snowglobe", "value": 1
      }, {
        "name": "sweed", "value": 1
      }, {
        "name": "ta413", "value": 1
      }, {
        "name": "winnti umbrella", "value": 1
      }, {
        "name": "apt-c-35", "value": 1
      }, {
        "name": "apt-c-36", "value": 1
      }]
    }]
  }, {
    "name": "apt35",
    "children": [{
      "name": "apt 16", "value": 1
    }, {
      "name": "apt 22", "value": 1
    }, {
      "name": "apt 26",
      "children": [{
        "name": "dark caracal", "value": 1
      }, {
        "name": "dnspionage", "value": 1
      }, {
        "name": "greenbug", "value": 1
      }, {
        "name": "greyenergy", "value": 1
      }]
    }, {
      "name": "inception framework",
      "children": [{
        "name": "indrik spider", "value": 1
      }, {
        "name": "longhorn", "value": 1
      }]
    }]
  }, {
    "name": "lunar spider",
    "children": [{
      "name": "mummy spider", "value": 1
    }, {
      "name": "nettraveler", "value": 1
    }, {
      "name": "nightshade panda",
      "children": [{
        "name": "pinchy spider", "value": 1
      }, {
        "name": "pitty panda", "value": 1
      }, {
        "name": "poison carp", "value": 1
      }, {
        "name": "rocke", "value": 1
      }]
    }]
  }, {
    "name": "silence group",
    "children": [{
      "name": "sowbug",
      "children": [{
        "name": "tortoiseshell", "value": 1
      }, {
        "name": "violin panda", "value": 1
      }, {
        "name": "wekby", "value": 1
      }]
    }, {
      "name": "apt-c-12",
      "children": [{
        "name": "apt-c-27", "value": 1
      }, {
        "name": "bahamut", "value": 1
      }]
    }]
  }, {
    "name": "boss spider",
    "children": [{
      "name": "buhtrap",
      "children": [{
        "name": "codoso", "value": 1
      }, {
        "name": "copykittens", "value": 1
      }, {
        "name": "danti", "value": 1
      }, {
        "name": "domestic kitten", "value": 1
      }]
    }, {
      "name": "dust storm", "value": 1
    }, {
      "name": "el machete", "value": 1
    }, {
      "name": "evilnum", "value": 1
    }, {
      "name": "fin8", "value": 1
    }]
  }
];

const TreeMapChart = () => {
  const [chartData, setChartData] = useState(testChartData);

  /*
  useEffect(() => {
    axios.get('/data/districts.json').then((r) => setChartData(r.data));
  }, [])
  */
  useLayoutEffect(() => {
    let chart = am4core.create('treeMapChart', am4plugins_forceDirected.ForceDirectedTree);
    chart.language.locale = am4langRu;

    let title = chart.titles.create();
    title.text = '[bold font-size: 20]Связи тегов[/]';
    title.textAlign = 'middle';

    let networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

    networkSeries.data = chartData;

    networkSeries.dataFields.linkWith = 'linkWith';
    networkSeries.dataFields.name = 'name';
    networkSeries.dataFields.id = 'name';
    networkSeries.dataFields.value = 'value';
    networkSeries.dataFields.children = 'children';

    networkSeries.nodes.template.tooltipText = '{name}';
    networkSeries.nodes.template.fillOpacity = 1;

    networkSeries.nodes.template.label.text = '{name}'
    networkSeries.fontSize = 8;
    networkSeries.maxLevels = 2;
    networkSeries.maxRadius = am4core.percent(10);
    networkSeries.manyBodyStrength = -16;
    networkSeries.nodes.template.label.truncate = true;

    return () => {
      chart.dispose();
    };
  }, [chartData]);
  return (
    <Card bordered={false}>
      <div id="treeMapChart" style={{width: '100%', height: '600px'}} />
    </Card>
  )
}

export default TreeMapChart
  