function attachEventsListeners() {


    //     <label for="days">Days: </label>
    //     <input type="text" id="days">
    //     <input id="daysBtn" type="button" value="Convert">

    //     <label for="hours">Hours: </label>
    //     <input type="text" id="hours">
    //     <input id="hoursBtn" type="button" value="Convert">

    //     <label for="minutes">Minutes: </label>
    //     <input type="text" id="minutes">
    //     <input id="minutesBtn" type="button" value="Convert">


    //     <label for="seconds">Seconds: </label>
    //     <input type="text" id="seconds">
    //     <input id="secondsBtn" type="button" value="Convert">
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    let getButtons = document.querySelectorAll('input[type=button]');
    console.log(getButtons);

    getButtons.forEach(element => {
        console.log(element);
        element.addEventListener('click', onConvert)
    });

    // let daysBtn = document.getElementById('daysBtn');
    // let hoursBtn = document.getElementById('hoursBtn');
    // let minutesBtn = document.getElementById('minutesBtn');
    // let secondsBtn = document.getElementById('secondsBtn');



    // daysBtn.addEventListener('click', onConvert);
    // hoursBtn.addEventListener('click', onConvert);
    // minutesBtn.addEventListener('click', onConvert);
    // secondsBtn.addEventListener('click', onConvert);

    let rations = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,

    }
    function convert(value, unit) {
        let days = value / rations[unit];
        return {
            days: days,
            hours: days * rations.hours,
            minutes: days * rations.minutes,
            seconds: days * rations.seconds
        }

    }



    function onConvert(e) {
        let input = e.target.parentElement.querySelector('input[type="text"]');

        let time = convert(Number(input.value), input.id);

        daysInput.value = time.days;
        hoursInput.value = time.hours;
        minutesInput.value = time.minutes;
        secondsInput.value = time.seconds;
    }
}