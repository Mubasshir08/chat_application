const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');  // Import cloudinary config

// Configure Multer storage to upload directly to Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'chat_app_uploads',  // Folder name in Cloudinary
    format: async (req, file) => {
      // Optional: You can detect the file format dynamically or leave it to Cloudinary to handle
      const fileExtension = file.mimetype.split('/')[1];  // Get the extension from the mime type
      return fileExtension === 'jpeg' ? 'jpg' : fileExtension;  // Convert 'jpeg' to 'jpg'
    },
    public_id: (req, file) => uuidv4(),  // Generate a unique filename using UUID
  }
});

// Create the multer upload instance
const upload = multer({ storage });

module.exports = upload;
