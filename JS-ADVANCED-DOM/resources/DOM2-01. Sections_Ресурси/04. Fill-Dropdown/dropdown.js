function addItem() {
    //<article>
    //     <div>
    //         <select id="menu"></select>
    //     </div>
    //     <label for="newItemText">
    //         Text:
    //     </label>
    //     <input type="text" id="newItemText" />
    //     <label for="newItemValue">
    //         Value:
    //     </label>
    //     <input type="text" id="newItemValue" />
    //     <input type="button" value="Add" onclick="addItem()">
    //</article>

    let btn = document.querySelector('input[type="button"]');
    let option = document.createElement('option');
    let inputText = document.getElementById('newItemText');
    let valueText = document.getElementById('newItemValue');
    option.text = inputText.value;
    option.value = valueText.value;

    let selectElemnt = document.getElementById('menu');
    if (inputText.value != '' && valueText.value != '') {
        selectElemnt.appendChild(option);

    }

    inputText.value = '';
    valueText.value = '';
}