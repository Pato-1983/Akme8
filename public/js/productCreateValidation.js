window.onload = function () {

    console.log('hola')
       
        const name = document.querySelector('#name')
        const description = document.querySelector('#description')
        const price = document.querySelector('#price')
        const image = document.querySelector('#image')
        const category = document.querySelector('#categoryId')
        const color = document.querySelector('#colorId')
        const discount = document.querySelector('#discount')
        const form = document.querySelector('.create-form') 
        
        console.log(discount)
        
    
        let errors = {}
    
    
        function nameValidation () {
            if (name.value.trim() == "") {
                errors.name = "Este campo no puede estar vacío";
            } else if (name.value.length < 5) {
                errors.name = "El nombre debe tener al menos cinco caracteres";
            } else {            
                delete errors.name
            }
    
            if (errors.name) {
                name.classList.add('error');
                name.classList.remove('ok');
                name.parentElement.querySelector('p').innerText = errors.name;
                name.parentElement.querySelector('i').classList.add ('error')
                name.parentElement.querySelector('i').classList.remove ('ok')
            } else {
                name.classList.remove('error');
                name.classList.add('ok');
                name.parentElement.querySelector('p').innerText = ""
                name.parentElement.querySelector('i').classList.remove ('error')
                name.parentElement.querySelector('i').classList.add ('ok')
            }
        }
    
        
        function descriptionValidation () {
            if (description.value.trim() == "") {
                errors.description = "Este campo no puede estar vacío";
            } else if (description.value.length < 20) {
                errors.description = "La descripción debe tener al menos 20 caracteres";
            } else {            
                delete errors.description
            }
    
            if (errors.description) {
                description.classList.add('error');
                description.classList.remove('ok');
                description.parentElement.querySelector('p').innerText = errors.description;
                description.parentElement.querySelector('i').classList.add ('error')
                description.parentElement.querySelector('i').classList.remove ('ok')
            } else {
                description.classList.remove('error');
                description.classList.add('ok');
                description.parentElement.querySelector('p').innerText = "";
                description.parentElement.querySelector('i').classList.remove ('error')
                description.parentElement.querySelector('i').classList.add ('ok')
            }
        }
    
        function priceValidation () {
            if (price.value.trim() == "") {
                errors.price = "Este campo no puede estar vacío";
            } else if (isNaN(price.value)) {
                errors.price = "Debes ingresar un importe válido";
            } else {            
                delete errors.price
            }
    
            if (errors.price) {
                price.classList.add('error');
                price.classList.remove('ok');
                price.parentElement.querySelector('p').innerText = errors.price;
                price.parentElement.querySelector('i').classList.add ('error')
                price.parentElement.querySelector('i').classList.remove ('ok')
            } else {
                price.classList.remove('error');
                price.classList.add('ok');
                price.parentElement.querySelector('p').innerText = "";
                price.parentElement.querySelector('i').classList.remove ('error')
                price.parentElement.querySelector('i').classList.add ('ok')
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


        function categoryValidation () {

            console.log(category.value)
            
            if (category.value == '0') {
                errors.category = "Debes seleccionar una categoría";
            } else {            
                delete errors.category
            }
    
            if (errors.category) {
                category.classList.add('error');
                category.classList.remove('ok');
                category.parentElement.querySelector('p').innerText = errors.category;
                category.parentElement.querySelector('i').classList.add ('error')
                category.parentElement.querySelector('i').classList.remove ('ok')
            } else {
                category.classList.remove('error');
                category.classList.add('ok');
                category.parentElement.querySelector('p').innerText = "";
                category.parentElement.querySelector('i').classList.remove ('error')
                category.parentElement.querySelector('i').classList.add ('ok')
            }
        }


        function colorValidation () {
            
            if (color.value == '0') {
                errors.color = "Debes seleccionar un color";
            } else {            
                delete errors.color
            }
    
            if (errors.color) {
                color.classList.add('error');
                color.classList.remove('ok');
                color.parentElement.querySelector('p').innerText = errors.color;
                color.parentElement.querySelector('i').classList.add ('error')
                color.parentElement.querySelector('i').classList.remove ('ok')
            } else {
                color.classList.remove('error');
                color.classList.add('ok');
                color.parentElement.querySelector('p').innerText = "";
                color.parentElement.querySelector('i').classList.remove ('error')
                color.parentElement.querySelector('i').classList.add ('ok')
            }
        }

        function discountValidation () {
            if (discount.value.trim() == "") {
                errors.discount = "Este campo no puede estar vacío";
            } else if (isNaN(discount.value)) {
                errors.discount = "Debes ingresar un importe válido";
            } else {            
                delete errors.discount
            }
    
            if (errors.discount) {
                discount.classList.add('error');
                discount.classList.remove('ok');
                discount.parentElement.querySelector('p').innerText = errors.discount;
                discount.parentElement.querySelector('i').classList.add ('error')
                discount.parentElement.querySelector('i').classList.remove ('ok')
            } else {
                discount.classList.remove('error');
                discount.classList.add('ok');
                discount.parentElement.querySelector('p').innerText = "";
                discount.parentElement.querySelector('i').classList.remove ('error')
                discount.parentElement.querySelector('i').classList.add ('ok')
            }
        }
    
    
    
    
        // validations when the users submit the form
    
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            
            nameValidation()
            descriptionValidation()
            priceValidation()
            imageValidation()
            categoryValidation()
            colorValidation()
            discountValidation()
    
            if (!Object.keys(errors).length) form.submit();
        })
    
        
        // validaciones en tiempo real
    
        name.addEventListener("keyup", nameValidation);
        description.addEventListener("keyup", descriptionValidation);
        price.addEventListener("keyup", priceValidation);
        image.addEventListener("keyup",imageValidation)
        category.addEventListener("keyup",categoryValidation)
        color.addEventListener("keyup",colorValidation)
        discount.addEventListener("keyup",discountValidation)
        
        // validaciones al dejar el campo
    
        name.addEventListener('blur', nameValidation)
        description.addEventListener('blur', descriptionValidation)
        price.addEventListener('blur', priceValidation)
        image.addEventListener('blur',imageValidation)
        category.addEventListener('blur',categoryValidation)
        color.addEventListener('blur',colorValidation)
        discount.addEventListener('blur',discountValidation)
    
    }