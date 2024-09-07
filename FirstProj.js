function rentbtn (){
  const rentbtn = document.querySelector('.rent-btn');
  const buybtn = document.querySelector('.buy-btn');

    if (rentbtn.innerHTML === 'Rent &nbsp;✓'){
    rentbtn.innerHTML = 'Rent'; 
      buybtn.innerHTML = 'Buy &nbsp;✓';
  }

    else if (rentbtn.innerHTML === 'Rent')
 { rentbtn.innerHTML = 'Rent &nbsp;✓';
   buybtn.innerHTML  = 'Buy'  ;
 }
 
}
function buybtn (){
  const rentbtn = document.querySelector('.rent-btn');
  const buybtn = document.querySelector('.buy-btn');

    if (buybtn.innerHTML === 'Buy &nbsp;✓'){
      buybtn.innerHTML = 'Buy'; 
      rentbtn.innerHTML = 'Rent &nbsp;✓';
  }

    else if (buybtn.innerHTML === 'Buy')
 { buybtn.innerHTML = 'Buy &nbsp;✓';
   rentbtn.innerHTML = 'Rent';
 }
 
}

const searchBar = document.querySelector('.search-input');
searchBar.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    console.log(currentValue);
    let carNames = document.querySelectorAll('.car-brand');
    carNames.forEach((carName)=>{
        if (carName.textContent.toLowerCase().includes(currentValue)){
            carName.parentNode.parentNode.style.display = 'flex'
        } else {
            carName.parentNode.parentNode.style.display = 'none'
            
        }
    })

    let carModels = document.querySelectorAll('.car-model');
    carModels.forEach((carModel)=>{
        if (carModel.textContent.toLowerCase().includes(currentValue)){
            carModel.parentNode.parentNode.style.display = 'flex'
        }
    })

})
const downwardsLottie = document.querySelector('.downward-arrow-gif');
downwardsLottie.addEventListener('click',()=>{
  document.querySelector('.search-input').scrollIntoView({ behavior: 'smooth' });

});

for(let i=2026;i>1919;i--){
  let yearOption = document.createElement("option");
  yearOption.innerHTML = i ; 
  document.getElementById("year").appendChild(yearOption);
}
for(let i=2026;i>1919;i--){
  let yearOption = document.createElement("option");
  yearOption.innerHTML = i ; 
  document.getElementById("yearMax").appendChild(yearOption);
}
const carArray = JSON.parse(localStorage.getItem('carmodels'))
carArray.forEach((car) => {
let option =  document.createElement("option");
option.innerHTML = `${car.brand}`;
document.getElementById("make").appendChild(option);
})

document.getElementById("make").addEventListener('change',()=>{
  let make = document.getElementById("make").value;
  const modelDropdown = document.getElementById("model");
  modelDropdown.innerHTML = "";
  let modelOption = document.createElement("option");
  modelOption.innerHTML = 'Any';
  document.getElementById("model").appendChild(modelOption);

  carArray.forEach((car)=>{ 
    if (make === car.brand){
    let modelOption = document.createElement("option");
    modelOption.innerHTML = car.model;
    document.getElementById("model").appendChild(modelOption);
  }
})
  console.log(make);
})

