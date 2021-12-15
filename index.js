window.addEventListener('scroll', () => {
    const trigger1 = document.querySelector('#trigger-1')
    const trigger1Rect = trigger1.getBoundingClientRect()

    const trigger2 = document.querySelector('#trigger-2')
    const trigger2Rect = trigger2.getBoundingClientRect()

    const trigger3 = document.querySelector('#trigger-3')
    const trigger3Rect = trigger3.getBoundingClientRect()

    if (trigger1Rect.top < window.innerHeight) {
        const progress =
            ((window.innerHeight - trigger1Rect.top) / window.innerHeight) * 100
        console.log('progress', progress)

        document.querySelector('#current-slide').innerHTML = '1'
        document.querySelector('#progress').innerHTML = `${progress}%`
    } else {
        document.querySelector('#current-slide').innerHTML = '1'
        document.querySelector('#progress').innerHTML = `0%`
    }

    if (trigger2Rect.top < window.innerHeight) {
        const progress =
            ((window.innerHeight - trigger2Rect.top) / window.innerHeight) * 100
        console.log('progress', progress)

        document.querySelector('#current-slide').innerHTML = '2'
        document.querySelector('#progress').innerHTML = `${progress}%`
    }

    if (trigger3Rect.top < window.innerHeight) {
        const progress =
            ((window.innerHeight - trigger3Rect.top) / window.innerHeight) * 100
        console.log('progress', progress)

        if (progress >= 100) {
            document.querySelector('#current-slide').innerHTML = '3'
            document.querySelector('#progress').innerHTML = `100%`
        } else {
            document.querySelector('#current-slide').innerHTML = '3'
            document.querySelector('#progress').innerHTML = `${progress}%`
        }
    }
})
