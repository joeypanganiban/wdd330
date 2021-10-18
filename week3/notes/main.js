// function doSomething(){
//         console.log('Something Happened!');
// }
// document.body.addEventListener('click', doSomething);

// function doSomething(e){
//     console.log(e.type);
// }
// function doSomething(e){
//     console.log(`screen: (${e.screenX},${e.screenY}), page: (${e.pageX},${e.pageY}), client: (${e.screenX},${e.screenY})`);
// }

const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click',() => console.log('click'));
clickParagraph.addEventListener('mousedown',() => console.log('down'));
clickParagraph.addEventListener('mouseup', () => console.log('up'));

// const dblclickParagraph = document.getElementById('dblclick');
// dblclickParagraph.addEventListener('click', highlight);
// function highlight(e){
//     e.target.classList.toggle('highlight');
// }

// const mouseParagraph = document.getElementById('mouse');
// mouseParagraph.addEventListener('mouseover', highlight);
// mouseParagraph.addEventListener('mouseout', highlight);
// mouseParagraph.addEventListener('mousemove', () => console.log('You Moved!'));

clickParagraph.addEventListener('click', (event) => event.target.classList.toggle('highlight'));
addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));