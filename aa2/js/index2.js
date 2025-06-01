document.addEventListener('DOMContentLoaded', async (event) => {
  console.log('DOM2 fully loaded and parsed');
  let url = 'https://eldenring.fanapis.com/api/bosses';
  fetchDetallesBoss(data);

});

const fetchDetallesBoss = async (name) =>{
  console.log('boss details:');
  const response = await fetch(url);
  const data = await response.json();
  pintarBoss();
}


const pintarBoss = (boss) => {
  console.log('pintarItems function called', boss);
  // Destructuración de la data
  const {
    name,
    region,
    description,
    image,
  } = boss;

  let wiki_article = document.getElementById('wiki-article');
  let listofbosses = document.createElement('ul'); listofbosses.classList.add('listofitems');
  wiki_article.appendChild(listofbosses);
    let listofitems_li = document.createElement('li'); listofitems_li.classList.add('item');
    listofitems_li.innerHTML = `
      <a href= 'detalle.html?name=$item.name'><h2>${name}</h2>
      <p>${region}</p>
      <p>${description}</p>
      <img src="${image}" alt="${name}">
    `;
    listofitems.appendChild(listofitems_li);
};


