const userleft = true
const userwatching = false

function watchtutorial(){
    return new Promise((resolve,reject) => {
    if (userleft)
{
   reject({
        name: "user left",
        message: ':('
    })
}

else if (userwatching)
{
    reject({
        name: "user watching",
        message: ':)'  
    })
}


else
{
resolve('Please subscribe')
}} )}

watchtutorial() .then((message) => {
    console.log('success :'  +message)
})
.catch((error) => {
    console.log(error.name + error.message)
})