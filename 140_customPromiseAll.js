function promiseAll(promises) {

    const output = []

    let settledPromisesCounter = 0

    return new Promise((res, rej) => {

        promises.forEach((prom, i) => {

            prom
                .then(value => {
                    output[i] = value
                    settledPromisesCounter++

                    if (settledPromisesCounter === promises.length) {
                        res(output)
                    }
                })
                .catch(() => {
                    rej("Error!")
                })

        })


    })

}

const slowPromise = new Promise(res => {

    setTimeout(() => {

        res('1000ms')

    }, 1000)

})

const promises = [
    slowPromise,
    Promise.reject(1000)
]

promiseAll(promises).then(console.log).catch(console.error)