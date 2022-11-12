window.onload = function () {
   
    
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')
    const form = document.querySelector('.login-form')
    

    
    console.log(email)
    console.log(password)
    console.log(form)
    

    let errors = {}


    

    function emailValidation () {
        if (email.value.trim() == "") {
            errors.email = "Este campo no puede estar vacío";
        } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email.value)) {
            errors.email = "Debes ingresar un email válido";
        } else {            
            delete errors.email
        }

        if (errors.email) {
            email.classList.add('error');
            email.classList.remove('ok');
            email.parentElement.querySelector('p').innerText = errors.email;
            email.parentElement.querySelector('i').classList.add ('error')
            email.parentElement.querySelector('i').classList.remove ('ok')
        } else {
            email.classList.remove('error');
            email.classList.add('ok');
            email.parentElement.querySelector('p').innerText = "";
            email.parentElement.querySelector('i').classList.remove ('error')
            email.parentElement.querySelector('i').classList.add ('ok')
        }
    }

    function passwordValidation () {
        if (password.value.trim() == "") {
            errors.password = "Este campo no puede estar vacío";
        } else if (password.value.length < 4) {
            errors.password = "La contraseña debe contener al menos 4 caracteres";
        } else {            
            delete errors.password
        }

        if (errors.password) {
            password.classList.add('error');
            password.classList.remove('ok');
            password.parentElement.querySelector('p').innerText = errors.password;
            password.parentElement.querySelector('i').classList.add ('error')
            password.parentElement.querySelector('i').classList.remove ('ok')
        } else {
            password.classList.remove('error');
            password.classList.add('ok');
            password.parentElement.querySelector('p').innerText = "";
            password.parentElement.querySelector('i').classList.remove ('error')
            password.parentElement.querySelector('i').classList.add ('ok')
        }
    }

    


    // validations when the users submit the form

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        emailValidation()
        passwordValidation()

        if (!Object.keys(errors).length) form.submit();
    })

    
    // validaciones en tiempo real

    email.addEventListener("keyup", emailValidation);
    password.addEventListener("keyup", passwordValidation);
    
    // validaciones al dejar el campo

    email.addEventListener('blur', emailValidation)
    password.addEventListener('blur', passwordValidation)

}