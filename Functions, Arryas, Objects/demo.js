let name = 'Pesho';

if (true) {
    let name = 'peter';
    var lastName = 'Petrov';
    // name = 'l1';
}

//var принти, но name не се променя в ifa
console.log(5 + (92 + name + ' ' + lastName));//592Pesho Petrov 
console.log(5 + 92 + name + ' ' + lastName);//97Pesho Petrov
console.log('2' + '2' - '2');//20


let injury = [{ "id": -1, "code": "-1", "name": "- Изберете -", "label": "- Изберете -", "value": -1 }, { "id": 5586, "code": "P19.01", "name": "БЕЗ СПЕЦ. МЕД. ПОМОЩ", "label": "БЕЗ СПЕЦ. МЕД. ПОМОЩ", "value": 5586 }, { "id": 5585, "code": "P19.00", "name": "БЕЗ НАРАНЯВАНЕ", "label": "БЕЗ НАРАНЯВАНЕ", "value": 5585 }, { "id": 5593, "code": "P19.99", "name": "НЕИЗВ.(НЕУТОЧНЕНА)", "label": "НЕИЗВ.(НЕУТОЧНЕНА)", "value": 5593 }, { "id": 5583, "code": "P19.06", "name": "ПОЧИНАЛ", "label": "ПОЧИНАЛ", "value": 5583 }, { "id": 5589, "code": "P19.02", "name": "ЛЕКА ТЕЛЕСНА ПОВРЕДА - ЛЕКО РАНЕН, ВРЕМ. В БОЛН. ДО 24 Ч.", "label": "ЛЕКА ТЕЛЕСНА ПОВРЕДА - ЛЕКО РАНЕН, ВРЕМ. В БОЛН. ДО 24 Ч.", "value": 5589 }, { "id": 5590, "code": "P19.03", "name": "ЛЕКА ТЕЛЕСНА ПОВРЕДА - РАНЕН, НАСТ. В БОЛНИЦА ПОВЕЧЕ ОТ 24 Ч.", "label": "ЛЕКА ТЕЛЕСНА ПОВРЕДА - РАНЕН, НАСТ. В БОЛНИЦА ПОВЕЧЕ ОТ 24 Ч.", "value": 5590 }, { "id": 20500, "code": "P19.04", "name": "СРЕДНА ТЕЛЕСНА ПОВРЕДА - ТЕЖКО РАНЕН", "label": "СРЕДНА ТЕЛЕСНА ПОВРЕДА - ТЕЖКО РАНЕН", "value": 20500 }, { "id": 20501, "code": "P19.05", "name": "ТЕЖКА ТЕЛЕСНА ПОВРЕДА - ТЕЖКО РАНЕН", "label": "ТЕЖКА ТЕЛЕСНА ПОВРЕДА - ТЕЖКО РАНЕН", "value": 20501 }];

// console.log('injury is ' + injury);

// console.log('injury[0].parentNomValue.id = ' + injury[0].parentNomValue);

let findInjury = injury.filter((p) => { if (p.parentNomValue) { return p.parentNomValue.id == '1277' } });
let findInjury1 = injury.find((p) => { if (p.parentNomValue) { return p.parentNomValue.id == '1277' } });

let arr = [];


console.log('findInjury is ' + JSON.stringify(findInjury));
console.log(findInjury1);
console.log(findInjury1.length);

arr.push(findInjury1);

if (findInjury1.length) {
    for (const value of findInjury1) {
        console.log('value is ' + JSON.stringify(value));
    }
}

arr.push(findInjury1);
for (const value of findInjury) {
    console.log('value is ' + JSON.stringify(value));
}
console.log(arr);
