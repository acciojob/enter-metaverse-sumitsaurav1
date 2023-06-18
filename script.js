//your JS code here. If required.
let statu = document.getElementById("status");
let enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  statu.innerHTML="";
  let h1 = document.createElement('h1');
  h1.innerText= "Entered Metaverse";
  statu.appendChild(h1);
})