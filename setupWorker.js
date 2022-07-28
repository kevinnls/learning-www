const worker = new Worker('./worker.js');

worker.onmessage = (e) => {
    const message = e.data;
    if(message.type === 'pong') {
	console.log('MAIN THREAD: pong received')
	return
    }
    console.log('MAIN THREAD:', message)
}

worker.onerror = (e) => {
    console.log('MAIN THREAD [ERROR]:', e.message)
    e.preventDefault()
}

worker.postMessage({type: 'ping'})
worker.postMessage({type: 'forceThrowError'})

