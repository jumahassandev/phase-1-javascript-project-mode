
function renderOneBreed(animal) {
    let card=document.createElement('li')
    card.className ="form"
    card.id = breed.id
    card.innerHTML =`
    
< div class ="content">
<h2>${breed.name}</h2>
<p>
$<span class ="payment">${breed.payment}</span>Payment
</p>
<p>
${breed.description}</p>
</div>

<div class =" button">
    <button id="payment">Pay$10</button>
    <button id="pass">set-Pass</button>

</div>
    `

   
//fetch
function getAllBreeds() {
    fetch("http://localhost:3000/breeds")
    .then (res =>res.json())

 }


function initialize() {
    getAllBreeds();
    
}
console.log(getAllBreeds);
initialize();