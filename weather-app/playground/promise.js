var asyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === "number" && typeof b === "number"){
                resolve(a+b)
            }else{
                reject(`Arguments must be numbers`)
            }
        }, 1500)
    })
}


asyncAdd(5,7).then((res) => {
    return asyncAdd(res, "32")
}).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

// var somePromise = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         // resolve(`Hey this is test!`)
//         reject(`unable to fulfill promise`)
//     }, 3000)

// })

// somePromise.then((message)=> {
//     console.log(`success:`, message)
// }, (err) => {
//     console.log(`Error`, err)
// })