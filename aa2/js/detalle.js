const params = new URLSearchParams(window.location.search);
const name = params.get('name');

async function obtenerDetalle() {
  const res = await fetch(`https://souls-api.p.rapidapi.com/characters/${name}`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'TU_API_KEY',
      'X-RapidAPI-Host': 'souls-api.p.rapidapi.com'
    }
  });
  const data = await res.json();
  mostrarDetalle(data);
}

function mostrarDetalle(p) {
  document.getElementById('detalle').innerHTML = `
    <h2>${p.name}</h2>
    <p><strong>Género:</strong> ${p.gender}</p>
    <p><strong>Nacionalidad:</strong> ${p.nationality}</p>
    <p><strong>Facción:</strong> ${p.faction}</p>
    <p><strong>Descripción:</strong> ${p.description}</p>
    ${p.image_url ? `<img src="${p.image_url}" alt="${p.name}" width="200">` : ''}
  `;
}

obtenerDetalle();
