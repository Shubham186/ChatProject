module.exports = validation = (body) => {   
    let error = {};
    if(body.name === '')
    error.name = "Name cannot be empty";
    if(body.password === '')
    error.password = 'Password cannot be empty';
    if(body.password2 === '')
    error.confirm = 'Please enter confirm password';
    if(body.password !== body.password2)
    error.confirm = 'Password does not match';
    if(body.email ==='')
    error.email = 'Please enter the email';

    return error;
}

