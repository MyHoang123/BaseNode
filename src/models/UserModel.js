const mysql = require("../config/index")
const getUser = (page,result) => {
    mysql.query(`SELECT u.Id, u.Username, u.FullName, u.Email, u.ClientIP, u.LogDate, g.Name AS UserGroup FROM user u INNER JOIN usergroup g ON u.UserGroup = g.Id AND g.IsActive = 1 WHERE u.IsActive = 1 ORDER BY u.Id DESC LIMIT 8 OFFSET ${page}`,function(err,data){
        if(err || data.length <= 0) {
            result (null)
        }
        else {
            mysql.query("SELECT COUNT(*) AS Lenght FROM `sp-itc`.user WHERE IsActive = 1;",function(err,data1){
                if(err || data.length <= 0) {
                    result (null)
                }
                else {
                    result ({
                        data: data,
                        Lenght: data1[0].Lenght
                    })
                }
            })
        }
    })
}
const getUserGroup = (page,result) => {
    mysql.query(`SELECT Id, Name, Description FROM usergroup WHERE IsActive = 1 ORDER BY Id DESC LIMIT 8 OFFSET ${page};`,function(err,data){
        if(err || data.length <= 0) {
            result (null)
        }
        else {
            mysql.query("SELECT COUNT(*) AS Lenght FROM `sp-itc`.usergroup WHERE IsActive = 1;",function(err,data1){
                if(err || data.length <= 0) {
                    result (null)
                }
                else {
                    result ({
                        data: data,
                        Lenght: data1[0].Lenght
                    })
                }
            })
        }
    })
}
const getPass = (Id,result) => {
    mysql.query('SELECT Pass FROM user WHERE Id = ?',[Id],function(err,data){
        if(err || data.length <= 0) {
            result (null)
        }
        else {
            result (data[0])
        }
    })
}
const updatePassword = (Id,Pass,result) => {
    mysql.query('UPDATE user SET Pass = ? WHERE Id = ?;',[Pass,Id],function(err,data){
        if(err || data.length <= 0) {
            result (null)
        }
        else {
            result (data.changedRows)
        }
    })
}
const updateUserGroup = (Id,Name,Description,IsView,IsAddNew,IsModify,IsDelete,result) => {
    mysql.query('UPDATE usergroup SET Name = ?, Description = ?, IsView = ?, IsAddNew = ?, IsModify = ?, IsDelete = ? WHERE Id = ?;',[Name,Description,IsView,IsAddNew,IsModify,IsDelete,Id],function(err,data){
        if(err || data.length <= 0) {
            result (null)
        }
        else {
            result (data.changedRows)
        }
    })
}
const createUserGroup = (Name,Description,User,Date,result) => {
    mysql.query('INSERT INTO usergroup (Name, Description, CreatedUserId, CreatedDateTime, LastModifiedUserId, LastModifiedDateTime, IsActive) VALUE (?,?,?,?,?,?,?);',[Name,Description,User,Date,User,Date,1],function(err,data){
        if(err || data.length <= 0) {
            result (null)
        }
        else {
            result (data.insertId)
        }
    })
}
const LoginUser = async (UserName, result) => {
    mysql.query(`SELECT u.Id, u.FullName, u.Pass FROM user u INNER JOIN usergroup ug ON ug.Id = u.UserGroup WHERE Username=? AND u.IsActive = 1 AND ug.IsActive = 1`, [UserName], function (err, data) {
        if(err || data.length <= 0) {
            result (null)
        }
        else {
            result (data[0])
        }
    })
}
const getInfoUser = async (Id, result) => {
    mysql.query("SELECT us.FullName, ac.IsView, ac.IdAccess FROM `sp-itc`.user us LEFT JOIN access ac ON ac.IdGroup = us.UserGroup AND ac.IsView = 1 WHERE us.Id = ?;", [Id], function (err, data) {
        if(err || data.length <= 0) {
            result (null)
        }
        else {
            result ([data[0],data])
        }
    })
}
const deleteUserGroup = async (Id, result) => {
    mysql.query("UPDATE usergroup SET IsActive = 0 WHERE Id = ? AND Id != 1", [Id], function (err, data) {
        if(err || data.length <= 0) {
            result (null)
        }
        else {
            result (data.changedRows)
        }
    })
}
const deleteUser = async (Id, result) => {
    mysql.query("UPDATE user SET IsActive = 0 WHERE Id = ? AND Id != 1", [Id], function (err, data) {
        if(err || data.length <= 0) {
            result (null)
        }
        else {
            result (data.changedRows)
        }
    })
}
const getUserGroupSelect = (result) => {
    mysql.query('SELECT Id, Name FROM `sp-itc`.usergroup WHERE IsActive = 1;',function(err,data){
        if(err || data.length <= 0) {
            result (null)
        }
        else {
            result (data)
        }
    })
}
const createUser = (UserName,FullName,Pass,UserGroup,User,Date,result) => {
    mysql.query('INSERT INTO user (Username, FullName, Pass, UserGroup, CreatedDateTime, CreatedUserId, LastModifiedDateTime, LastModifiedUserId, IsActive) VALUE (?,?,?,?,?,?,?,?,?);',[UserName,FullName,Pass,UserGroup,Date,User,Date,User,1],function(err,data){
        if(err || data.length <= 0) {
            result (null)
        }
        else {
            result (data.insertId)
        }
    })
}
const checkAccessView = (IdAccess,Id,result) => {
    mysql.query('SELECT ac.IsView FROM `sp-itc`.access ac INNER JOIN user us ON us.UserGroup = ac.IdGroup WHERE ac.IdAccess = ? AND us.Id = ?;',[IdAccess,Id],function(err,data){
        if(err || data.length <= 0) {
            result (null)
        }
        else {
            result (data[0].IsView)
        }
    })
}
const checkAccessAddNew = (IdAccess,Id,result) => {
    mysql.query('SELECT ac.IsAddNew FROM `sp-itc`.access ac INNER JOIN user us ON us.UserGroup = ac.IdGroup WHERE ac.IdAccess = ? AND us.Id = ?;',[IdAccess,Id],function(err,data){
        if(err || data.length <= 0) {
            result (null)
        }
        else {
            result (data[0].IsAddNew)
        }
    })
}
const checkAccessModify = (IdAccess,Id,result) => {
    mysql.query('SELECT ac.IsModify FROM `sp-itc`.access ac INNER JOIN user us ON us.UserGroup = ac.IdGroup WHERE ac.IdAccess = ? AND us.Id = ?;',[IdAccess,Id],function(err,data){
        if(err || data.length <= 0) {
            result (null)
        }
        else {
            result (data[0].IsModify)
        }
    })
}
const checkAccessDelete = (IdAccess,Id,result) => {
    mysql.query('SELECT ac.IsDelete FROM `sp-itc`.access ac INNER JOIN user us ON us.UserGroup = ac.IdGroup WHERE ac.IdAccess = ? AND us.Id = ?;',[IdAccess,Id],function(err,data){
        if(err || data.length <= 0) {
            result (null)
        }
        else {
            result (data[0].IsDelete)
        }
    })
}
const CreateRefeshToken = async (IdUSer, Token) => {
    mysql.query(`UPDATE user SET RefeshToken = ? WHERE Id = ?`, [Token,IdUSer])
}
const checkResfeshToken = (Token,result) => {
    mysql.query(`SELECT Username FROM user WHERE ReFeshToken LIKE '%${Token}%';`,function(err,data){
        if(err || data.length <= 0) {
            result (null)
        }
        else {
            result (data)
        }
    })
}
const getAccess = (Id,result) => {
    mysql.query('SELECT IdAccess AS Id, Access, IsView, IsAddNew, IsModify, IsDelete FROM `sp-itc`.access WHERE IdGroup = ?;',[Id],function(err,data){
        if(err || data.length <= 0) {
            result (null)
        }
        else {
            result (data)
        }
    })
}
const updateAccess = (Id, IsView, IsAddNew, IsModify, IsDelete, IdGroup ,result) => {
    mysql.query('UPDATE access SET IsView = ?, IsAddNew = ?, IsModify = ?, IsDelete = ? WHERE IdAccess = ? AND IdGroup = ?;',[IsView,IsAddNew,IsModify,IsDelete,Id,IdGroup],function(err,data){
        if(err || data.length <= 0) {
            result (null)
        }
        else {
            result (data.changedRows)
        }
    })
}
const createAccess = (Id ,result) => {
    mysql.query("INSERT INTO access VALUES (?,1,'Quản lý người dùng',0,0,0,0),(?,2,'Quản lý menu trang web',0,0,0,0),(?,3,'Quản lý tuyển dụng',0,0,0,0);",[Id,Id,Id],function(err,data){
        if(err || data.length <= 0) {
            result (null)
        }
        else {
            result (data.insertId)
        }
    })
}
module.exports = {getPass, updatePassword, deleteUser, checkAccessDelete, checkAccessModify, createAccess, updateAccess, getAccess, checkResfeshToken, CreateRefeshToken, checkAccessAddNew, checkAccessView, createUser, getUserGroupSelect, deleteUserGroup, createUserGroup, updateUserGroup, getInfoUser, getUserGroup, getUser, LoginUser}