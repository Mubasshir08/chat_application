const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

// Configure Multer storage to upload directly to Cloudinary
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'chat_app_uploads',  // Folder name in Cloudinary
        format: async (req, file) => 'png', // Convert all images to PNG
        public_id: (req, file) => uuidv4() // Unique filename
    }
});

const upload = multer({ storage });

module.exports = upload;
