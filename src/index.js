
require('dotenv').config()
const path = require('path');
const cors = require("cors");
const Route = require("./api/index.js"); 
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cors({
    origin: [
        "http://localhost:3000",
    ],
    credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
// Serve static files từ thư mục build
app.use(cookieParser());

Route(app)
// Với mọi route còn lại → trả về index.html (cho React Router)
app.use('/api/admin', express.static(path.join(__dirname, 'fe_admin')));
app.get('/api/admin/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'fe_admin', 'index.html'));
});


app.listen(process.env.PORT_SEVER, () => {
    console.log(`Example app listening on port ${process.env.PORT_SEVER}`)
})
