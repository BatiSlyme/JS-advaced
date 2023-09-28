function addItem() {
    // <h1>List of Items</h1>
    // <main>
    //     <ul id="items"></ul>
    //     <input type="text" id="newItemText" />
    //     <input type="button" value="Add" onclick="addItem()">
    // </main>
    // <script src="./app.js"></script>

    let elementAdd = document.getElementById("newItemText");
    let newLi = document.createElement("li");
    newLi.textContent = elementAdd.value;
    elementAdd.value = '';

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    deleteElement.addEventListener("click", (e) => {
        console.log(e.currentTarget.parentNode.remove());
    });

    newLi.appendChild(deleteElement);
    let ulElements = document.querySelector("ul");

    ulElements.appendChild(newLi);
}