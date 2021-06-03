function resultado (event){
    event.preventDefault()

    const number = [
        field1.value,
        field2.value,
        field3.value,
        field4.value,
        field5.value,
    ]

    const min = Math.min(...number);
    const max = Math.max(...number);

    console.log(min)
    console.log(max)

    result.innerHTML = `O valor mínimo é ${min} e o máximo é ${max}`
}

form.addEventListener('submit', resultado)