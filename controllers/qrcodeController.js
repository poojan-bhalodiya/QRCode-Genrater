const QRCode = require("qrcode");

async function generateQRCode(req, res) {
  try {
    const url = req.body.url || "https://example.com";

    // Generate QR code directly in the response
    const qrCode = await QRCode.toBuffer(url,{
        color: {
          dark: '#000000',  // black
          light: '#CCCCCC'  // gray
        },
        width: 15,
        errorCorrectionLevel: 'H',
        margin: 2,
     
      });

    // Set the response header to indicate that the content is an image (PNG)
    res.header("Content-Type", "image/png");

    // Send the QR code image as a response
    res.send(qrCode);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  generateQRCode,
};
