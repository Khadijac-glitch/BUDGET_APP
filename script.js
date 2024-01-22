 // Récupérer les valeurs des champs du formulaire
 var prenom = document.getElementById('validationCustom01');
 var nom = document.getElementById('validationCustom02');
 var somme = document.getElementById('somme');
 var dateheure = document.getElementById('dateheure');
 var typeTransaction = document.getElementById(' validationCustom04');
 var tout = document.getElementById('total');
 var tirer = document.getElementById('retrait');
 var avancer = document.getElementById('depot');
 tout.innerText = "1000000"

  document.getElementById('btn').addEventListener('click', function (event) {
        event.preventDefault(); // 

       if (typeTransaction.value==  tirer.value ) {
        const logo = parseInt(total.innerText) - parseInt (somme.value)
        tout.innerText = logo;
        console.log(tout)
       }
       if (typeTransaction.value==  avancer.value ) {
        const lola = parseInt(total.innerText) + parseInt (somme.value)
        tout.innerText = lola;
        console.log(tout)
       }
        // Ajouter une nouvelle ligne au tableau Bootstrap
        var tableBody = document.getElementById('result');
        var newRow = tableBody.insertRow(-1);

        // Ajouter les cellules avec les données
        
        newRow.insertCell().textContent = prenom.value;
        newRow.insertCell().textContent = nom.value;
        newRow.insertCell().textContent = somme.value;
        newRow.insertCell().textContent = dateheure.value;
        newRow.insertCell().textContent = typeTransaction.value;

        // Effacer les champs du formulaire après l'ajout
        document.getElementById('validationCustom01').value = '';
        document.getElementById('validationCustom02').value = '';
        document.getElementById('validationCustom01').value = '';
    });





// search content 
function filterTable() {
  const filterInput = document.getElementById('filterInput');
  const tableRows = document.querySelectorAll('#myTable tbody tr');

  const filterText = filterInput.value.toLowerCase();

  tableRows.forEach(row => {
    const rowText = row.textContent.toLowerCase();

    if (rowText.includes(filterText)) {
      row.classList.remove('hidden');
    } else {
      row.classList.add('hidden');
    }
  });
}

document.getElementById('filterInput').addEventListener('keyup', filterTable);
