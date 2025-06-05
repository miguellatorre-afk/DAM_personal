document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  let params= new URLSearchParams(document.location.search);
  let name= params.get('name');
  fetchDetallesBoss(name);
});

const fetchDetallesBoss = async (name) =>{
  const response = await fetch(`https://eldenring.fanapis.com/api/bosses?name=${name}`);
  const data = await response.json();
  truedata= data.data[0]; 
  console.log('data revealed', truedata);
  pintarBoss(truedata);
}

DisplayDrops= () => {
  var element = document.getElementsByClassName('drop-table');
  element.style.display= 'flex';
  console.log('Displaying drops:')
}

const pintarBoss = (boss) => {
  console.log('pintarBoss function called for', boss);
  // Destructuración de la data
  const {
    id,
    name,
    region,
    description,
    image,
    location,
    drops,
    healthPoints
  } = boss;
  
   
  let dropsHTML = drops.map(drop => 
    `<a href="detalledrop.html?name=${encodeURIComponent(drop)}">${drop}</a>`
  ).join(', ');
  
  DisplayDrops= () => {
    let element = document.getElementsByClassName('drop-table')[0];
    element.style.display= 'flex';
    console.log('Displaying drops:')
  }

  let wiki_article = document.getElementById('wiki-container');
  let boss_detail_info = document.createElement('div'); boss_detail_info.classList.add('individual');

  boss_detail_info.innerHTML = `
    <div style="border: padding:5px; text-align: left; font-size: 20px;">
      <h2>Name: ${name}</h2>
      <div class="boss-image">
        <img src="${image}" alt="${name}">
      </div>
      <p>Health Points: ${healthPoints}</p>
      <p style="font-style:italic; font-size:15px;">Description: ${description}</p>
    </div>
    <div style="padding: 50px; margin:20px; text-align:; font-size: 17px; background-color:rgba(65, 65, 65, 0.57)">
      <p>Location: ${region}</p>
      <br>
      <p>Region: ${location}</p>
      <br>
      <button class="wiki-button" onclick='DisplayDrops()'>Drops</button>
        <div class ="drop-table" style= 'display:none'>
          <p><a href='C:/Users/Usuario/Desktop/DAM/2EVAL/Lenguaje/aa2/detalledrop.html'>${dropsHTML}</p></a>
        </div>
    `;
  console.log('boss_detail_info', boss_detail_info);
  wiki_article.appendChild(boss_detail_info);
};


