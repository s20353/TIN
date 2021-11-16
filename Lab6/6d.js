function addNewRecord()
{
  const inputs = [
    document.getElementById('name').value,
    document.getElementById('surname').value,
    document.getElementById('country').value,
    document.getElementById('city').value,
  ];
  const table = document.getElementById('table');
  const newRow = table.insertRow(table.rows.length);
  for (let i = 0; i < 4; i += 1)
  {
    const newCell = newRow.insertCell(i);
    newCell.innerHTML = inputs[i];
  }
}

window.onload = () =>
{
  const newRecord = document.getElementById('buttonNewRecord');
  newRecord.onclick = () => { addNewRecord(); };
};
