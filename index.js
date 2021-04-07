import jsonData from "./kunden.json";
// Zugriff auf HTML Elemente
const customerName = document.querySelector(".customerName");
const tableBody = document.getElementById("tableData");
// let sortDirection = false;

window.addEventListener("DOMContentLoaded", () => {
  loadTableData(jsonData);
});
// manipulieren die Tabelle
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

customerName.addEventListener("click", function () {
  tableBody.innerHTML = "";
  let order = this.dataset.order;
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
  }
});
