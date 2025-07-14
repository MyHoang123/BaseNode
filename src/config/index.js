
const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "10.10.14.174",
    user: "userspitc",
    password: "Spitc@123",
    database: "sp-itc",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error("❌ Lỗi kết nối MySQL:", err.message);
    } else {
        console.log("✅ Kết nối MySQL thành công!");
        connection.release(); // Trả lại connection vào pool
    }
});

module.exports = pool;
