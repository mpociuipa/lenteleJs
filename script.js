function generateTable() {
    let rows = parseInt(document.getElementById('rows').value);
    let cols = parseInt(document.getElementById('cols').value);

    if (isNaN(rows) || isNaN(cols)) {
        alert('Please enter valid numbers for rows and columns.');
        return;
    }

    let tableHTML = '<table>';
    for (let i = 0; i < rows; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < cols; j++) {
            tableHTML += '<td>Row ' + (i + 1) + ', Col ' + (j + 1) + '</td>';
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';

    document.getElementById('tableContainer').innerHTML = tableHTML;
}