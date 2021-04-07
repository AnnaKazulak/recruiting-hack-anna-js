import jsonData from "./kunden.json";

// Parcel umożliwia importy tak jak Vuejs :) :)
//ale co po kolei trzeba zrobic?

/* Oto przepis na importowanie plików z osobnego pliku .js (bez serwera):
  1. Pobierz parcel (albo jakikolwiek serwer - możesz też napisać własny)
     npm install -g parcel # -g oznacza "Global", czyli instaluje na całym komputerze
  2. Uruchom parcel
     parcel <filename.html> u mnie index.html 
  3. Importuj plik, który Cię interesuje - może to być json, może to być zdjęcie
     import myFile from './path/to/file.json'
  4. Have fun
*/

// :)))

// fetch("kunden.json")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     // document.querySelector("#debug").innerText = data;
//   });

// function buildTable

let sortDirection = false;
// let customerData = [
//   {
//     name: "Kunde 1",
//     url: "https://kunde1.dvinci.de",
//     login: "https://kunde1.dvinci.de/login",
//   },
//   {
//     name: "Kunde 2",
//     url: "https://kunde2.dvinci.de",
//     login: "https://kunde2.dvinci.de/login",
//   },
//   {
//     name: "Kunde 3",
//     url: "https://kunde3.dvinci.de",
//     login: "https://kunde3.dvinci.de/login",
//   },
// ];

const customerJSON = `
[
  {
      "name": "Kunde 1",
      "url": "https://kunde1.dvinci.de",
      "login": "https://kunde1.dvinci.de/login"
  },
  {
      "name": "Kunde 2",
      "url": "https://kunde2.dvinci.de",
      "login": "https://kunde2.dvinci.de/login"
  },
  {
      "name": "Kunde 3",
      "url": "https://kunde3.dvinci.de",
      "login": "https://kunde3.dvinci.de/login"
  },
  {
      "name": "Kunde 4",
      "url": "https://kunde4.dvinci.de",
      "login": "https://kunde4.dvinci.de/login"
  },
  {
      "name": "Kunde 5",
      "url": "https://kunde5.dvinci.de",
      "login": "https://kunde5.dvinci.de/login"
  },
  {
      "name": "Kunde 6",
      "url": "https://kunde6.dvinci.de",
      "login": "https://kunde6.dvinci.de/login"
  },
  {
      "name": "Kunde 7",
      "url": "https://kunde7.dvinci.de",
      "login": "https://kunde7.dvinci.de/login"
  },
  {
      "name": "Kunde 8",
      "url": "https://kunde8.dvinci.de",
      "login": "https://kunde8.dvinci.de/login"
  },
  {
      "name": "Kunde 9",
      "url": "https://kunde9.dvinci.de",
      "login": "https://kunde9.dvinci.de/login"
  },
  {
      "name": "Kunde 10",
      "url": "https://kunde10.dvinci.de",
      "login": "https://kunde10.dvinci.de/login"
  },
  {
      "name": "Kunde 11",
      "url": "https://kunde11.dvinci.de",
      "login": "https://kunde11.dvinci.de/login"
  },
  {
      "name": "Kunde 12",
      "url": "https://kunde12.dvinci.de",
      "login": "https://kunde12.dvinci.de/login"
  }
]`;

// window.onload = () => {
//   loadTableData(customerData);
// };

// window.onload = function () {
//   loadTableData(customerData);
// };

window.addEventListener("DOMContentLoaded", () => {
  // customerData = JSON.parse(customerJSON);

  // fetch("/kunden.json")
  //   .then((response) => response.text())
  //   .then((data) => console.log(data));
  // fetch("/kunden.json")
  //   .then((response) => response.json())
  //   .then((data) => loadTableData(data));
  // Dziala nasz fetch :) :))))
  loadTableData(jsonData);
});

function loadTableData(customerData) {
  const tableBody = document.getElementById("tableData");
  let dataHtml = "";

  for (let customer of customerData) {
    dataHtml += `
   <tr>
   <td>${customer.name}</td>
   <td>${customer.url}</td>
   <td>${customer.login}</td>
   </tr> 
    `;
  }
  console.log(dataHtml); // TADAAAM :)))

  tableBody.innerHTML += dataHtml;
}

// ----------------------SORTIEREN zuerst JQuery, potem powrot do JS

// import jsonData from "./kunden.json";

// // let sortDirection = false;
// let dataHtml = "";

// window.addEventListener("DOMContentLoaded", () => {
//   loadTableData(jsonData);
// });

