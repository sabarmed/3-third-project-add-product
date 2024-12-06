const buy =document.querySelectorAll(".js-buy")
const jeneni = document.querySelector(".my-js");
const biggcontaner = document.querySelector(".big-container");
const payy = document.querySelector(".container");
const vizza = document.getElementById("viza");
const visa = document.getElementsByClassName("diiiv")
const dark = document.getElementById("dark");
const body = document.getElementById("body");

const addproduct = document.querySelector("#add-pro");
const procontainer = document.querySelector("#promax")

dark.addEventListener("click", (eo) => {
  body.classList.toggle("dark");
//   setTimeout(() => {
//     dark.classList.toggle("dark");
//   }, 60000);
 });

addproduct.addEventListener("click", (eo) => {
  const newproduct = 
  `<div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="/iphone 1 pro max.jpg" height="220px" alt="Card image cap">
                        <div class="card-body">
                          <h5 class="card-title"> iphone 14</h5>
                          <p class="card-text">iphone 14promax brand new black capacity 1TB unlocked for any carrier.</p>
                          <input type="hidden" value="999">
                          <p class="prc" id="zizi"> price :999<sup class="money">$</sup></p>
                          <a id="buyNow" href="#" class="js-buy  btn btn-primary buy">buy Now</a>
                        </div>
                      </div>`

  procontainer.innerHTML += newproduct;
});



procontainer.addEventListener("click", (eo) => {
  if (eo.target.className == "js-buy  btn btn-primary buy" ) {
   
    biggcontaner.classList.add("active");
    eo.preventDefault();
    payy.style.display = "none";
    vizza.style.display = "block";
   

   
   }

});

//  bay.addEventListener("click", (eo) => {
//     biggcontaner.classList.add("active");
//     payy.style.display = "none";
//     visa.style.display = "block";
//   });


// jeneni.forEach(item => {
    

//   item.addEventListener("click", (eo) => {
//     payy.style.display ="block"
//     vizza.style.display ="none"

//     setTimeout(() =>{
//         payy.style.display="none"
//         biggcontaner.classList.remove("active")
//     },1000);
//   })
// });

jeneni.addEventListener("click", (eo) => {
  payy.style.display = "block";
  vizza.style.display = "none";
  setTimeout(() => {
    payy.style.display = "none";
    biggcontaner.classList.remove("active");
  }, 1000);
});
