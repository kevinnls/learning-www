onmessage = (e) => {
    const message = e.data
    if (message.type === 'ping') {
	console.log('WORKER: ping received')
	postMessage({type: 'pong'})
	return
    }
    if (message.type === 'forceThrowError') {
	document.getElementById('counter');
	return
    }
    console.log('WORKER:', message)
}