function syncYears (){
  document.getElementById("yearMax").value = document.getElementById("year").value
}
function showModal(){
  document.querySelector('.advanced-search-div').style.display = 'block';
}
window.onclick = function closeOnClick(e){
  modal = document.querySelector('.advanced-search-div');
  if(e.target == modal){
      modal.style.display='none';
  }
}
window.onkeyup = function closeOnEsc (e){
  
  modal = document.querySelector('.advanced-search-div');
  if(e.key == "Escape"){
      modal.style.display='none';
    }
}
/*
let modal = document.querySelector('.advanced-search-div');
document.querySelector('.searchbtn-adv').addEventListener('click',()=>{
  let make = document.getElementById('make').value;
  let model = document.getElementById('model').value;
  let minYear = document.getElementById('year').value;
  let maxYear = document.getElementById('yearMax').value;
  let minPrice = document.getElementById('min-price').value;
  let maxPrice = document.getElementById('max-price').value;
  let minMileage = document.getElementById('min-mileage').value;
  let maxMileage = document.getElementById('max-mileage').value;
  let transmission = document.getElementById('transmission').value;
  let fuelType = document.getElementById('fuel-type').value;
  let matchingCar;
  console.log(make , model);
  if (model !== "Any"){
  carModels.forEach((car)=>{
    if (car.brand === make && car.model === model){
        matchingCar = car; 
        console.log(matchingCar);
    } 
  })}
  else if (model === "Any"){} 

  if(matchingCar){
    carsHTML.innerHTML = ` <div class="car-template">
      <img src="${matchingCar.imageUrl}" alt="Car Image" class="img-template">
      <div class="img-name-model">
        <div class="brand-img">
        <img src="${matchingCar.brandImage}" alt="Brand Image" class="brand-img-template brand-img-template-${matchingCar.brand}">
        </div>
        <p class="car-brand">${matchingCar.brand}</p>
        <p class="car-model">${matchingCar.model}</p>
      </div>
      <div class="additional-details additional-details-${matchingCar.brand}">
        <div class="year-temp">
          <img src="https://static.vecteezy.com/system/resources/previews/005/988/959/original/calendar-icon-free-vector.jpg" alt="year" class="img-details">
          ${matchingCar.year}
        </div>
        <div class="year-temp">
        <img src="Images/counter.png" alt="mileage" class="img-details">
        &nbsp;${matchingCar.mileage}
        </div>
        <div class="year-temp">
        <img src="Images/pngimg.com - dollar_sign_PNG35.png" alt="Price" class="img-details">
        ${matchingCar.price}
        </div>
        <div class="year-temp">
          <img src="https://img.freepik.com/premium-vector/gearbox-icon-vector-illustration-gearbox-lineal-color-icon_140916-30520.jpg" alt="gearbox" class="img-details">
          Automatic
        </div>

      </div>
      <div class="show-more-details">
        <p>Show More </p>
        <p>&#8594;</p>
      </div>
    </div>`

  }


  modal.style.display = 'none';
  console.log(modal.classList)
  console.log("WASSUP");
})
*/

console.log(carArray);

