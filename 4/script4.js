const ListStudant = []

function addStudant(event){
    event.preventDefault()

    input1.className = ''
    input2.className = ''
    result.innerHTML = ''

    ListStudant.push(input1.value)
    ListStudant.push(input2.value).toString(2)


    console.log(ListStudant)

    result.innerHTML = 'Cadastro Concluido!'
    
}

add.addEventListener('click', addStudant)