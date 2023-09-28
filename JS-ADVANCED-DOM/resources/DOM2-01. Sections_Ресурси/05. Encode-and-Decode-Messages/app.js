function encodeAndDecodeMessages() {
    //<div id="container">
    //     <main id="main">
    //         <div>
    //             <p>Message</p>
    //             <textarea placeholder="Write your message here..."></textarea>
    //             <button>Encode and send it</button>
    //         </div>
    //         <div>
    //             <p>Last received message</p>
    //             <textarea disabled placeholder="No messages..."></textarea>
    //             <button>Decode and read it</button>
    //         </div>
    //     </main>
    // </div>



    let btns = document.querySelectorAll('button');
    function encode(input) {
        let encodedMsg = '';
        for (const j in input) {
            encodedMsg += String.fromCharCode(input.charCodeAt(j) + 1);
        }
        return encodedMsg;

    }

    function decode(input) {
        let decodeMsg = '';
        for (const j in input) {
            decodeMsg += String.fromCharCode(input.charCodeAt(j) - 1);
        }
        return decodeMsg;
    }

    btns.forEach((btn, i) => {
        btn.addEventListener('click', (e) => {

     

            let parent = e.target.parentElement;
            let input = parent.querySelector('textarea').value;
            if (i == 0) {
                input = encode(input);
                parent.querySelector('textarea').value = '';
                document.querySelectorAll('button')[1].disabled = false;
                document.querySelectorAll('button')[0].disabled = true;
                parent.parentElement.querySelectorAll('div')[1].querySelector('textarea').value = input;

            } else {
                console.log(i);
                console.log(input);
                parent.querySelector('textarea').value = decode(input);
                document.querySelectorAll('button')[0].disabled = false;
                btn.disabled = true;
            }



        });
    });
}