const NUM_OF_TRIGGERS = 4

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
        printSlideNumberAndProgress(slideNumber, 100)
    } else {
        printSlideNumberAndProgress(slideNumber, progress)
    }
}

function printSlideNumberAndProgress(n, progress) {
    const slideNumber = n === NUM_OF_TRIGGERS ? NUM_OF_TRIGGERS - 1 : n
    document.querySelector('#current-slide').innerHTML = slideNumber
    document.querySelector('#progress').innerHTML = `${progress}%`
}

function stickyContainerProgress() {
    const viewportHeight = getViewportHeight()

    for (let i = 1; i <= NUM_OF_TRIGGERS; i++) {
        const triggerRect = getTriggerRect(i)

        if (triggerRect.top < viewportHeight) {
            updateSlideProgress(i)
        } else if (i === 1) {
            printSlideNumberAndProgress(i, 0)
        }
    }
}

function parallaxOverStickyContainer() {
    const lastTriggerElement = document.querySelector(
        '#trigger-' + (NUM_OF_TRIGGERS - 1)
    )
    const lastTriggerRect = lastTriggerElement.getBoundingClientRect()

    if (lastTriggerRect.top < 0) {
        document.querySelector('#sticky-section').classList.add('latched')
    } else {
        document.querySelector('#sticky-section').classList.remove('latched')
    }
}

window.addEventListener('scroll', () => {
    stickyContainerProgress()
    parallaxOverStickyContainer()
})
