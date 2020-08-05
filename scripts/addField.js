document.querySelector("#add-time")
.addEventListener('click', cloneField)

function cloneField(){
    // cloneNode() se for true pega todo o elemento filho e replica para o html
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //adicionar a campos na pagina
    const fields = newFieldContainer.querySelectorAll('input')
    //para cada field vai executar algo
    fields.forEach(function(field) {
        field.value = ""
    })
   



    
    document.querySelector('#schedules-items').appendChild(newFieldContainer)
}