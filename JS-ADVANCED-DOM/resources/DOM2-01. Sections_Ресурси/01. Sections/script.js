function create(input) {
   //    <body onload="create(['Section 1', 'Section 2', 'Section 3', 'Section 4']);">
   //     <div id="content">
   //     </div>
   // </body>
   let parentElement = document.getElementById('content');
   input.forEach(element => {
      let div = document.createElement('div');
      let p = document.createElement('p');
      let text = document.createTextNode(element);


      p.appendChild(text);
      p.style.display = 'none';

      div.appendChild(p);
      parentElement.appendChild(div);

      div.addEventListener('click', (e) => {
         e.target.children[0].style.display = 'block';
         console.log(e.target);
      });
   });
}