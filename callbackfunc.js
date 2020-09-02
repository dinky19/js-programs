const userleft = true
const userwatching = false

function watchtutorial(callback,errorcallback){
if (userleft)
{
    errorcallback({
        name: "user left",
        message: ':('
    })
}

else if (userwatching){
    errorcallback({
        name: "user watching",
        message: ':)'  
})
}
else
{
callback('Please subscribe')
}}

watchtutorial ((message) => {
    console.log('success :'  +message)
},
(error) => {
    console.log(error.name + error.message)
})