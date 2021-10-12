
const body = document.body;
console.log(typeof body);
console.log(body.nodeType);
console.log(body.nodeName);
for (let i=0 ; i < document.images.length ; i++) {

// do something with each image using document.images[i]
const imageArray = Array.from(document.images);

}
const h1 = document.getElementById('title');
const listItems = document.getElementsByTagName('li');
console.log(listItems);
console.log(listItems[0]);
console.log(listItems[1]);
console.log(listItems[2]); 


