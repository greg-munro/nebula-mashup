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

  const exportDiv = document.querySelector('.bar-chart');
  const exportButton = document.getElementById('exportButton');

  function exportDivAsImage() {
      html2canvas(exportDiv).then(function(canvas) { //converts content to canvas
          const image = canvas.toDataURL('image/png', 1.0); //converts to image, full quality
          
          const a = document.createElement('a'); //create a download link
          a.href = image;
          a.download = 'exported-image.png'; //sets the download name of what link being downloaded
          a.click(); //simulates user clicking the link
      });
  }
  
  exportButton.addEventListener('click', exportDivAsImage);




