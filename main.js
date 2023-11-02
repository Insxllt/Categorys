function createdAlert() {
    alert("Category has been created!");
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
  document.getElementById("mySidenav").style.width = "505px";
}


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

document.addEventListener("DOMContentLoaded", function() {
    var total = 0;

    for (let i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);

        if(key.includes("Amount")) {
            var amount = parseFloat(localStorage.getItem(key));
            if (!isNaN(amount)) {
                total = total + amount;
            }
        }
    }
    document.getElementById("box-money").innerHTML = "$" + total;
})

document.addEventListener("DOMContentLoaded", function() {
    var openBox;
    var amounts = [];
    var dataDisplay = document.getElementById("dataDisplay");
    
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
            var boxContainer = document.createElement("div");
            var boxText = document.createElement("p");
            boxContainer.style.background = "blue";
            
            
            const node = document.createTextNode(value);
            
            createPara.appendChild(node);
            boxContainer.appendChild(createPara);
            createPara.style.marginLeft = 60 + "px";
            createPara.style.textAlign = "center";
            createPara.id = "textParaId";
            
            dataDisplay.appendChild(createPara);
            
            createPara.addEventListener("click", function() {
                if (this === openBox) {
                    this.style.backgroundColor = "rgba(218, 218, 218, 0.476)";
                    this.style.height = "250px";
                    openBox = null;
                } 
                else 
                {
                    if (openBox) {
                    }
                    for (let j = 0; j < amounts.length; j++) {
                    }
                    // this.style.backgroundColor = "blue";
                    this.style.transition = "0.9s";
                    this.style.height = "450px";
                

                    openBox = this;
                }
            })  
        }
    }
})
//             createPara.addEventListener("click", function() {
//                 var associatedBox = dataDisplay
                
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
//                 associatedBox.style.zIndex = "2";
                
//                 for (let j = 0; j < amounts.length; j++) {
//                     if (this.textContent === amounts[j]) {
//                         boxText.textContent = "Amount: " + amounts[j + 1];
//                         boxText.style.zIndex = "1";
//                         boxText.style.position = "absolute";
//                         boxText.style.top = -470 + "px";
//                         boxText.style.left = 20 + "px";
//                         boxText.style.fontFamily = "Courier New, Courier, monospace"
//                         boxText.style.fontSize = "50px";
//                         associatedBox.appendChild(boxText);
//                     }                    
//                 }
//                     openBox = associatedBox;
//                 }
//             })  
//         }
//     }
// })
