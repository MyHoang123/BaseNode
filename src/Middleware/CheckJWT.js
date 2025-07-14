require('dotenv').config()
let jwt = require('jsonwebtoken');

exports.checkTokenAdmin = (req, res, next) => {
  let token = undefined
  token = req.cookies.SPITC_ADMIN
  // Lấy token từ tiêu đề Authorization
    if (!token) {
      return res.status(403).json({ message: 'Không có token!' });
    }
    // Xác minh token
    jwt.verify(token, process.env.ACCESS_JWT_SECRET, (err, decoded) => {
      if (err) {
        if(err.name === 'TokenExpiredError') {
          return res.status(401).json({ message: 'jwt expired' });
        }
        return res.status(401).json({ message: 'Token không hợp lệ!' });
      }
      req.Id = decoded.Id
      // Lưu thông tin người dùng vào req.user
      next();
    });
  }
