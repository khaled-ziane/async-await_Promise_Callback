const work = () => {
    var x = 0
    var s = 0
    while (x <= 100000000) {
        x++
        s = s + x
    }
    return s
}

// Async
async function test() {
    try {
        const res = await work()
        return res
    } catch (err) {
        console.log('Error Catched')
    }
}
test().then((response) => {
    console.log(response)
}).catch(error => {
    console.log(error)
})

// Promise
function test() {
    return new Promise((resolve, reject) => {
        resolve(work())
    })
}
test().then(v => console.log(v))

// Promise + setTimeout
    function test() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var x = 0
                while (x <= 100000000) {
                    x++
                }
                resolve('khaled ziane')
            }, 0);
        })
    }
    test().then(v => console.log(v))

  //  Callback 
    function test(email, callback) {
        setTimeout(() => {
            var x = 0
            while (x <= 100000000) {
                x++
            }
            callback(email)
        }, 0);
    }