// function loadTableData(customerData) {
//   const tableBody = document.getElementById("tableData");

//   for (let customer of customerData) {
//     dataHtml += `
//    <tr>
//    <td>${customer.firstName} ${customer.lastName}</td>
//    <td>${customer.url}</td>
//    <td>${customer.login}</td>
//    </tr>
//     `;
//   }
//   // console.log(dataHtml);

//   tableBody.innerHTML += dataHtml;
// }
// loadTableData(jsonData);
// console.log(dataHtml);

// $(".customerName").on("click", function () {
//   console.log(dataHtml);
//   let column = $(this).data("column");
//   let order = $(this).data("order");
//   console.log("column was clicked", column, order);

//   if (order === "desc") {
//     $(this).data("order", "asc");

//     dataHtml = dataHtml.sort((a, b) => (a[column] > b[column] ? 1 : -1));
//   } else {
//     $(this).data("order", "desc");
//     dataHtml = dataHtml.sort((a, b) => (a[column] < b[column] ? 1 : -1));
//   }
// });

// bez JQuery -------------------------------------------------

// import jsonData from "./kunden.json";

// // definujesz ten customerName do klikniecia
// const customerName = document.querySelector(".customerName");
// // let sortDirection = false;
// let dataHtml = "";

// window.addEventListener("DOMContentLoaded", () => {
//   loadTableData(jsonData);
// });

// function loadTableData(customerData) {
//   const tableBody = document.getElementById("tableData");

//   for (let customer of customerData) {
//     dataHtml += `
//    <tr>
//    <td>${customer.firstName} ${customer.lastName}</td>
//    <td>${customer.url}</td>
//    <td>${customer.login}</td>
//    </tr>
//     `;
//   }
//   // console.log(dataHtml);

//   tableBody.innerHTML += dataHtml;
// }
// loadTableData(jsonData);
// console.log(dataHtml);

// // dodajesz na ten element click event, jQuery nie uzywaj juz! Jak ci kaza w pracy Jquery uzywac to uciekaj, bo to stare smieci!!!
// customerName.addEventListener("click", function () {
//   let column = this.dataset.column;
//   console.log(column);
// });

// customerName.addEventListener("click", function () {
//   let column = $(this).data("column");
//   let order = $(this).data("order");
//   console.log("column was clicked", column, order);

//   if (order === "desc") {
//     //$(this).data("order", "asc");

//     dataHtml = dataHtml.sort((a, b) => (a[column] > b[column] ? 1 : -1));
//   } else {
//     //$(this).data("order", "desc");
//     dataHtml = dataHtml.sort((a, b) => (a[column] < b[column] ? 1 : -1));
//   }
// });

// -----------------------------------kamila versja 3------------------

import jsonData from "./kunden.json";

const customerName = document.querySelector(".customerName");
const tableBody = document.getElementById("tableData");
// let sortDirection = false;

window.addEventListener("DOMContentLoaded", () => {
  loadTableData(jsonData);
});

function loadTableData(customerData) {
  let dataHtml = "";

  for (let customer of customerData) {
    dataHtml += `
   <tr>
   <td>${customer.firstName} ${customer.lastName}</td>
   <td>${customer.url}</td>
   <td>${customer.login}</td>
   </tr> 
    `;
  }
  tableBody.innerHTML += dataHtml;
}

// dodajesz na ten element click event, jQuery nie uzywaj juz! Jak ci kaza w pracy Jquery uzywac to uciekaj, bo to stare smieci!!!
customerName.addEventListener("click", function () {
  tableBody.innerHTML = "";
  // let column = this.dataset.column;
  let order = this.dataset.order;
  // let order = $(this).data("order");
  console.log("order was clickt", order);

  if (order === "desc") {
    this.dataset.order = "asc";
    jsonData.sort(function (a, b) {
      return a.firstName < b.firstName ? -1 : a.firstName > b.firstName ? 1 : 0;
    });
    let sortedData = jsonData;
    // console.log(sortedData);
    loadTableData(sortedData);
  } else {
    this.dataset.order = "desc";
    console.log("ich bin in ELSE");

    jsonData.sort(function (a, b) {
      return a.firstName > b.firstName ? -1 : a.firstName < b.firstName ? 1 : 0;
    });
    let sortedData = jsonData;

    loadTableData(sortedData);
    // tu zrob ten odwrotny filter i mozesz sobie
    // dataHtml = dataHtml.sort((a, b) => (a[column] < b[column] ? 1 : -1));
  }
});
