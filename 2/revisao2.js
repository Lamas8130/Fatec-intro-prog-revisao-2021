const RegisterNumbers = []

function addNumber(event){
    event.preventDefault()

    
    field1.className = ''
    result.innerHTML = ''
    RegisterNumbers.push(field1.value)
    result.innerHTML += '<p>Registered successfully!</p>'
   
}

function operations(){

    result.innerHTML = ''
    field1.className = ''
    
    RegisterNumbers.forEach( (item) => {
        result.innerHTML += `
        <p class="box-result"> 
        Number: ${item} <br> 
        Number square: ${Math.pow(item, 2)} <br>
        Square root of number: ${Math.sqrt(item)} <br>
        <p/>`
    }) 

}


form.addEventListener('submit', addNumber)
showAll.addEventListener('click', operations)
