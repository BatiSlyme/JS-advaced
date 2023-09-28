function edit(element, match, repalcer) {
    //https://judge.softuni.org/Contests/Practice/Index/2760#0
    while (element.textContent.includes(match)) {
        element.textContent = element.textContent.replace(match, repalcer);
    }

    //regex
    let pattern = new RegExp(match, 'g');
    element.textContent = element.textContent.replace(pattern, repalcer);
}