const db = require ("../../database/models")
const Op = db.sequelize.Op


const controller = {

    list: async (req, res) => {

        try {

            const users = await db.User.findAll()
            
            let count = users.length
            
            console.log (users)
            
            let usersList = []

            users.forEach(user =>{
                usersList.push({
                    id: user.id,
                    fisrtName: user.first_name,
                    lastname: user.last_name,
                    email: user.email,
                    detail:`localhost:3030/users/detail/${user.id}`
                })
            })

            return res.status(200).json({
                    count, 
                    usersList
                })
            
        
        } catch (error){
            
            res.status(500).json({ error: error.message })
        }

    },
    
    detail: async (req, res) => { 

        try {

        const id = req.params.id
        const user = await db.User.findByPk(id)
        delete user.dataValues.password
        delete user.dataValues.roleId
        delete user.dataValues.RoleId

        let imageUrl = `/images/${user.image}`

        return res.status(200).json({user,imageUrl})
    
        
    
        } catch (error){
            
            res.status(500).json({ error: error.message })
        }

    
}
}

module.exports = controller;