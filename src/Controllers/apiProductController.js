const Product = require('../models/ProductModel')
exports.showlist = async (req, res) => {
    Product.getAllProduct(function(data) {
     return res.status(200).json({
        massege: 'thanh cong',
        data: data
     })
    })
}
exports.showType = async (req, res) => {
    Product.getAllCategory(function(data) {
     return res.status(200).json({
        massege: 'thanh cong',
        data: data
     })
    })
}
exports.insert = async (req, res) => {
        const {tenSP, giaSP, hinhSP, tsSP, idNhom} = req.body;
        await Product.insert(tenSP,giaSP,hinhSP,tsSP,idNhom)
        if(!tenSP||!giaSP||!hinhSP||!tsSP||!idNhom) {
            return res.status(200).json({
                massege: 'that bai',
             })
        }
        else {
            return res.status(200).json({
                massege: 'thanh cong',
             })
        }

}
exports.deleteproduct = async (req, res) => {
    const id = req.params.idsp
    if(!id){
        return res.status(200).json({
            massege: 'that bai',
         })
    }
    await Product.deletesp(id)
    return res.status(200).json({
        massege: 'Thanh Cong',
     })
}
exports.updatesp = async (req, res) => {
    const {tenSP,giaSP,hinhSP,tsSP,idNhom,id} = req.body
    await Product.updatesp(tenSP,giaSP,hinhSP,tsSP,idNhom,id)
        return res.status(200).json({
            massege: 'thanh cong',
         })
    }
exports.showlistctgr = function (req, res) {
    Product.getAllCategory(function(data) {
        const count = data.filter(item => typeof item === 'object').length;
        var trang = count / 5;
        var page = req.params.page;
        var from = (page - 1) * 5;
        var to = from + 4;
        var datapage = [];
        for (let i = from; i <= to; i++) {
            if (!data[i]) {
                break
            }
            datapage.push(data[i])
        }
            res.render('categories', {datapage,trang,from,to,layout: 'admin'})
    })
}
exports.deletectgr = async (req, res) => {
    const id = req.params.idctgr
    await Product.deletectgr(id)
    return res.status(200).json({
        massege: 'thanh cong',
     })
}
exports.insertctgr = async (req, res) => {
    const {tenNhom} = req.body;
    await Product.insertctgr(tenNhom)
    return res.status(200).json({
        massege: 'thanh cong',
     })
}