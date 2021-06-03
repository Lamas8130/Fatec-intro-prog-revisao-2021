const ListNames = []

function addName(event){
    event.preventDefault()

    ListNames.push(input.value)
    result.innerHTML += `<p><stong>${input.value}</strong> foi cadastrado/a!</p>`

}

function ShowOrder(event){
    event.preventDefault()

    input.className = ''
    result.innerHTML = ''

    ListNames.forEach((item) => {
        result.innerHTML += `Nome: ${item}<br>`
    })
}

function ShowInReverseOrder(event){
    event.preventDefault()

    input.className = ''
    result.innerHTML = ''

    ListNames.reverse().forEach((item) => {
        result.innerHTML += `Nome: ${item}<br>`
    })
}

function OrderAlphabetica(event){
    event.preventDefault()

    input.className = ''
    result.innerHTML = ''

    ListNames.sort().forEach((item) => {
        result.innerHTML += `Nome: ${item}<br>`
    })
}


Add.addEventListener('click', addName)
ShowInOrder.addEventListener('click', ShowOrder)
ReverseOrder.addEventListener('click', ShowInReverseOrder)
AlphabeticalOrder.addEventListener('click', OrderAlphabetica)