searchBar.addEventListener('keyup', e => {
  let currentValue = e.target.value.toLowerCase();
  let carNames = document.querySelectorAll('.brand-name');
  let modelNames = document.querySelectorAll('.model-name');
  carNames.forEach((carName)=>{
      if (carName.textContent.toLowerCase().includes(currentValue) ){
          carName.parentNode.parentNode.style.display = 'flex'
      } else {
          carName.parentNode.parentNode.style.display = 'none'   
      }
  })
  modelNames.forEach((modelName)=>{
    if (modelName.textContent.toLowerCase().includes(currentValue) ){
        modelName.parentNode.parentNode.style.display = 'flex'
    } else {
        modelName.parentNode.parentNode.style.display = 'none'   
    }
})




})

 for (let i of carModels) {
     
   let carTemplate = document.createElement("div");
   carTemplate.classList.add("car-template");
 
   let image = document.createElement("img");
   image.setAttribute("src", i.imageUrl);
 
   let brandDiv = document.createElement("div");
   let brandImage = document.createElement("img");
   brandImage.setAttribute("src", i.brandImage);
   
   let brandName = document.createElement("p");
   brandName.textContent = i.brand;  // Assuming the object has a brandName property
   
   let modelName = document.createElement("p");
   modelName.textContent = i.model;  // Assuming the object has a modelName property
 
   brandDiv.appendChild(brandImage);
   brandDiv.appendChild(brandName);
   brandDiv.appendChild(modelName);
 
   let additionalDetails = document.createElement('div');
 
   let yearDetails = document.createElement('div');
   let yearImg = document.createElement("img");
   yearImg.setAttribute("src", "https://static.vecteezy.com/system/resources/previews/005/988/959/original/calendar-icon-free-vector.jpg");
   yearDetails.appendChild(yearImg);
   yearDetails.appendChild(document.createTextNode(i.year));
 
   let mileageDetails = document.createElement('div');
   let mileageImg = document.createElement("img");
   mileageImg.setAttribute("src", "Images/counter.png");
   mileageDetails.appendChild(mileageImg);
   mileageDetails.appendChild(document.createTextNode( i.mileage));
 
   let priceDetails = document.createElement('div');
   let priceImg = document.createElement("img");
   priceImg.setAttribute("src", "Images/pngimg.com - dollar_sign_PNG35.png");
   priceDetails.appendChild(priceImg);
   priceDetails.appendChild(document.createTextNode(i.price));
 
   let gearboxDetails = document.createElement('div');
   let gearboxImg = document.createElement("img");
   gearboxImg.setAttribute("src", "https://img.freepik.com/premium-vector/gearbox-icon-vector-illustration-gearbox-lineal-color-icon_140916-30520.jpg");
   gearboxDetails.appendChild(gearboxImg);
   gearboxDetails.appendChild(document.createTextNode(i.color));
 
   additionalDetails.appendChild(yearDetails);
   additionalDetails.appendChild(priceDetails);
   additionalDetails.appendChild(mileageDetails);
   additionalDetails.appendChild(gearboxDetails);
 
   let showMoreDiv = document.createElement("div");
   let showMore = document.createElement("p");
   showMore.textContent = "Show More";
   
   let arrow = document.createElement("p");
   arrow.innerHTML = `&#8594;`;
 
   showMoreDiv.appendChild(showMore);
   showMoreDiv.appendChild(arrow);
 
   carTemplate.appendChild(image);
   carTemplate.appendChild(brandDiv);
   carTemplate.appendChild(additionalDetails);
   carTemplate.appendChild(showMoreDiv);
 
   brandDiv.classList.add("img-name-model");
   brandName.classList.add("brand-name");
   modelName.classList.add("model-name");
   brandImage.classList.add("brand-img-template");
   additionalDetails.classList.add("additional-details");
   yearDetails.classList.add("year-temp");
   priceDetails.classList.add("year-temp");
   mileageDetails.classList.add("year-temp");
   gearboxDetails.classList.add("year-temp");
   yearImg.classList.add("img-details");
   priceImg.classList.add("img-details");
   mileageImg.classList.add("img-details");
   gearboxImg.classList.add("img-details");
   showMoreDiv.classList.add("show-more-details");
   image.classList.add("img-template");
  
 
   if(i.brand.trim() === "Ford"){
      brandImage.setAttribute("src", "https://static.vecteezy.com/system/resources/thumbnails/020/500/376/small_2x/ford-brand-logo-car-symbol-black-design-usa-automobile-illustration-free-vector.jpg"
      )
  }
  if(i.brand.trim() === "Chevrolet"){
    brandImage.setAttribute("src", "https://3axis.co/user-images/6o3wlq1n.png"

    )
}
   
   if(i.brand === "Chevrolet"){
     brandImage.style.marginTop = '20px';
     brandImage.style.marginLeft = '2px';
 
   }
   
   else if(i.brand === "Toyota"){
     brandImage.style.marginTop = '10px';
 
   }
   else if(i.brand === "Jeep"){
     brandImage.style.marginTop = '30px';
     brandImage.style.marginLeft = '2px';
 
   }
   else if (i.brand === ""){
    brandDiv.parentNode.style.display = 'none'
   }
   document.querySelector('.searchbtn-adv').addEventListener('click',()=>{
   let make = document.getElementById('make').value;
   let model = document.getElementById('model').value;
   let minYear = document.getElementById('year').value;
   let maxYear = document.getElementById('yearMax').value;
   let minPrice = document.getElementById('min-price').value;
   let maxPrice = document.getElementById('max-price').value;
   let minMileage = document.getElementById('min-mileage').value;
   let maxMileage = document.getElementById('max-mileage').value;
   let transmission = document.getElementById('transmission').value;
   let color = document.getElementById('color').value;
    if(
      (make === i.brand || make === "Any") && 
      
      (model === i.model || model === "Any") && 
     
      ((i.year >= minYear && i.year <= maxYear) || (minYear === "Any" && maxYear == "Any") || (minYear === "Any" && i.year <= maxYear)|| (maxYear === "Any" && i.year >= minYear))&&
     
      ((i.price >= minPrice && i.price <= maxPrice) || (minPrice === "" && maxPrice == "") || (minPrice === "" && i.price <= maxPrice)|| (maxYear === "" && i.price >= minPrice)) &&
     
      ((i.mileage >= minMileage && i.mileage <= maxMileage) || (minMileage === "" && maxMileage == "") || (minMileage === "" && i.mileage <= maxMileage) || (maxMileage === "" && i.mileage >= minMileage))  &&
     
      (color === i.color || color === "Any")

    ){
      brandDiv.parentNode.classList.remove("hide");
      console.log(minPrice);
    }
    else {
      brandDiv.parentNode.classList.add("hide");
    }

   })
   document.querySelectorAll('.car-template img').forEach(img => {
    img.addEventListener('error', function() {
      this.closest('.car-template').remove();
    });
  });
  

   document.querySelector('.car-grid').appendChild(carTemplate); // Append the carTemplate to the document
 }
  
