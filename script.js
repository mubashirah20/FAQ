//Bring in toggle buttons(queryselectorAll)
const toggles = document.querySelectorAll('.faq-toggle')

//Loop through nodelist (forEach)
toggles.forEach(toggle => {
    //Add clickEvent(addEventListener)
    toggle.addEventListener('click', () => {
        //Toggle the active class on the parent node(.parentnode & classList.toggle())
        toggle.parentNode.classList.toggle('active')
    })
})

