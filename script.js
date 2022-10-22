let selectedRow = null;
function onFormSubmit(e) {
  event.preventDefault();
  let formData = readFormData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
}

//retrieve the data function
function readFormData() {
  let formData = {};
  //push the html data into this object and call it with get...
  formData["productCode"] = document.getElementById("productCode").value;
  formData["product"] = document.getElementById("product").value;
  formData["quantity"] = document.getElementById("quantity").value;
  formData["prodPrice"] = document.getElementById("prodPrice").value;
  return formData;
}
//insert the data

function insertNewRecord(data) {
  let table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length); //when I add a new elem to the table the table record increments by 1
  let cell1 = newRow.insertCell(0); //create a variable for each elem in the form
  cell1.innerHTML = data.productCode;
  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.product;
  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.quantity;
  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.prodPrice;
  let cell5 = newRow.insertCell(4);
  //create a cell for the edit and delete button in the table list
  cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
}

//edit the data

function onEdit(td) {
  //use the selectedRow var to select some particular row
  selectedRow = td.parentElement.parentElement;
  //populate the value tothe input fields
  document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
  document.getElementById("product").value = selectedRow.cells[1].innerHTML;
  document.getElementById("quantity").value = selectedRow.cells[2].innerHTML;
  document.getElementById("prodPrice").value = selectedRow.cells[3].innerHTML;
}

//update data
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.productCode;
  selectedRow.cells[1].innerHTML = formData.product;
  selectedRow.cells[2].innerHTML = formData.quantity;
  selectedRow.cells[3].innerHTML = formData.prodPrice;
}

//Delete the data

function onDelete(td) {
  if (confirm("Do you want to delete this product?")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
  }
  resetForm();
}
//Reset the data

function resetForm() {
  document.getElementById("productCode").value = "";
  document.getElementById("product").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("prodPrice").value = "";
}
