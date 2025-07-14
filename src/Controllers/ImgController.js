const path = require('path');
exports.ImgageNews = async (req, res) => {
    try {
        const News = req.params.news
        if (News !== 'null') {
            return res.sendFile(path.join(__dirname, '..', 'public', 'img', 'news', `${News}`));
        }
    } catch (error) {
        res.status(500).json({ message: "Error Image File", error });
    }
}
exports.ImageService = async (req, res) => {
    try {
        const Service = req.params.service
        if (Service !== 'null') {
            return res.sendFile(path.join(__dirname, '..', 'public', 'img', 'service', `${Service}`));
        }
    } catch (error) {
        res.status(500).json({ message: "Error Image File", error });
    }
}
exports.SlideHeader = async (req, res) => {
    try {
        const Slide = req.params.slide
        if (Slide !== 'null') {
            return res.sendFile(path.join(__dirname, '..', 'public', 'img', 'slide', `${Slide}`));
        }
    } catch (error) {
        res.status(500).json({ message: "Error Image File", error });
    }
}
exports.Partner = async (req, res) => {
    try {
        const Img = req.params.img
        if (Img !== 'null') {
            return res.sendFile(path.join(__dirname, '..', 'public', 'img', 'partner', `${Img}`));
        }
    } catch (error) {
        res.status(500).json({ message: "Error Image File", error });
    }
}
exports.Countrie = async (req, res) => {
    try {
        const Img = req.params.img
        if (Img !== 'null') {
            return res.sendFile(path.join(__dirname, '..', 'public', 'img', 'countrie', `${Img}`));
        }
    } catch (error) {
        res.status(500).json({ message: "Error Image File", error });
    }
}
exports.getCVCadidate = async (req, res) => {
    try {
        const Resumes = req.params.resumes
        if (Resumes !== 'null') {
            return res.sendFile(path.join(__dirname, '..', 'public', 'CadidateResumes', `${Resumes}`));
        }
    } catch (error) {
        res.status(500).json({ message: "Error Image File", error });
    }
}
exports.Menu = async (req, res) => {
    try {
        const Img = req.params.img
        if (Img !== 'null') {
            return res.sendFile(path.join(__dirname, '..', 'public', 'img', 'menu', `${Img}`));
        }
    } catch (error) {
        res.status(500).json({ message: "Error Image File", error });
    }
}
exports.Prcing = async (req, res) => {
    try {
        const Img = req.params.img
        if (Img !== 'null') {
            return res.sendFile(path.join(__dirname, '..', 'public', 'img', 'pricing', `${Img}`));
        }
    } catch (error) {
        res.status(500).json({ message: "Error Image File", error });
    }
}
exports.PricingPDF = async (req, res) => {
    try {
        const Img = req.params.file
        if (Img !== 'null') {
            return res.sendFile(path.join(__dirname, '..', 'public', 'pricing', `${Img}`));
        }
    } catch (error) {
        res.status(500).json({ message: "Error Image File", error });
    }
}
exports.TestNews = async (req, res) => {
    try {
        const Img = req.params.file
        if (Img !== 'null') {
            return res.sendFile(path.join(__dirname, '..', 'public', 'pricing', `${Img}`));
        }
    } catch (error) {
        res.status(500).json({ message: "Error Image File", error });
    }
}