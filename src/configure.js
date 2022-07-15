import { embed } from '@nebula.js/stardust';
import barchart from '@nebula.js/sn-bar-chart';
import line from '@nebula.js/sn-line-chart'
import piechart from '@nebula.js/sn-pie-chart'
import table from '@nebula.js/sn-table'

const n = embed.createConfiguration({
  context: {
    theme: 'light',
    language: 'en-US',
  },
  types: [
    {
      name: 'barchart',
      load: () => Promise.resolve(barchart),
    },
    {
      name: 'linechart',
      load: () => Promise.resolve(line)
    },
    {
      name: 'piechart',
      load: () => Promise.resolve(piechart)
    },
    {
      name: 'table',
      load: () => Promise.resolve(table),
      // showTitles: false
      // properties: {
      //   components: [
      //     {
      //       key: 'theme',
      //       content: {
      //         fontColor: {
      //           index: -1,
      //           color: '#276e27'
      //         },
      //         hoverEffect: true,
      //         hoverColor: {
      //           index: -1,
      //           color: '#7db8da',
      //         },
      //       }
      //     }
      //   ]
      // }
    }
]
});

export default n
