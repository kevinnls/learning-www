const initialCounter = localStorage.getItem('savedCounter') || 0;

console.log('do statements in the module get executed?')

function incrementCounter(){
    document.getElementById('counter').firstChild.textContent++
}

function decrementCounter(){
    document.getElementById('counter').firstChild.textContent--
}

export { initialCounter, decrementCounter, incrementCounter };
