let map = new Map();

map.set('name', 'Pesho');
map.set('age', 20);
map.set('isMale', true);

console.log(map);
map.get('name');

map.set(1, 'One');
console.log(map);

let obj = { name: 'Gosho' };
map.set(obj, 'goshoObject');

console.log(map);

//iterate map
for (const [key, value] of map) {
    console.log(key, value);
}

let set = new Set([1, 2, 4, 6]);
set.add(1);//doesn't add
set.add(3);//adds
set.add(4);//doesn't add
set.add(5);//adds
set.add(6);//doesn't add

console.log(set);

let names = {
    "family": {
        "cyrillic": "БАРАКАТ",
        "latin": "BARAKAT"
    },
    "firstName": {
        "cyrillic": "ХУСЕИН",
        "latin": "HUSSEIN"
    },
    "surName": {
        "cyrillic": "",
        "latin": ""
    }
};