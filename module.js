const initialCounter = localStorage.getItem('savedCounter') || 0;
const valueHiddenInModule = 'i have no creativity. value hidden in module';

console.log('do statements in the module get executed?')

function incrementCounter(){
    document.getElementById('counter').firstChild.textContent++
}

function decrementCounter(){
    document.getElementById('counter').firstChild.textContent--
}

export { initialCounter, decrementCounter, incrementCounter };
