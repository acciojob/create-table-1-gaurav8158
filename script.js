function insert_Row() {
   var table = document.getElementById("sampleTable");

// Insert a new row at the top of the table
var newRow = table.insertRow(0);

// Insert two cells into the new row
var newCell1 = newRow.insertCell(0);
var newCell2 = newRow.insertCell(1);

// Set the content of the new cells
newCell1.innerHTML = "New Cell1";
newCell2.innerHTML = "New cell2";
}
