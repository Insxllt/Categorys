function createdAlert() {
    alert("Category has been created!");
}

function loadJSON() {
    // Fetch the JSON file
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            var categoryName = data.Categories[numm].CategoryName;
            document.getElementById("btnnn").innerHTML = categoryName;
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
        });
}

// var btnGet = document.getElementById("btnnn");
// btnGet.addEventListener("click", createdAlert());
document.getElementById("btnnn").addEventListener("click", createdAlert);

