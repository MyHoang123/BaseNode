const Account = require('../models/UserModel')
exports.index = function (req, res)  {
        Account.get_all(function(data) {
            res.render('bodyadmin', {data})
        })
    }

exports.login = async (req, res) => {
    const {Acc, Pass} = req.body;
    if (Acc && Pass) { 
        await Account.login(Acc,Pass,(err,user)=>{
            if(user) {
                return res.status(200).json({
                    massege: 'Thanh Cong',
                 })
            }
            else {
                return res.status(200).json({
                    massege: 'that bai',
                 })
            }
        })
    }
}
exports.showListUser = function (req, res) {
    Account.get_all(function(data) {
        return res.status(200).json({
            massege: 'thanh cong',
            data: data
         })
    })
}
exports.showform = async (req, res) => {
        res.render('insertuser', {layout: 'admin'})
}
exports.insertUser = async (req, res) => {
    const {Acc, Pass, Pass1, Access} = req.body;
        await Account.insert(Acc,Pass,Access)
        return res.status(200).json({
            massege: 'Thanh Cong',
         })
        }
exports.deleteUser = async (req, res) => {
    const id = req.params.iduser
    await Account.deleteuser(id)
    return res.status(200).json({
        massege: 'Thanh Cong',
     })
}
exports.showupdateUser = function (req, res) {
    const id = req.params.iduser
    Account.getUserId(id, function (data){
        res.render('updateuser', {data, layout: 'admin'})
    })
}
exports.update = async (req, res) => {
    const {Acc,Pass,Access,idAcc} = req.body
    await Account.updateUser(Acc,Pass,Access,idAcc)
    return res.status(200).json({
        massege: 'Thanh Cong',
     })
}