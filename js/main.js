const links = [
  { label: "Week1", url: "week1/index.html" },
  { label: "Week2", url: "week2/index.html" },
  { label: "Week3", url: "week3/index.html" },
  { label: "Week4", url: "week4/index.html" },
  { label: "Week5", url: "week5/index.html" },
  { label: "Week6", url: "week6/index.html" },
  { label: "Week7", url: "week7/index.html" },
  { label: "Week8", url: "week8/index.html" },
  { label: "Week9", url: "week9/index.html" },
  { label: "Week10", url: "week10/index.html" },
  { label: "Week11", url: "week10/index.html" },
  { label: "Week12", url: "week10/index.html" },
  { label: "Week13", url: "week10/index.html" },
  ]

const weekList = document.getElementById('list');

for (let i=0; i<links.length; i++){
  // create an element <li> <a></a> </li> inside <ol></ol>
  let li = document.createElement('li');
  let a  = document.createElement('a');

  a.textContent = links[i].label;  // set a Label of Week[i]
  a.setAttribute('href', links[i].url); //set a link/url for Week[i]

  li.appendChild(a); // put the a inside the li
  weekList.appendChild(li); // put the li inside the #list
};



  