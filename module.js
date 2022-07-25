function incrementCounter(){
    document.getElementById('counter').textContent++
}

function decrementCounter(){
    document.getElementById('counter').textContent--
}

export { decrementCounter, incrementCounter };
