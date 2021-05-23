const Menu = require('../../models/menu')
function homeController() {
    return {
        async index(req, res) {
                const foods = await Menu.find()
                return res.render('home', {foods: foods})
            }
            
        }
        
    }

module.exports = homeController