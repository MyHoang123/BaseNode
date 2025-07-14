const User = require("../Models/UserModel")
var jwt = require('jsonwebtoken');
const { getDate } = require('./getDate')
require("dotenv").config()
const bcrypt = require("bcrypt");
exports.getUser = (req, res) => {
    try {
        const { page } = req.query
        const newPage = (page - 1) * 8
        User.getUser(newPage, (user) => {
            if (user !== null) {
                return res.status(200).json({
                    massege: 'Thanh cong',
                    data: user
                })
            }
        })

    } catch (error) {
        console.log("🚀 ~ error:", error)
    }
}
exports.getUserGroup = (req, res) => {
    try {
        const { page } = req.query
        const newPage = (page - 1) * 8
        User.getUserGroup(newPage, (user) => {
            if (user !== null) {
                return res.status(200).json({
                    massege: 'Thanh cong',
                    data: user
                })
            }
        })

    } catch (error) {
        console.log("🚀 ~ error:", error)
    }
}
exports.getAccess = (req, res) => {
    try {
        const { Id } = req.query
        User.getAccess(Id, (Access) => {
            if (Access !== null) {
                return res.status(200).json({
                    massege: 'Thanh cong',
                    data: Access
                })
            }
            else {
                return res.status(200).json({
                    massege: 'That bai',
                    data: []
                })
            }
        })

    } catch (error) {
        console.log("🚀 ~ error:", error)
    }
}
exports.getUserGroupSelect = (req, res) => {
    try {
        User.getUserGroupSelect((user) => {
            if (user !== null) {
                return res.status(200).json({
                    massege: 'Thanh cong',
                    data: user
                })
            }
        })

    } catch (error) {
        console.log("🚀 ~ error:", error)
    }
}
exports.Login = async (req, res) => {
    try {
        const { UserName, Pass } = req.body;
        User.LoginUser(UserName, async (user) => {
            if (user) {
                const match = await bcrypt.compare(Pass, user.Pass)
                if (match) {
                    let token = jwt.sign({ Id: user.Id }, process.env.ACCESS_JWT_SECRET, { expiresIn: 43200 });
                    let refeshToken = jwt.sign({ Id: user.Id }, process.env.REFESH_JWT_SECRET, { expiresIn: 259200 });
                    User.CreateRefeshToken(user.Id, refeshToken)
                    return res.status(200).json({
                        massege: 'Thanh cong',
                        token,
                        refeshToken,
                        FullName: user.FullName
                    })
                } else {
                    return res.status(200).json({
                        massege: 'That bai',
                    })
                }

            }
            else {
                return res.status(200).json({
                    massege: 'That bai',
                })
            }
        })

    } catch (error) {
        console.log("🚀 ~ exports.Login= ~ error:", error)
    }
}
exports.getInfoUser = async (req, res) => {
    try {
        const Id = req.Id
        User.getInfoUser(Id, (user) => {
            if (user !== null) {
                const resuilt = user[1].reduce((acc, curr) => {
                    acc.push(curr.IdAccess)
                    return acc
                }, [])
                return res.status(200).json({
                    massege: 'Thanh cong',
                    user: user[0],
                    Access: resuilt
                })
            }
            else {
                return res.status(200).json({
                    massege: 'That bai',
                    user: []
                })
            }
        })

    } catch (error) {
        console.log("🚀 ~ exports.getInfoUser= ~ error:", error)
    }
}

exports.UpdateUserGroup = (req, res) => {
    try {
        const { Id, Name, Description, IsView, IsModify, IsDelete, IsAddNew } = req.body
        User.updateUserGroup(Id, Name, Description, IsView, IsAddNew, IsModify, IsDelete, (data) => {
            if (data === 1) {
                return res.status(200).json({
                    massege: 'Thanh cong',
                })
            }
            else {
                return res.status(200).json({
                    massege: 'That bai',
                })
            }
        })

    } catch (error) {
        console.log("🚀 ~ error:", error)
    }
}

