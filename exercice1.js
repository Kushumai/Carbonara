let data = ["Pâtes", "Oeuf", "Sel", "Poivre", "Lardon", "Oignon", "Parmesans"];
data.sort();

let title = document.createElement("h1");
title.id = "container";
title.innerText = "Carbonara";
document.body.insertBefore(title, document.body.children[0]);

let para = document.createElement("p");
para.innerText = `Voici la liste des ingrédients: ${data.join(', ')}.`;
document.body.insertBefore(para, document.body.children[1]);

let ol = document.createElement("ol");
ol.id = "myList";
document.body.insertBefore(ol, document.body.children[2]);

let list = document.getElementById("myList");
data.forEach((item) => {
    let li = 
        document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
});