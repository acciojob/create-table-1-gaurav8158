let n=0;
function insert_Row() {
    //Write your code here
	let table =document.getElementById("sampleTable");
	n=3;
	table.innerHTML += `
  <tr>
    <td>Row${n} cell1</td> 
    <td>Row${n} cell2</td>
  </tr>
`;
}
