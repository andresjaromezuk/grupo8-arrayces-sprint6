const {User} = require('../database/models')

/* async */ function userLoggedMiddleware (req, res, next) {
        
       /*  try { */

            res.locals.isLogged = false
    
           /*  let userFromCookie = await User.findOne({
            where: {
                token: req.cookies.token
            }
        })  */
        
        /* if(userFromCookie){
        
            delete userFromCookie.password
            delete userFromCookie.confirmPassword
            req.session.userLogged = userFromCookie

            console.log ('-----------------')
            console.log ('-----------------')
            console.log ('-----------------')
            console.log (userFromCookie)
        } */

        if(req.session.userLogged){
            res.locals.isLogged = true
            res.locals.userLogged = req.session.userLogged
        }
    
        next()
            
       /*  } catch (error) {
            res.json(error)
        } */
    
    /* userModel.findFirstByField("token", userCookie)  */

    
}

module.exports = userLoggedMiddleware