function attachEventsListeners() {
    //        <input type="text" id="inputDistance">
    //        <input type="text" id="outputDistance" disabled="disabled">


    let units = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    function convert(input, output) {
        let inputDistance = document.getElementById('inputDistance');
        let outputDistance = document.getElementById('outputDistance');

        Object.keys(units).forEach(key => {
            if (key == input) {

                outputDistance.value = (Number(inputDistance.value)) * units[input] / units[output];
            }
            console.log(outputDistance.value);

        });






    }


    let dropperElement = document.getElementById('inputUnits');
    let dropperElement2 = document.getElementById('outputUnits');


    let btn = document.getElementById('convert');

    btn.addEventListener('click', (e) => {
        convert(dropperElement.value, dropperElement2.value);
    });
}