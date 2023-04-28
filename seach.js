// work if a sholud be element

// document.addEventListener("DOMContentLoaded", function() {
//     let a = document.getElementById("ctitle");
//     a.style.color = "yellow";
//   });
  
document.addEventListener("DOMContentLoaded", function() {
    let a = document.getElementsByName("card-title")[0];
    a.style.color = "yellow";
  });
  

  // browser do auto correction but if you raw code this will not do auto correction

  Array.from(document.getElementsByClassName("nav-item")).forEach((element)=>{
    element.style.background = "blue";
  })