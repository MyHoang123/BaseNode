const express = require('express')
const cors = require('cors');
const apiProductController = require('../Controllers/apiProductController')
const apiUserController = require('../Controllers/apiUserController')

let router = express.Router()
const apiRoute = (app) => {
    router.get('/showsp',apiProductController.showlist)
    // router.get('/showpage/:page',apiProductController.index)
    // router.get('/showtype',apiProductController.showType)
    router.get('/showuser',apiUserController.showListUser)
    // router.post('/create/insert',apiProductController.insert)
    // router.post('/createtype/insert',apiProductController.insertctgr)
    // router.post('/create/insertuser',apiUserController.insertUser)
    // router.put('/updateuser',apiUserController.update)
    // router.put('/updatesp',apiProductController.updatesp)
    // router.delete('/deletesp/:idsp',apiProductController.deleteproduct)
    // router.delete('/deleteuser/:iduser',apiUserController.deleteUser)
    // router.delete('/deletetype/:idctgr',apiProductController.deletectgr)
    // router.post('/login',apiUserController.login)
    // router.post('/register',apiUserController.insertUser)
    return ( 
        app.use(cors({
            origin: 'http://localhost:3000'
          })),
        app.use('/api/v12/',router));
    
}
module.exports = apiRoute
