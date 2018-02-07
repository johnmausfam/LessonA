import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links'
import ReactMatisse from '../src/index'
import Matisse from '../src/lib/Matisse'
import { withReadme, withDocs }  from 'storybook-readme';
import * as knobs from '@storybook/addon-knobs/react';
import ChartDoc from './md/chart.md';
import BarImg from './image/bar.png';
import PieImg from './image/pie.png';

const chartDemo = {
  chart: {
    chartType: Matisse.Chart,
    params: {
      "Type": ["StackBar", "StackBar", "StackBar", "SymbolLine"],
      "Legend": ["美股:", "日股:", "台股:", "營收:"],
      "Unit": ["億", "億", "億", "億"],
      "tipChartCursor": "last"
    },
    dataX: ["2011/10/01", "2011/09/01", "2011/08/01", "2011/07/01", "2011/06/01",
            "2011/05/01", "2011/04/01", "2011/03/01", "2011/02/01", "2011/01/01",
            "2010/12/01", "2010/11/01"],
    dataY: [
      [-1.4, 3.68, -3.01, 2.01, 0.12, 0.37, -0.62, 1.52, -1.59, -0.55, -2.97, 0.33],
      [8.86, -5.17, -7.27, 0.12, -1.61, -2.08, 3.4, 0.28, 1.74, 1.64, 4.28, -2.01],
      [10.26, -8.85, -7.26, -1.89, -1.73, -2.45, 4.02, -1.24, 3.33, 2.19, 7.25, -2.35],
      [17.72, -10.32, -14.54, 0.24, -3.22, -4.16, 6.8, 0.56, 3.48, 3.28, 8.56, -4.03]
    ]
  },
  pie: {
    chartType: Matisse.Pie,
    params: { theme: 'Pie' },
    dataX: ["現金", "股票", "投資用房地產", "活存", "其他", "單比申購基金",
            "定存", "定期定額基金"],
    dataY: [321610, 50455, 0, 164270, 50000, 24895, 0, 287434]
  }
};

const renderChart = (chartDef) => {
  let {chartType,...defaultDef} = chartDef;
  let _chartDef = knobs.object("chartDef",defaultDef);
  return <ReactMatisse chartType={chartType} {..._chartDef} />
}

const stories = storiesOf('ReactMatisse', module)
  .addDecorator(knobs.withKnobs)
  .add('Index', () => (
    <ul>
      <li onClick={linkTo('ReactMatisse', 'Bar Chart')}>
        <div>Bar Chart</div>
        <img src={BarImg} />
      </li>
      <li onClick={linkTo('ReactMatisse', 'Pie Chart')}>
        <div>Pie Chart</div>
        <img src={PieImg} />
      </li>
    </ul>
  ))
  .add('Bar Chart', withReadme([ChartDoc], () => {
    return renderChart(chartDemo.chart);
  }))
  .add('Pie Chart', () => {
    return renderChart(chartDemo.pie);
  })
  .add('Button test', () => {
    return (
      <button disabled={knobs.boolean('Disabled', false)} >
        {knobs.text('Label', 'Hello Button')}
      </button>
    )
  }); 