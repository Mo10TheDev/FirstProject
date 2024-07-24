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


document.addEventListener('DOMContentLoaded', function () {
  var input = document.querySelector('.custom-input');
  var options = document.querySelector('.custom-select-options');
  var searchInput = document.querySelector('.search-input');

  // Array of car details
  var carListings = [
      { brand: 'Audi', model: 'A4', year: 2021, price: '$40,000' },
      { brand: 'BMW', model: '3 Series', year: 2022, price: '$45,000' },
      { brand: 'Ford', model: 'Mustang', year: 2020, price: '$50,000' },
      { brand: 'Mercedes-Benz', model: 'C-Class', year: 2021, price: '$55,000' },
      { brand: 'Toyota', model: 'Camry', year: 2023, price: '$30,000' },
      { brand: 'Honda', model: 'Civic', year: 2022, price: '$28,000' },
      { brand: 'Chevrolet', model: 'Malibu', year: 2021, price: '$32,000' },
      { brand: 'Nissan', model: 'Altima', year: 2022, price: '$34,000' },
      { brand: 'Hyundai', model: 'Sonata', year: 2023, price: '$33,000' },
      { brand: 'Volkswagen', model: 'Jetta', year: 2021, price: '$31,000' },
      { brand: 'Subaru', model: 'Legacy', year: 2022, price: '$29,000' },
      { brand: 'Mazda', model: 'Mazda6', year: 2021, price: '$30,000' },
      { brand: 'Land Rover', model: 'Discovery', year: 2022, price: '$60,000' },
      { brand: 'Porsche', model: '911', year: 2023, price: '$100,000' },
      { brand: 'Jaguar', model: 'XF', year: 2022, price: '$55,000' }
  ];

  // Extract unique brands
  var brands = [...new Set(carListings.map(car => car.brand))];

  // Function to populate the dropdown with unique brands
  function populateOptions() {
      options.innerHTML = `
          <input type="text" class="search-input" placeholder="Search..." onkeyup="filterOptions()">
      `;

      // Add unique brands to the dropdown
      brands.forEach(function(brand) {
          var optionDiv = document.createElement('div');
          optionDiv.textContent = brand;
          optionDiv.setAttribute('data-value', brand.toLowerCase());
          options.appendChild(optionDiv);
      });
  }

  // Initial population of options
  populateOptions();

  // Toggle dropdown and focus search input
  input.addEventListener('click', function () {
      options.classList.toggle('show');
      searchInput.focus(); // Focus on the search input when the dropdown is shown
  });

  // Handle option selection
  options.addEventListener('click', function (e) {
      if (e.target.tagName === 'DIV' && e.target !== searchInput) {
          input.value = e.target.textContent;
          options.classList.remove('show');
          // Perform a detailed search based on the selected brand
          filterDetailedOptions(e.target.textContent);
      }
  });

  // Close dropdown if clicking outside
  document.addEventListener('click', function (e) {
      if (!input.contains(e.target) && !options.contains(e.target)) {
          options.classList.remove('show');
      }
  });

  // Filter options based on search input
  window.filterOptions = function() {
      var filter = searchInput.value.toLowerCase();
      var divs = options.querySelectorAll('div:not(.search-input)');

      divs.forEach(function(div) {
          var text = div.getAttribute('data-value').toLowerCase();
          if (text.indexOf(filter) > -1) {
              div.style.display = '';
          } else {
              div.style.display = 'none';
          }
      });
  };

  // Function to filter detailed car listings based on the selected brand
  function filterDetailedOptions(selectedBrand) {
      var filteredCars = carListings.filter(car => car.brand === selectedBrand);
      // Here, you can display the filtered cars in a way that fits your needs
      // For demonstration purposes, let's log it to the console
      console.log(filteredCars);
  }
});