const express = require('express');
const bodyParser = require('body-parser');
const qrcodeController = require('../controllers/qrcodeController');

const router = express.Router();

// Use body-parser middleware to parse form data
router.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
router.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname + '/../' });
});

// Handle form submissions and generate QR code
router.post('/generate-qrcode', qrcodeController.generateQRCode);

module.exports = router;
