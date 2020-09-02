try{
    console.log('This is try block');
    dinky;
    console.log('This is second line of try block');
}

catch(err)
{
    console.log('An error detected:'+err.message );
}

finally{
    console.log('This will execute anyway');
}