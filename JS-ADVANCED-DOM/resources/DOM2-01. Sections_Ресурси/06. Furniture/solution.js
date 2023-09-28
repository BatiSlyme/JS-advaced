
function solve() {
  let myJson = [{
    "img": "https://www.bludot.com/media/catalog/product/s/h/sh1_cabnet_sk.2x_1_ipad_1.jpg?optimize=medium&fit=bounds&height=1200&width=1500&canvas=1500:1200",
    "name": "Wardrobe",
    "price": "120",
    "decFactor": "1.2"
  }]



  let properties = {
    name: "",
    price: 0,
    deFactor: 0,
  }

  function addElement(e) {
    let curentRow = e.target.parentElement.parentElement;
    console.log(curentRow.childNodes[1].innerText);
    if (e.target.checked) {
      properties.name += `${curentRow.childNodes[1].innerText},`;
      properties.price += Number(curentRow.childNodes[2].innerText);
      properties.deFactor += Number(curentRow.childNodes[3].innerText);

      properties.price = Number(properties.price.toPrecision(3));
      properties.deFactor = Number(properties.deFactor.toPrecision(3));

    } else {
      properties.name = properties.name.replace(`${curentRow.childNodes[1].innerText},`, '');
      properties.price -= Number(curentRow.childNodes[2].innerText);
      properties.deFactor -= Number(curentRow.childNodes[3].innerText);
      properties.price = Number(properties.price.toPrecision(3));
      properties.deFactor = Number(properties.deFactor.toPrecision(3));
    }

    inputElement = document.querySelectorAll('textarea')[1];
    inputElement.value = JSON.stringify(properties);

  }


  let tableElement = document.querySelector('table tbody');
  console.log(tableElement);

  document.querySelectorAll('button')[0].addEventListener('click', (e) => {
    inputElement = document.querySelectorAll('textarea')[0];
    console.log(typeof inputElement.value);
    let str = inputElement.value.replace(/\s+/g, ' ').trim();
    let inputJson = JSON.parse(str);


    // creating all cells
    for (let i = 0; i < 1; i++) {
      // creates a table row
      const row = document.createElement("tr");

      for (const key of Object.keys(inputJson)) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row

        let cell, cellText;
        switch (key) {
          case 'img':
            cell = document.createElement("td");
            cellText = document.createElement('img');// document.createTextNode('asdasdasdasdasd')
            cellText.setAttribute('src', inputJson[key]);
            cell.appendChild(cellText);
            row.appendChild(cell);
            break;
          case 'name':

          default:
            cell = document.createElement("td");
            cellText = document.createElement('p');// document.createTextNode('asdasdasdasdasd')
            cellText.textContent = inputJson[key];
            cell.appendChild(cellText);
            row.appendChild(cell);
            break;
        }
      }


      // add the row to the end of the table body
      const cell = document.createElement("td");
      const cellText = document.createElement('input');// document.createTextNode('asdasdasdasdasd')
      cellText.setAttribute("type", "checkbox");
      cellText.addEventListener("click", addElement)
      cell.appendChild(cellText);
      row.appendChild(cell);

      tableElement.appendChild(row);
    }



  });
}