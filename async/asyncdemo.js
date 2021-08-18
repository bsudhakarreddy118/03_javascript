const products = ['product1', 'product2'];


let promise = new Promise((resolve, reject)=> {
        products.push('product3');
        let success = false;
        setTimeout(()=>{
            if(success){
                console.log("product added successfully");
                resolve({status: 200, body: 'Product added'})
    
            }else{
                reject({errCode: 500, msg: 'product addition failed'})
            }
        },1000)
})

promise
    .then((response)=>{
        console.log(`response received : ${response.status} - ${response.body} `);
    })
    .catch((err)=>{
        console.log(err.errCode + err.msg);
    })


console.log("execution after adding product");
console.log("execution after adding product");