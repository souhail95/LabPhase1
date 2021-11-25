if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else
{ready()}
function ready(){
var addToCartButtons = document.getElementsByClassName('shop-item-button')
for( var i = 0; i < addToCartButtons.length; i++){
    var button = addToCartButtons[i]
    button.addEventListener('click',addToCartClicked)
}
var removeCartItemButtons = document.getElementsByClassName('btn btn-danger')
console.log(removeCartItemButtons)
for(var i = 0; i < removeCartItemButtons.length; i++){
    removeCartItemButtons[i].addEventListener('click', removeItems)
}
var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for(var i = 0; i < removeCartItemButtons.length; i++){
    input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}
document.getElementsByClassName('btn-purchase')[0].addEventListener('click' , purchaseClicked)
document.getElementById('age').addEventListener('change' , quantitychanged1)
document.getElementById('phone').addEventListener('change' , quantitychanged2)
document.getElementById('first-name').addEventListener('change' , quantitychanged3)
document.getElementById('last-name').addEventListener('change' , quantitychanged4)
document.getElementById('country').addEventListener('change' , quantitychanged5)
}
function purchaseClicked(){
    var cartItems = document.getElementsByClassName('cart-items')[0]
    if(updateCartTotal()==0){
        alert('no vacation booked yet')  
        return
    }
    else{
    alert('Thanks for booking')
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')[0]
    var title = cartRows.getElementsByClassName('cart-item-title')[0].innerText
    var price = cartRows.getElementsByClassName('cart-price')[0].innerText
    var quantity = cartRows.getElementsByClassName('cart-quantity-input')[0].value
    console.log(title, price, quantity)
    addItemToCart1(title, price, quantity)
    
    updateCartTotal()}
}
function removeItems(event){
     removebtn = event.target
     removebtngrandparent=removebtn.parentElement.parentElement
    removebtngrandparent.remove()
    for(let i=0; i<=8; i++){
        document.querySelectorAll(".shop-item-button")[i].removeAttribute("disabled");
        document.querySelectorAll(".shop-item-button")[i].classList.remove("disabled","disabled");}
    updateCartTotal()
}
function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}
function quantitychanged1(event){
    var xc = event.target
    if(isNaN(input.value))
       {xc.value = 18}
        else{
            if(xc.value <= 17){
                xc.value = 18  
            }
        }
}
function quantitychanged2(event){
    var input = event.target
    if(!(input.match(/^[0-9]/g)) || input.length != 8){
        return
    }
}
function quantitychanged3(event){

    var input = event.target
    var ki = String(input)
    if(!(input.value.match(/^[A-Za-z]+$/))){
        document.getElementById('first-name').value = ""
    }
    else{
        document.getElementById('first-name').innerHTML = ki.innerText
    }
}
function quantitychanged4(event){
    var input1 = event.target
    var ki1 = String(input1)
    if(!(input1.value.match(/^[A-Za-z]+$/))){
        document.getElementById('last-name').value = ""   }
        else{
            document.getElementById('last-name').innerHTML = ki1.innerHTML
        }
}

