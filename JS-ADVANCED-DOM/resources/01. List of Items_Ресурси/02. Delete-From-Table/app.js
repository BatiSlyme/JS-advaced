function deleteByEmail() {
    let emailContent = document.querySelector('input[name="email"]');
    let emailCellElements = document.querySelectorAll('tr td:nth-of-type(2)');

    console.log(emailCellElements);
    //    emailContent.removeChild();

    //applies for NodeList and HTMLCollection
    // for (const email of emailCellElements) {

    // }

    //applies only for NodeList 
    //emailCellElements.forEach(0);

    let emailElements = Array.from(emailCellElements);

    let targetElement = emailElements.find(p => p.textContent == emailContent.value);

    let resultElement = document.getElementById('result');
    if (targetElement) {
        targetElement.parentNode.remove();
        resultElement.textContent = 'Deleted.'

    }else{
        resultElement.textContent = 'Not found.'
    }




}