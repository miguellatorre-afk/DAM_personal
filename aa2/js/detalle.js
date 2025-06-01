document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  tarjetasItems();
  let params= URLSearchParams(document.location.search)
  let name= params.get('name');
  
});

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
        let itemArray = data.data;
        pintarItems(itemArray);
        console.log('itemArray', itemArray);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
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
};