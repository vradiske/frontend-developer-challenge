//function to check if the e-mail is valid on newsletter submit
function checkEmail () {
    let email = document.getElementById('email')
    const emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

    if (!emailPattern.test(email.value)){
        alert('O campo e-mail não é valido!')
        return false
    }
    
    return true
}