exports.updatePassword = (req, res) => {
    try {
        const { Pass, PassN } = req.body
        const Id = req.Id
        User.getPass(Id, async (pass) => {
            if (pass !== null) {
                const match = await bcrypt.compare(Pass, pass.Pass)
                if (match) {
                    const hash = await bcrypt.hash(PassN, 10);
                    User.updatePassword(Id, hash, (data) => {
                        if (data === 1) {
                            return res.status(200).json({
                                massege: 'Thanh cong',
                            })
                        }
                        else {
                            return res.status(200).json({
                                massege: 'That bai',
                            })
                        }
                    })
                } else {
                    return res.status(200).json({
                        massege: 'Pass Word Fail',
                    })
                }
            }
            else {
                return res.status(500).json({
                    massege: 'Error Sever',
                })
            }
        })


    } catch (error) {
        console.log("🚀 ~ error:", error)
    }
}

exports.createUserGroup = (req, res) => {
    try {
        const { Name, Description } = req.body
        const user = req.Id
        const Date = getDate()
        User.createUserGroup(Name, Description, user, Date, (Id) => {
            if (Id !== null) {
                User.createAccess(Id, (Access) => {
                    if (Access !== null) {
                        const data = {
                            Id,
                            Name,
                            Description,
                        }
                        return res.status(200).json({
                            massege: 'Thanh cong',
                            data
                        })
                    }
                    else {
                        return res.status(200).json({
                            massege: 'That bai',
                        })
                    }
                })
            }
            else {
                return res.status(200).json({
                    massege: 'That bai',
                })
            }
        })

    } catch (error) {
        console.log("🚀 ~ error:", error)
    }
}
exports.deleteUserGroup = (req, res) => {
    try {
        const { Id } = req.query
        User.deleteUserGroup(Id, (data) => {
            if (data === 1) {
                return res.status(200).json({
                    massege: 'Thanh cong',
                })
            }
            else {
                return res.status(200).json({
                    massege: 'That bai',
                })
            }
        })

    } catch (error) {
        console.log("🚀 ~ error:", error)
    }
}
exports.deleteUser = (req, res) => {
    try {
        const { Id } = req.query
        User.deleteUser(Id, (data) => {
            if (data === 1) {
                return res.status(200).json({
                    massege: 'Thanh cong',
                })
            }
            else {
                return res.status(200).json({
                    massege: 'That bai',
                })
            }
        })

    } catch (error) {
        console.log("🚀 ~ error:", error)
    }
}

exports.createUser = async (req, res) => {
    const { UserName, FullName, Pass, Group } = req.body
    const user = req.Id
    const Date = getDate()
    try {
        const hash = await bcrypt.hash(Pass, 10);
        User.createUser(UserName, FullName, hash, Group, user, Date, (Id) => {
            if (Id !== null) {
                const data = {
                    Id,
                    Username: UserName,
                    FullName,
                    Pass,
                    UserGroup: Group
                }
                return res.status(200).json({
                    massege: 'Thanh cong',
                    data
                })
            }
            else {
                return res.status(200).json({
                    massege: 'That bai',
                })
            }
        })
    } catch (error) {
        res.status(500).json({ message: "Error Sever", error });
    }

}
exports.RefeshToken = async (req, res) => {
    try {
        let token = undefined
        token = req.cookies.refeshToken
        if (token !== undefined) {
            User.checkResfeshToken(token, (Id) => {
                if (Id !== null) {
                    jwt.verify(token, process.env.REFESH_JWT_SECRET, (err, decoded) => {
                        if (err) {
                            return res.status(401).json({ message: 'Token không hợp lệ!' });
                        }
                        else {
                            let token = jwt.sign({ Id: decoded.Id }, process.env.ACCESS_JWT_SECRET, { expiresIn: '12h' })
                            let refeshToken = jwt.sign({ Id: decoded.Id }, process.env.REFESH_JWT_SECRET, { expiresIn: '3d' });
                            User.CreateRefeshToken(decoded.Id, refeshToken)
                            return res.status(200).json({
                                massege: 'Thanh cong',
                                token,
                                refeshToken
                            })
                        }
                    })
                }
            })
        }
    } catch (error) {
        console.log("🚀 ~ exports.RefeshToken= ~ error:", error)
    }
}

exports.UpdateAccess = (req, res) => {
    try {
        const { IdAccess, IsView, IsModify, IsDelete, IsAddNew, IdGroup } = req.body
        User.updateAccess(IdAccess, IsView, IsAddNew, IsModify, IsDelete, IdGroup, (data) => {
            if (data === 1) {
                return res.status(200).json({
                    massege: 'Thanh cong',
                })
            }
            else {
                return res.status(200).json({
                    massege: 'That bai',
                })
            }
        })
    } catch (error) {
        console.log("🚀 ~ error:", error)
    }
}
