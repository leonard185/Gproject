// Define an array to store transactions
let transactions = [
    { date: '2024-05-07', name: 'Vincent', qualification: 'Teacher of Geography', salary: 30000 },
    // Add other initial transactions as needed
];

document.addEventListener('DOMContentLoaded', function() {
    renderTransactions();

    const form = document.getElementById('Formd');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const date = document.getElementById('Date').value;
        const name = document.getElementById('Nprofile').value;
        const qualification = document.getElementById('category').value;
        const salary = parseFloat(document.getElementById('amount').value);

        addTransaction(date, name, qualification, salary);

        // Clear form inputs
        document.getElementById('Date').value = '';
        document.getElementById('Nprofile').value = '';
        document.getElementById('category').value = '';
        document.getElementById('amount').value = '';
    });
});

function addTransaction(date, name, qualification, salary) {
    transactions.push({ date, name, qualification, salary });
    renderTransactions();
}

function deleteTransaction(index) {
    transactions.splice(index, 1);
    renderTransactions();
}

function renderTransactions() {
    const tbody = document.getElementById('Trbody');
    tbody.innerHTML = '';
    transactions.forEach((transaction, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.name}</td>
            <td>${transaction.qualification}</td>
            <td>${transaction.salary}</td>
            <td><button onclick="deleteTransaction(${index})">Delete</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function searchProfile() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const profile = transactions.find(t => t.name.toLowerCase() === searchInput);
    if (profile) {
        alert(`${profile.name}'s qualification: ${profile.qualification}, Salary: ${profile.salary}`);
    } else {
        alert("Profile not found!");
    }
}
function sortTable(columnIndex) {
    const table = document.getElementById('data-table');
    const rows = Array.from(table.rows).slice(1); // Exclude the header row
    const isNumeric = !isNaN(rows[0].cells[columnIndex].textContent);

    rows.sort((a, b) => {
        const aValue = isNumeric ? parseFloat(a.cells[columnIndex].textContent) : a.cells[columnIndex].textContent;
        const bValue = isNumeric ? parseFloat(b.cells[columnIndex].textContent) : b.cells[columnIndex].textContent;
        return aValue > bValue ? 1 : -1;
    });

    // Re-append sorted rows to the table
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    rows.forEach(row => table.appendChild(row));
}
