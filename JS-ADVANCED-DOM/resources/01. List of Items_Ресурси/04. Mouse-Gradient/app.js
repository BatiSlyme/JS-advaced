function attachGradientEvents() {
    //     <div id="gradient-box">
    //     <div id="gradient">Hover here!</div>
    // </div>
    // <div id="result"></div>

    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    const onMouseOverHandler = (e) => {
        // console.log(e.target.offsetWidth);
        // console.log(e.offsetX);
        let percent = Math.floor((e.offsetX / e.target.offsetWidth) * 100);
        console.log(percent);
        resultElement.textContent = percent + '%';



    };
    gradientElement.addEventListener('mousemove', onMouseOverHandler);

}