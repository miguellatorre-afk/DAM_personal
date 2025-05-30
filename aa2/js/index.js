
let itemArray = [];
const url_eldenringitems = 'https://eldenring.fanapis.com/api/items';

tarjetasItems = () => {
    console.log('tarjetasItems function called');
    fetch(url_eldenringitems)
      .then(response =>{
        console.log('Response', response);
        let info = response.json()
        console.log('Info', info);
        return info;
      })
      .then(data => {
        console.log('aqui esta la', data);
        itemArray = data.data;
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });

    console.log('itemArray', itemArray);
  };

  pintarItems = (itemArray) => {
  console.log('pintarItems function called', itemArray);
  let wiki_article = document.getElementById('wiki-article');
  let listofitems = document.createElement('ul'); listofitems.classList.add('listofitems');
  wiki_article.appendChild(listofitems);
  itemArray.forEach((item) => {
    let listofitems_li = document.createElement('li'); listofitems_li.classList.add('item');
    listofitems_li.innerHTML = `
      <h2>${item.name}</h2>
      <p>${item.description}</p>
      <img src="${item.image}" alt="${item.name}">
    `;
    listofitems.appendChild(listofitems_li);
  });
}

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  tarjetasItems();
});