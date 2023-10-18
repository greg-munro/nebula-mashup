/* eslint-disable */
import embed from './configure';
import connect from './connect';

async function run() {
  const app = await connect({
    url: 'https://websyio.eu.qlikcloud.com',
    webIntegrationId: '5aiSMsgWsQoofijp1ci_XN726c9mSxPj',
    appId: 'd8d5a3f6-7a5c-47ab-9e7d-57e321c07f0b',
  });

  const n = embed(app);

  (await n.selections()).mount(document.querySelector('.toolbar'));

  n.render(
    {
    element: document.querySelector('.bar-chart'),
    type: 'barchart',
    fields: ['Year', '=Sum(1)' ],
    properties: {
      color: { mode: 'byDimension' },
    },
  }
  );
  n.render(
    {
      element: document.querySelector('.line-chart'),
      id: 'hqmR',
      }

  )
  n.render(
    {
      element: document.querySelector('.pie-chart'),
      id: 'BQwfHvX'
      }
  )
  n.render(
    {
      element: document.querySelector('.table'),
      id: 'pPBP',
    }
  )
}

run();


const exportButtons = document.querySelectorAll('.exportButton');
const exportableDivs = document.querySelectorAll('.exportable');

const options = {
  background: 'white'
}

function exportVisualizationAsImage(exportableDiv) {
  html2canvas(exportableDiv, options).then((canvas) => {
    const image = canvas.toDataURL('image/png', 1.0);

    const a = document.createElement('a');
    a.href = image;
    a.download = 'export.png';
    a.click();
  });
}
exportButtons.forEach((exportButton, i) => {
  exportButton.addEventListener('click', () => {
    const exportableDiv = exportableDivs[i];
    exportVisualizationAsImage(exportableDiv);
  });
});



