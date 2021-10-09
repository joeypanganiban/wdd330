const links = [
  { label: "Week1", url: "week1/index.html", notes: "Local Storage, Portfolio, UX Mobile Design" },
  { label: "Week2", url: "week2/index.html", notes: "Programming Basics, Array, Logic, Loops, Functions" },
  { label: "Week3", url: "week3/index.html", notes: " " },
  { label: "Week4", url: "week4/index.html", notes: " " },
  { label: "Week5", url: "week5/index.html", notes: " " },
  { label: "Week6", url: "week6/index.html", notes: " " },
  { label: "Week7", url: "week7/index.html", notes: " " },
  { label: "Week8", url: "week8/index.html", notes: " " },
  { label: "Week9", url: "week9/index.html", notes: " " },
  { label: "Week10", url: "week10/index.html", notes: " " },
  { label: "Week11", url: "week10/index.html", notes: " " },
  { label: "Week12", url: "week10/index.html", notes: " " },
  { label: "Week13", url: "week10/index.html", notes: " " },
  ]

const list = document.getElementById('weekList');

for (let i=0; i<links.length; i++){
  // create an element <li> <a></a> </li> inside <ol></ol>
  let li = document.createElement('li');
  let a  = document.createElement('a');

  a.setAttribute('href', links[i].url); //set a link/url for Week[i]
  a.textContent = links[i].label + " : " + links[i].notes;  // set a Label of Week[i]

  li.appendChild(a); // put the a inside the li
  list.appendChild(li); // put the li inside the #list
};

  console.log("hello world!")