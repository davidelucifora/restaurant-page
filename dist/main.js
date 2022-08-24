(()=>{"use strict";const e=function(){const e=document.getElementById("content"),t=document.getElementById("container");return{createHeader:function(){const t=document.createElement("div"),n=document.createElement("h1"),a=document.createElement("h2");t.id="header",n.textContent="Tiko's",a.textContent="All About Food.",e.appendChild(t),t.appendChild(n),t.appendChild(a)},createNavBar:function(){const t=document.createElement("nav"),n={home:document.createElement("div"),menu:document.createElement("div"),contact:document.createElement("div")},a=Object.entries(n);for(const[e,n]of a)n.classList.add("nav-link"),n.textContent=e,n.id=e+"-tab",t.appendChild(n);e.appendChild(t)},createFooter:function(){const e=document.createElement("footer");e.innerHTML='<span><p>Copyright 2021 </p> <a href="http://www.github.com/dalux21">  Davide Lucifora</a><span>',t.appendChild(e)}}}(),t=()=>{const e=document.createElement("div"),t=document.createElement("h3"),n=document.createElement("p");e.id="about",e.classList.add("main-content"),n.id="our-story";const a=document.getElementById("content");a.appendChild(n),t.textContent="Our Story",n.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n    Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Ac turpis egestas integer eget aliquet nibh. \n    Et malesuada fames ac turpis egestas sed. Iaculis urna id volutpat lacus laoreet non curabitur gravida. \n    Tellus in metus vulputate eu scelerisque felis. Quam quisque id diam vel quam elementum pulvinar etiam non. \n    Neque egestas congue quisque egestas diam in arcu. Non consectetur a erat/ nam at lectus urna. \n    Velit ut tortor pretium viverra suspendisse potenti nullam ac. Enim eu turpis egestas pretium aenean. \n    Elementum curabitur vitae nunc sed velit. Velit ut tortor pretium viverra suspendisse. \n    Vitae auctor eu augue ut lectus. Et netus et malesuada fames ac turpis egestas sed.\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n    Elementum integer enim neque volutpat ac tincidunt vitae.",a.appendChild(e),e.appendChild(t),e.appendChild(n)};function n(e){const n=document.querySelector(".main-content");switch(n.parentNode.removeChild(n),e.target.id){case"home-tab":t();break;case"menu-tab":(()=>{const e=(e,t)=>({getItemName:()=>e,getIngredientsList:()=>t.join(", ")}),t=[],n=e("Pizza Margherita",["Tomato","mozzarella","basil"]),a=e("Lasagna",["Tomato","mozzarella","bechamel","bolognese sauce","parmesan"]),i=e("Ravioli",["Ricotta stuffing","tomato sauce","basil"]);t.push(n,a,i),function(){const e=document.getElementById("content"),n=document.createElement("div");n.id="menu",n.classList.add("main-content");const a=document.createElement("ul");a.id="menu-list",e.appendChild(n),n.appendChild(a),t.forEach((e=>{const t=document.createElement("li");a.appendChild(t);const n='<img src="https://source.unsplash.com/150x150/?'+e.getItemName().split(" ")[0]+'" />';t.innerHTML=n+'<div class="menu-group"><span class="menu-item-name">'+e.getItemName()+"</span> </br>"+e.getIngredientsList()+"</div>"}))}()})();break;case"contact-tab":(()=>{const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("div");n.id="map",t.id="contact",t.classList.add("main-content"),t.textContent="Tiko's, Varah Square, Choti Basti. Pushkar 305022 (RJ), India.",n.innerHTML='<div class="mapouter"><div class="gmap_canvas"><iframe width="500" height="300" \nid="gmap_canvas" src="https://maps.google.com/maps?q=Tikos&t=&z=17&ie=UTF8&iwloc=&output=embed" \nframeborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://youtube-embed-code.com">\n</a><br><style>.mapouter{height:400px;width:700px;}</style><a href="https://www.embedgooglemap.net">\n</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:400px;width:700px;}</style></div></div>',t.appendChild(n),e.appendChild(t)})()}}e.createHeader(),e.createNavBar(),t(),e.createFooter(),document.querySelectorAll(".nav-link").forEach((e=>{e.addEventListener("click",n)}))})();