function quantitychanged5(event){
    var input2 = event.target

    const countrylist = [
        "Afghanistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antarctica",
        "Antigua and Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas (the)",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia (Plurinational State of)",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "Botswana",
        "Bouvet Island",
        "Brazil",
        "British Indian Ocean Territory (the)",
        "Brunei Darussalam",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cabo Verde",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Cayman Islands (the)",
        "Central African Republic (the)",
        "Chad",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos (Keeling) Islands (the)",
        "Colombia",
        "Comoros (the)",
        "Congo (the Democratic Republic of the)",
        "Congo (the)",
        "Cook Islands (the)",
        "Costa Rica",
        "Croatia",
        "Cuba",
        "Curaçao",
        "Cyprus",
        "Czechia",
        "Côte d'Ivoire",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic (the)",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Eswatini",
        "Ethiopia",
        "Falkland Islands (the) [Malvinas]",
        "Faroe Islands (the)",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Territories (the)",
        "Gabon",
        "Gambia (the)",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea-Bissau",
        "Guyana",
        "Haiti",
        "Heard Island and McDonald Islands",
        "Holy See (the)",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran (Islamic Republic of)",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea (the Democratic People's Republic of)",
        "Korea (the Republic of)",
        "Kuwait",
        "Kyrgyzstan",
        "Lao People's Democratic Republic (the)",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macao",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands (the)",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Micronesia (Federated States of)",
        "Moldova (the Republic of)",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Namibia",
        "Nauru",
        "Nepal",
        "Netherlands (the)",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger (the)",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Northern Mariana Islands (the)",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau",
        "Palestine, State of",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines (the)",
        "Pitcairn",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of North Macedonia",
        "Romania",
        "Russian Federation (the)",
        "Rwanda",
        "Réunion",
        "Saint Barthélemy",
        "Saint Helena, Ascension and Tristan da Cunha",
        "Saint Kitts and Nevis",
        "Saint Lucia",
        "Saint Martin (French part)",
        "Saint Pierre and Miquelon",
        "Saint Vincent and the Grenadines",
        "Samoa",
        "San Marino",
        "Sao Tome and Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Sint Maarten (Dutch part)",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "South Georgia and the South Sandwich Islands",
        "South Sudan",
        "Spain",
        "Sri Lanka",
        "Sudan (the)",
        "Suriname",
        "Svalbard and Jan Mayen",
        "Sweden",
        "Switzerland",
        "Syrian Arab Republic",
        "Taiwan",
        "Tajikistan",
        "Tanzania, United Republic of",
        "Thailand",
        "Timor-Leste",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad and Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks and Caicos Islands (the)",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Emirates (the)",
        "United Kingdom of Great Britain and Northern Ireland (the)",
        "United States Minor Outlying Islands (the)",
        "United States of America (the)",
        "Uruguay",
        "Uzbekistan",
        "Vanuatu",
        "Venezuela (Bolivarian Republic of)",
        "Viet Nam",
        "Virgin Islands (British)",
        "Virgin Islands (U.S.)",
        "Wallis and Futuna",
        "Western Sahara",
        "Yemen",
        "Zambia",
        "Zimbabwe",
        "Åland Islands"
    ];
    if(!(exist(input2.value))){
        document.getElementById('country').value = ""   }
        else{
            document.getElementById('country').value = input2.value
        }
    }
    function exist (x){
        const countrylist = [
            "Afghanistan",
            "Albania",
            "Algeria",
            "American Samoa",
            "Andorra",
            "Angola",
            "Anguilla",
            "Antarctica",
            "Antigua and Barbuda",
            "Argentina",
            "Armenia",
            "Aruba",
            "Australia",
            "Austria",
            "Azerbaijan",
            "Bahamas (the)",
            "Bahrain",
            "Bangladesh",
            "Barbados",
            "Belarus",
            "Belgium",
            "Belize",
            "Benin",
            "Bermuda",
            "Bhutan",
            "Bolivia (Plurinational State of)",
            "Bonaire, Sint Eustatius and Saba",
            "Bosnia and Herzegovina",
            "Botswana",
            "Bouvet Island",
            "Brazil",
            "British Indian Ocean Territory (the)",
            "Brunei Darussalam",
            "Bulgaria",
            "Burkina Faso",
            "Burundi",
            "Cabo Verde",
            "Cambodia",
            "Cameroon",
            "Canada",
            "Cayman Islands (the)",
            "Central African Republic (the)",
            "Chad",
            "Chile",
            "China",
            "Christmas Island",
            "Cocos (Keeling) Islands (the)",
            "Colombia",
            "Comoros (the)",
            "Congo (the Democratic Republic of the)",
            "Congo (the)",
            "Cook Islands (the)",
            "Costa Rica",
            "Croatia",
            "Cuba",
            "Curaçao",
            "Cyprus",
            "Czechia",
            "Côte d'Ivoire",
            "Denmark",
            "Djibouti",
            "Dominica",
            "Dominican Republic (the)",
            "Ecuador",
            "Egypt",
            "El Salvador",
            "Equatorial Guinea",
            "Eritrea",
            "Estonia",
            "Eswatini",
            "Ethiopia",
            "Falkland Islands (the) [Malvinas]",
            "Faroe Islands (the)",
            "Fiji",
            "Finland",
            "France",
            "French Guiana",
            "French Polynesia",
            "French Southern Territories (the)",
            "Gabon",
            "Gambia (the)",
            "Georgia",
            "Germany",
            "Ghana",
            "Gibraltar",
            "Greece",
            "Greenland",
            "Grenada",
            "Guadeloupe",
            "Guam",
            "Guatemala",
            "Guernsey",
            "Guinea",
            "Guinea-Bissau",
            "Guyana",
            "Haiti",
            "Heard Island and McDonald Islands",
            "Holy See (the)",
            "Honduras",
            "Hong Kong",
            "Hungary",
            "Iceland",
            "India",
            "Indonesia",
            "Iran (Islamic Republic of)",
            "Iraq",
            "Ireland",
            "Isle of Man",
            "Israel",
            "Italy",
            "Jamaica",
            "Japan",
            "Jersey",
            "Jordan",
            "Kazakhstan",
            "Kenya",
            "Kiribati",
            "Korea (the Democratic People's Republic of)",
            "Korea (the Republic of)",
            "Kuwait",
            "Kyrgyzstan",
            "Lao People's Democratic Republic (the)",
            "Latvia",
            "Lebanon",
            "Lesotho",
            "Liberia",
            "Libya",
            "Liechtenstein",
            "Lithuania",
            "Luxembourg",
            "Macao",
            "Madagascar",
            "Malawi",
            "Malaysia",
            "Maldives",
            "Mali",
            "Malta",
            "Marshall Islands (the)",
            "Martinique",
            "Mauritania",
            "Mauritius",
            "Mayotte",
            "Mexico",
            "Micronesia (Federated States of)",
            "Moldova (the Republic of)",
            "Monaco",
            "Mongolia",
            "Montenegro",
            "Montserrat",
            "Morocco",
            "Mozambique",
            "Myanmar",
            "Namibia",
            "Nauru",
            "Nepal",
            "Netherlands (the)",
            "New Caledonia",
            "New Zealand",
            "Nicaragua",
            "Niger (the)",
            "Nigeria",
            "Niue",
            "Norfolk Island",
            "Northern Mariana Islands (the)",
            "Norway",
            "Oman",
            "Pakistan",
            "Palau",
            "Palestine, State of",
            "Panama",
            "Papua New Guinea",
            "Paraguay",
            "Peru",
            "Philippines (the)",
            "Pitcairn",
            "Poland",
            "Portugal",
            "Puerto Rico",
            "Qatar",
            "Republic of North Macedonia",
            "Romania",
            "Russian Federation (the)",
            "Rwanda",
            "Réunion",
            "Saint Barthélemy",
            "Saint Helena, Ascension and Tristan da Cunha",
            "Saint Kitts and Nevis",
            "Saint Lucia",
            "Saint Martin (French part)",
            "Saint Pierre and Miquelon",
            "Saint Vincent and the Grenadines",
            "Samoa",
            "San Marino",
            "Sao Tome and Principe",
            "Saudi Arabia",
            "Senegal",
            "Serbia",
            "Seychelles",
            "Sierra Leone",
            "Singapore",
            "Sint Maarten (Dutch part)",
            "Slovakia",
            "Slovenia",
            "Solomon Islands",
            "Somalia",
            "South Africa",
            "South Georgia and the South Sandwich Islands",
            "South Sudan",
            "Spain",
            "Sri Lanka",
            "Sudan (the)",
            "Suriname",
            "Svalbard and Jan Mayen",
            "Sweden",
            "Switzerland",
            "Syrian Arab Republic",
            "Taiwan",
            "Tajikistan",
            "Tanzania, United Republic of",
            "Thailand",
            "Timor-Leste",
            "Togo",
            "Tokelau",
            "Tonga",
            "Trinidad and Tobago",
            "Tunisia",
            "Turkey",
            "Turkmenistan",
            "Turks and Caicos Islands (the)",
            "Tuvalu",
            "Uganda",
            "Ukraine",
            "United Arab Emirates (the)",
            "United Kingdom of Great Britain and Northern Ireland (the)",
            "United States Minor Outlying Islands (the)",
            "United States of America (the)",
            "Uruguay",
            "Uzbekistan",
            "Vanuatu",
            "Venezuela (Bolivarian Republic of)",
            "Viet Nam",
            "Virgin Islands (British)",
            "Virgin Islands (U.S.)",
            "Wallis and Futuna",
            "Western Sahara",
            "Yemen",
            "Zambia",
            "Zimbabwe",
            "Åland Islands"
        ];
        let y=false;
        for(let k=0;k<=countrylist.length-1;k++){
            if(x==countrylist[k]){
                y=true;
            }
        }
        return y;
    }

    

