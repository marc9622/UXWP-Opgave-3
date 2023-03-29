
function importHtml(source, elementId) {
    const element = document.querySelector(elementId)
    fetch(source)
        .then(response => response.text()) // converts the html response to a string
        .then(text => element.innerHTML = text) // inserts the string into the header element

}
