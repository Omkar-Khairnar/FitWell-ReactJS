// import multer from 'multer'
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./uploads/userProfiles/`)
    },
    filename: function (req, file, cb) {
    // const fileName = `../../../../../backend/uploads/userProfiles/${Date.now()}-${file.originalname}`
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  })

 module.exports  = multer({ storage: storage })