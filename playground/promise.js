var asyncAdd = (a, b) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            }else{
                reject('Arguments must be nunmers');
            }
        }, 1500);
    });
};

asyncAdd(10, 7).then((res) => {
    console.log('Result: ', res);
    //Chaining, chamar uma outra Promise
    //após recever o resultado da Promise anterior
    return asyncAdd(res, '33');
}).then((res) => {
    console.log('New result: ', res);
}).catch((reason) => {
    console.log('Something wrong: ', reason);
});
    

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hey. It worked!');
//         resolve('Hey. It worked!, second time'); //it will never be called
//         reject('Unable to fullfill promise'); //it will never be called
//     }, 2500);
// });


// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errorMessage) => {
//     console.log('Error: ', errorMessage);
// });