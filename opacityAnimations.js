const decreasingOpacityFrames = [
    { opacity: '90%' },
    { opacity: '0%' },
]

const increasingOpacityFrames = [ ...decreasingOpacityFrames ].reverse();

export { decreasingOpacityFrames, increasingOpacityFrames };

