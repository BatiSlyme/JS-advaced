function solve1() {
    let add = document.querySelectorAll('button')[0];
    add.addEventListener('mouseover', (e) => {
        e.preventDefault();
        let parent = e.target.parentElement;
        let name = parent.querySelectorAll('input[type="text"]')[0];
        let age = parent.querySelectorAll('input[type="text"]')[1];
        let kind = parent.querySelectorAll('input[type="text"]')[2];
        let owner = parent.querySelectorAll('input[type="text"]')[3];
        console.log(name.value);
        if (name.value && age.value && kind.value && owner.value && Number(age.value)) {
            let adoptionUl = document.querySelector('section[id="adoption"] ul');

            let li = document.createElement('li');
            let p = document.createElement('p');

            let strongName = document.createElement('strong');
            strongName.textContent = name.value;
            p.appendChild(strongName);

            p.append(' is a ');

            let strongAge = document.createElement('strong');
            strongAge.textContent = age.value;
            p.appendChild(strongAge);

            p.append(' year old ')

            let strongKind = document.createElement('strong');
            strongKind.textContent = kind.value;
            p.appendChild(strongKind);

            let span = document.createElement('span');
            span.textContent = `Owner: ${owner.value}`;

            let btn = document.createElement('button');
            btn.addEventListener('click', takeIt);
            btn.textContent = 'Contact with Owner';
            li.appendChild(p);
            li.appendChild(span);
            li.appendChild(btn);
            adoptionUl.appendChild(li);

            clearInput([name, age, kind, owner]);

        } else {
            console.log('errors');
        }


    });

}


function clearInput(input) {
    input.forEach(element => {
        element.value = '';
    });
}

function takeIt(e) {
    let parent = e.currentTarget.parentElement;
    parent.removeChild(e.currentTarget);

    let div = document.createElement('div');

    let input = document.createElement('input');
    input.setAttribute('placeholder', 'Enter your names');
    div.appendChild(input);

    let btn = document.createElement('button');
    btn.textContent = 'Yes I take it!';
    btn.addEventListener('click', checked);

    div.appendChild(btn);
    parent.appendChild(div);
}

function checked(e) {
    if (e.currentTarget.parentElement.querySelector('input').value) {
        let parentData = e.currentTarget.parentElement.parentElement;
        let adopted = document.getElementById('adopted');
        let ul = adopted.querySelector('ul');
        if (!ul.querySelector('li')) {
            let name = parentData.querySelectorAll('strong')[0];
            let age = parentData.querySelectorAll('strong')[1];
            let kind = parentData.querySelectorAll('strong')[2];
            let owner = parentData.querySelectorAll('input')[0];
            console.log(name);
            let li = document.createElement('li');
            let p = document.createElement('p');

            let strongName = document.createElement('strong');
            strongName.textContent = name.textContent;
            p.appendChild(strongName);

            p.append(' is a ');

            let strongAge = document.createElement('strong');
            strongAge.textContent = age.textContent;
            p.appendChild(strongAge);

            p.append(' year old ')

            let strongKind = document.createElement('strong');
            strongKind.textContent = kind.textContent;
            p.appendChild(strongKind);

            let span = document.createElement('span');
            span.textContent = `Owner: ${owner.value}`;

            let btn = document.createElement('button');
            btn.addEventListener('click', deleteItem)
            btn.textContent = 'Checked';
            li.appendChild(p);
            li.appendChild(span);
            li.appendChild(btn);
            ul.appendChild(li);
        }else{
            alert('The animal is already taken!');
        }

    }

}

function deleteItem(e) {
    let parent = e.currentTarget.parentElement.parentElement;
    parent.removeChild(e.currentTarget.parentElement);
}