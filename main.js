function createdAlert() {
    alert("Category has been created!");
}

function loadJSON() {
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

var catName = document.getElementById("fname");
var amountEntered = document.getElementById("amountEntered");

document.getElementById("btnnn").addEventListener("click", function () {
    var catNameToStorage = catName.value;
    var amountToStorage = amountEntered.value;
    
    var baseKey = new Date().getTime() + Math.floor(Math.random() * 1000);
    var catKey = "CategoryName " + baseKey;
    var amKey = "Amount " + baseKey;

    localStorage.setItem(catKey, catNameToStorage);
   
    localStorage.setItem(amKey, amountToStorage);

    alert("Category Saved: " + catNameToStorage + " with the amount: " + amountToStorage)
    catName.value = "";
    amountEntered.value = "";
    // localStorage.clear();
})

function openNav() {
  document.getElementById("mySidenav").style.width = "400px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


// document.addEventListener("DOMContentLoaded", function() {
//     var openBox;
//     var dataDisplay = document.getElementById("dataDisplay");
    
//     for (let i = 0; i < localStorage.length; i++) {
//         var key = localStorage.key(i);
//         if (key.includes("CategoryName")) { 
//             var value = localStorage.getItem(key);
            
//             var amountKey = localStorage.key(i);
//             var amountVal = localStorage.getItem(amountKey);

//             var createPara = document.createElement("p");
//             var box = document.createElement("div");
//             var boxText = document.createElement("p");
            
            
//             const node = document.createTextNode(value);
            
//             createPara.appendChild(node);
//             createPara.appendChild(box);
//             box.classList.add("box");
//             dataDisplay.appendChild(createPara);
            
//             createPara.addEventListener("click", function() {
//                 var associatedBox = this.querySelector(".box");
                
//                 if (associatedBox === openBox) {
//                     associatedBox.style.visibility = "hidden";
//                     associatedBox.style.height = "0";
//                     openBox = null;
//                 } else {
//                     if (openBox) {
//                         openBox.style.visibility = "hidden";
//                         openBox.style.height = "0";
//                     }
//                     associatedBox.style.visibility = "visible";
//                     associatedBox.style.left = 13 + "%";
//                     associatedBox.style.width =  750 + "px";
//                     associatedBox.style.height = 475 + "px";
//                     associatedBox.style.transition = "height 1.3s";

//                     boxText.textContent = "Amount: " + amountVal;
//                     associatedBox.appendChild(boxText);

//                     openBox = associatedBox;
//                 }
//             })  
//         } 
//     }
// })

document.addEventListener("DOMContentLoaded", function() {
    var openBox;
    var dataDisplay = document.getElementById("dataDisplay");
    var amounts = [];
    
    for (let i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);

        if (key.includes("CategoryName")) {
            var value = localStorage.getItem(key);    
            var keySwap = key.replace("CategoryName", "Amount")
            var amountVal = localStorage.getItem(keySwap);
            amounts.push(value);
            amounts.push(amountVal);
            console.log(amounts)
            
            var createPara = document.createElement("p");
            var box = document.createElement("div");
            var boxText = document.createElement("p");
            
            
            const node = document.createTextNode(value);
            
            createPara.appendChild(node);
            createPara.appendChild(box);
            box.classList.add("box");
            dataDisplay.appendChild(createPara);
            
            createPara.addEventListener("click", function() {
                var associatedBox = this.querySelector(".box");
                
                if (associatedBox === openBox) {
                    associatedBox.style.visibility = "hidden";
                associatedBox.style.height = "0";
                openBox = null;
            } else {
                if (openBox) {
                    openBox.style.visibility = "hidden";
                    openBox.style.height = "0";
                }
                associatedBox.style.visibility = "visible";
                associatedBox.style.left = 13 + "%";
                associatedBox.style.width =  750 + "px";
                associatedBox.style.height = 475 + "px";
                associatedBox.style.transition = "height 1.3s";
                associatedBox.style.zIndex = "2";
                
                for (let j = 0; j < amounts.length; j++) {
                    if (this.textContent === amounts[j]) {
                        boxText.textContent = "Amount: " + amounts[j + 1];
                        boxText.style.zIndex = "1";
                        boxText.style.position = "absolute";
                        boxText.style.top = -470 + "px";
                        boxText.style.left = 20 + "px";
                        boxText.style.fontFamily = "Courier New, Courier, monospace"
                        boxText.style.fontSize = "50px";
                        associatedBox.appendChild(boxText);
                    }                    
                }

                openBox = associatedBox;
            }
        })  
    }
    }
})

// document.addEventListener("DOMContentLoaded", function() {
//     var openBox;
//     var dataDisplay = document.getElementById("dataDisplay");
//     var amounts = [];
    
//     for (let i = 0; i < localStorage.length; i++) {
//         var key = localStorage.key(i);

//         if (key.includes("CategoryName")) {
//             var value = localStorage.getItem(key);    
//             var keySwap = key.replace("CategoryName", "Amount")
//             var amountVal = localStorage.getItem(keySwap);
//             amounts.push(value);
//             amounts.push(amountVal);
//             console.log(amounts)
            
//             var createPara = document.createElement("p");
//             var box = document.createElement("div");
//             var boxText = document.createElement("p");
            
            
//             const node = document.createTextNode(value);
            
//             createPara.appendChild(node);
//             createPara.appendChild(box);
//             box.classList.add("box");
//             dataDisplay.appendChild(createPara);
            
//             createPara.addEventListener("click", function() {
//                 var associatedBox = this.querySelector(".box");
                
//                 if (associatedBox === openBox) {
//                     associatedBox.style.visibility = "hidden";
//                 associatedBox.style.height = "0";
//                 openBox = null;
//             } else {
//                 if (openBox) {
//                     openBox.style.visibility = "hidden";
//                     openBox.style.height = "0";
//                 }
//                 associatedBox.style.visibility = "visible";
//                 associatedBox.style.left = 13 + "%";
//                 associatedBox.style.width =  750 + "px";
//                 associatedBox.style.height = 475 + "px";
//                 associatedBox.style.transition = "height 1.3s";
                
//                 for (let j = 0; j < amounts.length; j++) {
//                     if (this.textContent === amounts[j]) {
//                         boxText.textContent = "Amount: " + amounts[j + 1];
//                     }                    
//                 }

//                 associatedBox.appendChild(boxText);
//                 openBox = associatedBox;
//             }
//         })  
//     }
//     }
// })