function addToCartClicked(event){
      var button = event.target
      var shopItem = button.parentElement.parentElement      
      var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
      var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
      var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
      addItemToCart(title, price, imageSrc)      
}

function addItemToCart(title, price, imageSrc ){
    var z=0;
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')

    var cartItems = document.getElementsByClassName('cart-items')[0] 
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    var cartRowContents = `<div class="cart-item cart-column">
        <img class="cart-item-image" width="100px" height="100px" src=${imageSrc}>
        <div class="cart-item-title" style="margin-bottom:50px"> ${title} </div>
        </div>
        <span class="cart-price "> ${price} </span>
        <div class="cart-quantity cart-column">
        <button class="btn minus-btn disabled" type="button">-</button>
        <input class="cart-quantity-input" id="quantity" type="text" value="1">
        <button class="btn plus-btn" type="button">+</button>
        <button class="btn btn-danger"  type="button"> REMOVE </button>
        </div>
`  

    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.querySelector(".minus-btn").setAttribute("disabled","disabled"); 
    cartRow.getElementsByClassName('minus-btn')[0].addEventListener('click', substraction)
    cartRow.getElementsByClassName('plus-btn')[0].addEventListener('click', addition)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeItems)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

    for(let i=0; i<=8; i++){
    document.querySelectorAll(".shop-item-button")[i].setAttribute("disabled","disabled");}
    updateCartTotal()   
}
function addItemToCart1(title, price, quantity ){
    var cartRowContents = `You booked  ${quantity}  ticket(s) for a vacation to  ${title}  with a price of  ${price}  for the ticket and paid a total sum of $  ${updateCartTotal()} `   
    localStorage.setItem("textvalue1",cartRowContents) 
}
function addition(event){
var valuecount1=event.target
  var valuecount = valuecount1.parentElement;
 var  valuecount2 = valuecount.getElementsByClassName("cart-quantity-input")[0];
 var  valuecount3 = valuecount2.value
 if(valuecount3 == 1)
 {
    valuecount.querySelector(".minus-btn").setAttribute("disabled","disabled"); 
 }
   valuecount3++;
   valuecount2.value = valuecount3;
   if(valuecount3 > 1){
   valuecount.querySelector(".minus-btn").removeAttribute("disabled");
   valuecount.querySelector(".minus-btn").classList.remove("disabled","disabled");}
   updateCartTotal()
}
function substraction(event){
    var valuecount1=event.target
    var   valuecount = valuecount1.parentElement;
     var valuecount2 = valuecount.getElementsByClassName("cart-quantity-input")[0];
     var  valuecount3 = valuecount2.value
       valuecount3--;
       valuecount2.value = valuecount3;
   if(valuecount3 == 1)
   {
      valuecount.querySelector(".minus-btn").setAttribute("disabled","disabled"); 
   }
   updateCartTotal()
}

function updateCartTotal()  {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for( var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price= parseFloat(priceElement.innerText.replace('$',''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
        console.log(total)
    }
total = Math.round(total*100)/100
document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
return total;
}
var urlmenu = document.getElementById('menu')
urlmenu.onchange = function() {
var useroption = this.options[this.selectedIndex];
var variable = "The continent you live in is: "+ useroption.value
localStorage.setItem("textvalue2",variable)
}
const carouselImages = document.querySelector('.shop-items');
const carouselButtons = document.querySelectorAll('.button1');
console.log(carouselButtons)
const numberOfImages = document.querySelectorAll('.shop-item-image').length;
let imageIndex = 1;
let translateX = 0;
carouselButtons.forEach(button => {
    button.addEventListener('click', event => {
        if(event.target.id === 'previous'){
            if(imageIndex !== numberOfImages){
                imageIndex++;
                translateX -= 400;
            }
        }
        else{
            if(imageIndex !== 1){
                imageIndex--;
                translateX += 400;
            }
        }
        carouselImages.setAttribute("style",`transform:translateX(${translateX}px);`)
    });
});
const favicon = document.getElementById("favicon")
favicon.setAttribute("style","border-radius: 6px 6px 6px 6px;")

