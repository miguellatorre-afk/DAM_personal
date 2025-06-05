document.addEventListener('DOMContentLoaded', async (event) => {
  console.log('DOM2 fully loaded and parsed');
  fetchDetallesBoss(name);
});

let listofbosses;
let urlboss = 'https://eldenring.fanapis.com/api/bosses';

const fetchDetallesBoss = async (name) =>{
  const response = await fetch(urlboss);
  const data = await response.json();
  console.log('Respuesta de la API:', data);
  const bosses = data.data;
  console.log('boss details:');
  
  for(let i = 0; i < bosses.length; i++) {
    const boss = bosses[i];
    console.log(i);
    pintarBoss(boss);
  }
}

const pintarBoss = (boss) => {
  console.log('pintarBoss function called', boss,);
  // Destructuración de la data
  const {
    id,
    name,
    region,
    description,
    image,
  } = boss;

  let wiki_article = document.getElementById('wiki-article');
  listofbosses = document.createElement('ul'); listofbosses.classList.add('listofitems');
  wiki_article.appendChild(listofbosses);

  let listofbosses_li = document.createElement('li'); listofbosses_li.classList.add('item');
  listofbosses_li.innerHTML = `
    <div style = "display: flex; justify-content: space-between; align-items: center;">
      <div>
        <a href='detalle.html?name=${name}'><h2>${name}</h2></a>
        <p>${region}</p>
        <p>${description}</p>
      </div>    
      <div class= "small-image">
        <img src="${image}" alt="${name}">
      </div>
    </div>
    `;
  listofbosses.appendChild(listofbosses_li);
};


