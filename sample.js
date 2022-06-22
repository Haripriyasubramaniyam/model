//callBack function
function mainFun(hello){
    console.log('FirstName');
    hello();
}


function callBack(){
    console.log('LastName');

}
mainFun(callBack);

//async fun/await

let testing=()=>{
    let promise=new Promise((resolve, reject) => {
        let number=10;
        if(number==10){
            resolve("success");
        }
        else{
            reject("fail");
        }
    });
    return promise;

}
async function test(){
    try{
        let response=await testing();
        console.log(response);

    }
    catch(e){
        console.log(e);
    }
}
test()