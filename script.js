const books= [];

// store added items here
const book_cart = [];

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// MODAL
const  modal = document.getElementById("cartModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
const modalCart = document.getElementById("addCartList");

btn.onclick = function() {
  
  
  if (book_cart.length ===0){
	    modal.style.display = "block";
	}else{
	  modalCart.style.display= "flex";
	  modalCart.style.flexflow= "row-wrap";
	  modalCart.style.justifyContent= "center";
    const el= document. querySelector (".modallist");
    const ke= book_cart.map(value=> {
        addToCart(value);
    })
  }
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modalCart) {
    modalCart.style.display = "none";
  }
}


function addToCart (book_array) {
        const element= document.getElementById("modallist");
        const  section = document.createElement ("section");
        section.className = "cart-class";
        section.appendChild(document.createElement ("img")).setAttribute('src', `${book_array.img}` );
        section.appendChild(document.createElement("aside")).textContent = `${book_array.aside}`;
        section.appendChild(document.createElement("p")).textContent = `${book_array.binding}`;
        section.appendChild(document.createElement("h6")).textContent = `${book_array.price}`;
        const cartBtn =  section.appendChild(document.createElement('button'));
                 cartBtn.className = "add-to-cart";
                 cartBtn.id = `${book_array.id}`;
                  cartBtn.textContent = "Check Out";
        element.appendChild(section);
        // console.log(element);
        return element;
      
}

fetch('https://joneajlukebibangco.github.io/web-dev-assesssment-joneajlukebibangco/books.json')
     .then(response => response.json())
     .then(data => {
          books.push(...data.books);
          for (let i=0; i<books.length; i++) {
            createSection(books[i]);
          }
        
     });


     function createSection(book_array) {
      if (book_array.type=== "fiction"){
        const element= document.getElementById("booksfiction");
        const  section = document.createElement ("section");
        section.appendChild(document.createElement ("img")).setAttribute('src', `${book_array.img}` );
        section.appendChild(document.createElement("aside")).textContent = `${book_array.aside}`;
        section.appendChild(document.createElement("p")).textContent = `${book_array.binding}`;
        section.appendChild(document.createElement("h6")).textContent = `${book_array.price}`;
        const cartBtn =  section.appendChild(document.createElement('button'));
                 cartBtn.className = "add-to-cart";
                 cartBtn.id = `${book_array.id}`;
                  cartBtn.textContent = "Add to cart";
        element.appendChild(section);
      }
      else{
        const element= document.getElementById("booksnonfiction");
        const  section = document.createElement ("section");
        section.appendChild(document.createElement ("img")).setAttribute('src', `${book_array.img}` );
        section.appendChild(document.createElement("aside")).textContent = `${book_array.aside}`;
        section.appendChild(document.createElement("p")).textContent = `${book_array.binding}`;
        section.appendChild(document.createElement("h6")).textContent = `${book_array.price}`;
        const cartBtn =  section.appendChild(document.createElement('button'));
                 cartBtn.className = "add-to-cart";
                 cartBtn.id = `${book_array.id}`;
                  cartBtn.textContent = "Add to cart";
        element.appendChild(section);
      }
    }

// button listener for add to cart
const btnAddToCart = document.getElementById("add-to-cart");

document.addEventListener('click',function(e){
    if(e.target && e.target.className == 'add-to-cart'){
          book_cart.push(books[e.target.id]);
     }
 });

 document.addEventListener('click',function(e){
  if(e.target && e.target.className == 'close'){
      modal.style.display = "none";
      $( ".cart-class" ).empty();
   }
   if(e.target && e.target.className == 'close'){
      modalCart.style.display = "none";
      $( ".cart-class" ).empty();
 }
});

