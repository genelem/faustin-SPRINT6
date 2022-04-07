const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/nuevasImages'));
    },
    filename: (req, file, cb) => {
        console.log(file);
        const newFilename = 'nuevo-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});
/* ayuda memoria */
/*const upload = multer({ storage });*/
/*router.post('/', upload.single('group-image'), controller.store);*/