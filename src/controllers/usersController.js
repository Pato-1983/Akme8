const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const jsonDB = require('../model/jsonDatabase');
const usersModel = jsonDB ('users')
const users = jsonDB('users') 

const { validationResult } = require('express-validator');
const db = require('../database/models');

const controller = {

    register: async (req,res) => {

		try {
			let roles = await db.Role.findAll();

			res.render('users/register', {roles})
		
		} catch (error) {
            res.status(500).json({ error: error.message });
        }	
	},

	users: async (req,res) => {

		try {

        const users = await db.User.findAll({include: [db.Role]});
        
		res.render('users/usersList', {users})

		} catch (error) {
            res.status(500).json({ error: error.message });
        }
	},

	detail: async (req,res) => {
		
		try {

        	const id = +req.params.id;
        	let user = await db.User.findByPk(id,{include: [db.Role]})
        	res.render('users/userDetail', {user})
    	
		} catch (error) {

			res.status(500).json({ error: error.message });
	}
	
	},
	
	edit: async (req,res) => { 

		try {
        const id = +req.params.id;
        const users = await db.User.findByPk(id)
		const roles = await db.Role.findAll()

        res.render('users/userEdit', {users, roles})
    
		} catch (error) {

		res.status(500).json({ error: error.message });
	}
	
	},

    store: async (req, res) => {
		
		const results = validationResult(req)
		
		if (results.errors.length > 0) {
			return res.render('users/register', {
				errors:results.mapped(),
				oldData:req.body
			})

		} else {

			try {

            let userToFind = await db.User.findOne ({where:{email : req.body.email}})

            if(userToFind){
				if (req.file) {
					fs.unlinkSync(path.resolve(__dirname, '../../public/images/'+req.file.filename))
				}
                return res.render('users/register', {
                    errors:{
                        email:{
                            msg: 'Este email ya corresponde a un usuario registrado',
							
                        }
                    },
				
				oldData:req.body	
                })
				
            }

			let user = {
				...req.body,
				password: bcrypt.hashSync(req.body.password, 10),
				roleId: 2,
				celular: req.body.celular,
				image: req.file !== undefined ? req.file.filename : "default-user-image.png"
			}

			console.log(user)

			let newUser = await db.User.create(user)

		///
//
//			let userImage = {
//				name: req.file.filename,
//				usersId: newUser.id
//			} 
//			console.log(newUser)
//
//			await db.UsersImages.create(userImage)
//
		///
		res.redirect('/users/login')
//
		} catch (error) {
		res.status(500).json({ error: error.message });
	}

}},

	
	update: async (req, res) => {

		try {

		let id = Number(req.params.id);
		let userToEdit = await db.User.findByPk(id);

		userToEdit = {
			id: userToEdit.id,
			...req.body,
			image: req.file !== undefined ? req.file.filename : "default-user-image.png"			
		}

		await db.User.update(userToEdit, {where:{id:id}})
		res.redirect("/users/users");
	
		} catch (error) {

			res.status(500).json({ error: error.message });
		
		}
	
	
	},
    
    login: (req,res) => res.render('users/login'),

	loginProcess: async (req,res) => {

		try {

		let userToLogin = await db.User.findOne ({where: {"email": req.body.email}})
		if (userToLogin) {
			let passwordOk = bcrypt.compareSync (req.body.password, userToLogin.password)
			if (passwordOk) {
				delete userToLogin.password
				req.session.userLogged = userToLogin

				console.log('**************'+userToLogin)

				if(req.body.rememberMe) {
					res.cookie ('email', req.body.email, {maxAge: 1000 * 60 * 60 * 24})
				}

				return res.redirect ('/users/profile')
			}
		}
		return res.render ('users/login', {
			errors: {
				email: {
					msg: "Usuario o password incorrecto"
				}
			}
		})

		} catch (error) {

			res.status(500).json({ error: error.message });
		
		}

	},

	profile: (req,res) => {
		res.render('users/userProfile', {
			user: req.session.userLogged})
	},

	logout: (req,res) => {
		res.clearCookie('email')
		req.session.destroy()
		return res.redirect ('/')

	},

	adminMenu: (req,res) => {
		res.render ('users/adminMenu')
	},

    cart: (req,res) => res.render('users/userCart'),
    
};

module.exports = controller;