function display(datas) {
    itemsCount.textContent = 'There are ' + datas.length + ' photo(s) being shown';
    for (let data of datas) {
      let div = document.createElement('div');
      div.classList.add('cards');
      div.innerHTML = '<img src="' + data.url + '"><br>' + data.title;
      div.addEventListener('click', function () {
        this.style.opacity = '0';
        setTimeout(removeFromDOM,1000)
      })
      container.appendChild(div);
    }
  }
  function removeFromDOM() {
    let cards = document.querySelectorAll('.cards');
    for (let i = cards.length - 1; i >= 0; i--) {
      if (cards[i].style.opacity == '0') {
        container.removeChild(cards[i]);
      }
    }
    cards = document.querySelectorAll('.cards');
    itemsCount.textContent = 'There are ' + cards.length + ' photo(s) being shown';
  }
  const itemsCount = document.querySelector('#items-count');
  const container = document.querySelector('#container');
  
  fetch('https://jsonplaceholder.typicode.com/albums/2/photos')
    .then(response => response.json())
    .then(datas => display(datas));