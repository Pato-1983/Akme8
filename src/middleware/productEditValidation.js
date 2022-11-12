const { body } = require ('express-validator')
const path = require('path');
const { error } = require('console');

const editValidations =[
    body('name').notEmpty() .withMessage('Ingresa un nombre para el producto').bail()
        .isLength({min: 5})
        .withMessage('El nombre del producto debe tener al menos 5 caracteres'),
    
    body('description')
        .notEmpty()
        .withMessage('Ingresa una descripción para el producto')
        .bail()
        .isLength({min: 20})
        .withMessage('La descripción del producto debe tener al menos 20 caracteres'),    

    body('price')
        .notEmpty()
        .withMessage('El producto debe tener un precio')
        .bail() 
        .isFloat({min: 0})
        .withMessage('El precio del producto no puede ser menor a 0 (cero)'),

    body('image').custom((value, {req}) => {

        const files = req.files    
            
        if (!files) {
            throw new Error('El producto debe tener una imagen');
        } else {
            const acceptedExtensions = ['.jpg', '.JPG', '.png', '.PNG', '.jpeg', '.JPEG', '.pneg', '.PNEG'];
    
            files.forEach(file => {
                let fileExtension = (path.extname(file.filename))

            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Los formatos de imagen válidos son ${acceptedExtensions.join(', ')}`);
            }

            })                
        }

        return true;

    }),    

    body('categoryId')
        .notEmpty()
        .withMessage('Ingresa una categoría'),

    body('colorId')
        .notEmpty()
        .withMessage('Ingresa un color'),

    body('discount')
        .notEmpty()
        .withMessage('El producto debe tener un descuento')
        .bail() 
        .isFloat({min: 0, max: 100})
        .withMessage('El precio del producto no puede ser menor a 0 (cero)')
    
]

module.exports = editValidations;