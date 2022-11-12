window.onload = function () {

console.log('hola')
   
    const firstName = document.querySelector('#firstName')
    const lastName = document.querySelector('#lastName')
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')
    const celular = document.querySelector('#celular')
    const image = document.querySelector('#image')
    const form = document.querySelector('.register-form') 
    
    console.log(image)
    

    let errors = {}


    function firstNameValidation () {
        if (firstName.value.trim() == "") {
            errors.firstName = "Este campo no puede estar vacío";
        } else if (firstName.value.length < 2) {
            errors.firstName = "El nombre debe tener al menos dos caracteres";
        } else {            
            delete errors.firstName
        }

        if (errors.firstName) {
            firstName.classList.add('error');
            firstName.classList.remove('ok');
            firstName.parentElement.querySelector('p').innerText = errors.firstName;
            firstName.parentElement.querySelector('i').classList.add ('error')
            firstName.parentElement.querySelector('i').classList.remove ('ok')
        } else {
            firstName.classList.remove('error');
            firstName.classList.add('ok');
            firstName.parentElement.querySelector('p').innerText = ""
            firstName.parentElement.querySelector('i').classList.remove ('error')
            firstName.parentElement.querySelector('i').classList.add ('ok')
        }
    }

    
    function lastNameValidation () {
        if (lastName.value.trim() == "") {
            errors.lastName = "Este campo no puede estar vacío";
        } else if (lastName.value.length < 2) {
            errors.lastName = "El apellido debe tener al menos dos caracteres";
        } else {            
            delete errors.lastName
        }

        if (errors.lastName) {
            lastName.classList.add('error');
            lastName.classList.remove('ok');
            lastName.parentElement.querySelector('p').innerText = errors.lastName;
            lastName.parentElement.querySelector('i').classList.add ('error')
            lastName.parentElement.querySelector('i').classList.remove ('ok')
        } else {
            lastName.classList.remove('error');
            lastName.classList.add('ok');
            lastName.parentElement.querySelector('p').innerText = "";
            lastName.parentElement.querySelector('i').classList.remove ('error')
            lastName.parentElement.querySelector('i').classList.add ('ok')
        }
    }

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

    function celularValidation () {
        if (celular.value.trim() == "") {
            errors.celular = "Este campo no puede estar vacío";
        } else if (!/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/
        .test(celular.value)) {
            errors.celular = "Debes ingresar un telefono válido. Ej: 54-9-11-3399-8875 (sin guiones)";
        } else {            
            delete errors.celular
        }

        if (errors.celular) {
            celular.classList.add('error');
            celular.classList.remove('ok');
            celular.parentElement.querySelector('p').innerText = errors.celular;
            celular.parentElement.querySelector('i').classList.add ('error')
            celular.parentElement.querySelector('i').classList.remove ('ok')
        } else {
            celular.classList.remove('error');
            celular.classList.add('ok');
            celular.parentElement.querySelector('p').innerText = "";
            celular.parentElement.querySelector('i').classList.remove ('error')
            celular.parentElement.querySelector('i').classList.add ('ok')
        }
    }

    function imageValidation () {

            var fileInput = document.getElementById('image');
            var filePath = fileInput.value;
            var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
            if(!allowedExtensions.exec(filePath)){
                errors.image = "Las extensiones permitidas son .jpg, .jpeg, .png"
            } else {            
                    delete errors.image
                }

        if (errors.image) {
            image.classList.add('error');
            image.classList.remove('ok');
            image.parentElement.querySelector('p').innerText = errors.image;
            image.parentElement.querySelector('i').classList.add ('error')
            image.parentElement.querySelector('i').classList.remove ('ok')
        } else {
            image.classList.remove('error');
            image.classList.add('ok');
            image.parentElement.querySelector('p').innerText = "";
            image.parentElement.querySelector('i').classList.remove ('error')
            image.parentElement.querySelector('i').classList.add ('ok')
        }
    }




    // validations when the users submit the form

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        firstNameValidation()
        lastNameValidation()
        emailValidation()
        passwordValidation()
        celularValidation()
        imageValidation()
        

        if (!Object.keys(errors).length) form.submit();
    })

    
    // validaciones en tiempo real

    firstName.addEventListener("keyup", firstNameValidation);
    lastName.addEventListener("keyup", lastNameValidation);
    email.addEventListener("keyup", emailValidation);
    password.addEventListener("keyup", passwordValidation);
    celular.addEventListener("keyup", celularValidation);
    image.addEventListener("keyup", imageValidation);
    
    // validaciones al dejar el campo

    firstName.addEventListener('blur', firstNameValidation)
    lastName.addEventListener('blur', lastNameValidation)
    email.addEventListener('blur', emailValidation)
    password.addEventListener('blur', passwordValidation)
    celular.addEventListener('blur', celularValidation)
    image.addEventListener('blur', imageValidation)

}