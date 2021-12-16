const NUM_OF_TRIGGERS = 3

function getTriggerRect(num) {
    return document.querySelector('#trigger-' + num).getBoundingClientRect()
}

function getViewportHeight() {
    return window.innerHeight
}

function updateSlideProgress(slideNumber) {
    const viewportHeight = getViewportHeight()
    const triggerRect = getTriggerRect(slideNumber)
    const currentTop = triggerRect.top
    const progress = ((window.innerHeight - currentTop) / viewportHeight) * 100

    if (slideNumber === NUM_OF_TRIGGERS && progress >= 100) {
        forceSlideProgress(slideNumber, 100)
    } else {
        document.querySelector('#current-slide').innerHTML = slideNumber
        document.querySelector('#progress').innerHTML = `${progress}%`
    }
}

function forceSlideProgress(slideNumber, progress) {
    document.querySelector('#current-slide').innerHTML = slideNumber
    document.querySelector('#progress').innerHTML = `${progress}%`
}

window.addEventListener('scroll', () => {
    const viewportHeight = getViewportHeight()

    for (let i = 1; i <= NUM_OF_TRIGGERS; i++) {
        const triggerRect = getTriggerRect(i)

        if (triggerRect.top < viewportHeight) {
            updateSlideProgress(i)
        } else if (i === 1) {
            forceSlideProgress(i, 0)
        }
    }
})
