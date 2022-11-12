const db = require ("../../database/models")
const Op = db.sequelize.Op


const controller = {

    list: async (req, res) => {

        try {

            
            const productos = await db.Product.findAll({include:[db.Category, db.Color]})
            const category = await db.Category.findAll()
            let countByCategory = {}
            

            countByCategory.proteccionRespiratoria = await db.Product.count({where: { categoryId: 1 }})
            countByCategory.proteccionAuditiva = await db.Product.count({where: { categoryId: 2 }})
            countByCategory.protecciónVisual = await db.Product.count({where: { categoryId: 3 }})
            countByCategory.guantes = await db.Product.count({where: { categoryId: 4 }})
            countByCategory.detectores = await db.Product.count({where: { categoryId: 5 }})
            countByCategory.ropaDeTrabajo = await db.Product.count({where: { categoryId: 6 }})
            countByCategory.filtros = await db.Product.count({where: { categoryId: 7 }})
            
            let products = []

            productos.forEach(product =>{
                products.push({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    características: [product.Category.name, product.Color.name],
                    detail:`localhost:3030/productos/detail/${product.id}`
                })
            })

            return res.status(200).json({
                    count: productos.length, 
                    countByCategory,
                    products
                    
                })
            
        
        } catch (error){
            
            res.status(500).json({ error: error.message })
        }

    },

    detail: async (req,res) => {

        try{


            const id = +req.params.id;
            const product = await db.Product.findByPk(id, {
                include: [{model: db.Color}, {model: db.Category}, {model: db.Image}]
            })

            let imageUrl = `/images/${product.Images[0].name}`

            let respuesta = {
                meta: {
                    status: 200,
                    url: `/productos/${id}`,
                },
                data: product
            }

            res.status(200).json({respuesta, imageUrl})
        
        }catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

module.exports = controller;