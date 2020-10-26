// Write your code here!

// no longer has DOM node 'main#main'
main.remove()

// has a 'newHeader' variable that points to node 'h1#victory'
const newHeader = document.createElement('h1')

// has a 'newHeader' variable that points to node 'h1#victory'
newHeader.id = 'victory'

// has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside
newHeader.innerHTML = "Bryn is the champion!"