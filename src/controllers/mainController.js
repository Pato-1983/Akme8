
const fs = require('fs');
const path = require('path');
const db = require('../database/models')



const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

controller = {

    index : async (req,res) => {
        try {

        const categories = await db.Category.findAll();  

        const products = await db.Product.findAll({include: [db.Image]});  
          
        res.render('main/index',{products, categories,toThousand});
    
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    
    },

    contact: (req,res) => res.render('main/contact'),

    help: (req,res) => res.render('main/help'),

    about: (req,res) => res.render('main/about'),

    navBar: async (req,res) => {
        try {

        const categories = await db.Category.findAll();  
          
        res.render('partials/navBar',{categories});
        console.log(categories)
    
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    
    }
    
}

module.exports = controller;