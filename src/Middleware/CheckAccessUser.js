const User = require("../Models/UserModel")
exports.checkAccessViewUser = (req, res, next) => {
    const Id  = req.Id
    User.checkAccessView(1,Id, (Access) => {
        if(Access === 1) {
            next()
        }
        else {
            return res.status(200).json({
                massege: 'No Access',
            })
        }
    })
}
exports.checkAccessViewMenu = (req, res, next) => {
    const Id  = req.Id
    User.checkAccessView(2,Id, (Access) => {
        if(Access === 1) {
            next()
        }
        else {
            return res.status(200).json({
                massege: 'No Access',
            })
        }
    })
}
exports.checkAccessViewRecruit = (req, res, next) => {
    const Id  = req.Id
    User.checkAccessView(3,Id, (Access) => {
        if(Access === 1) {
            next()
        }
        else {
            return res.status(200).json({
                massege: 'No Access',
            })
        }
    })
}
exports.checkAccessAddNewsUser = (req, res, next) => {
    const Id  = req.Id
    User.checkAccessAddNew(1,Id, (Access) => {
        if(Access === 1) {
            next()
        }
        else {
            return res.status(200).json({
                massege: 'No Access',
            })
        }
    })
}
exports.checkAccessAddNewsMenu = (req, res, next) => {
    const Id  = req.Id
    User.checkAccessAddNew(2,Id, (Access) => {
        if(Access === 1) {
            next()
        }
        else {
            return res.status(200).json({
                massege: 'No Access',
            })
        }
    })
}
exports.checkAccessAddNewsRecrui = (req, res, next) => {
    const Id  = req.Id
    User.checkAccessAddNew(3,Id, (Access) => {
        if(Access === 1) {
            next()
        }
        else {
            return res.status(200).json({
                massege: 'No Access',
            })
        }
    })
}
exports.checkAccessModifyUser = (req, res, next) => {
    const Id  = req.Id
    User.checkAccessModify(1,Id, (Access) => {
        if(Access === 1) {
            next()
        }
        else {
            return res.status(200).json({
                massege: 'No Access',
            })
        }
    })
}
exports.checkAccessModifyMenu = (req, res, next) => {
    const Id  = req.Id
    User.checkAccessModify(2,Id, (Access) => {
        if(Access === 1) {
            next()
        }
        else {
            return res.status(200).json({
                massege: 'No Access',
            })
        }
    })
}
exports.checkAccessModifyRecruit = (req, res, next) => {
    const Id  = req.Id
    User.checkAccessModify(3,Id, (Access) => {
        if(Access === 1) {
            next()
        }
        else {
            return res.status(200).json({
                massege: 'No Access',
            })
        }
    })
}
exports.checkAccessDeleteUser = (req, res, next) => {
    const Id  = req.Id
    User.checkAccessDelete(1,Id, (Access) => {
        if(Access === 1) {
            next()
        }
        else {
            return res.status(200).json({
                massege: 'No Access',
            })
        }
    })
}
exports.checkAccessDeleteMenu = (req, res, next) => {
    const Id  = req.Id
    User.checkAccessDelete(2,Id, (Access) => {
        if(Access === 1) {
            next()
        }
        else {
            return res.status(200).json({
                massege: 'No Access',
            })
        }
    })
}
exports.checkAccessDeleteRecrui = (req, res, next) => {
    const Id  = req.Id
    User.checkAccessDelete(3,Id, (Access) => {
        if(Access === 1) {
            next()
        }
        else {
            return res.status(200).json({
                massege: 'No Access',
            })
        }
    })
}