document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const dropName = params.get('name');
  if (!dropName) return;

  const endpoints = [
    { url: 'https://eldenring.fanapis.com/api/weapons?name=', type: 'weapon' },
    { url: 'https://eldenring.fanapis.com/api/armors?name=', type: 'armor' },
    { url: 'https://eldenring.fanapis.com/api/items?name=', type: 'item' },
    { url: 'https://eldenring.fanapis.com/api/incantations?name=', type:'incantations'},
    { url: 'https://eldenring.fanapis.com/api/sorceries?name=', type:'sorceries'},
    { url: 'https://eldenring.fanapis.com/api/talismans?name=', type:'talismans'},
  ];

  let found = false;
  for (const endpoint of endpoints) {
    const response = await fetch(endpoint.url + encodeURIComponent(dropName));
    const data = await response.json();
    if (data.data && data.data.length > 0) {
      mostrarDetalleDrop(data.data[0], endpoint.type);
      found = true;
      break;
    }
  }
  if (!found) {
    document.getElementById('wiki-container').innerHTML += `<p>No se encontró información para este drop.</p>`;
  }
});

function mostrarDetalleDrop(drop, type) {

  const container = document.getElementById('wiki-container');
  container.innerHTML += `
    <div class="individual">
      <h2>${drop.name} (${type})</h2>
      <img src="${drop.image}" alt="${drop.name}" style="max-width:200px;">
      <p>${drop.description || 'Sin descripción.'}</p>
    
    </div>
  `;
}