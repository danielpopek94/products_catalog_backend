const express = require('express');
const router = express.Router();
require('dotenv').config();
const getFileData = require('../utils/getFileData')


router.get('/:productId?', async (req, res) => {
  try {
    const phones = await getFileData('public/assets/phones.json');
    const productId = req.params.productId;

    if (productId) {
      let phone;

      if (Number(productId) > 0) {
        phone = phones.find(item => item.id === productId);
      } else {
        phone = phones.find(item => item.phoneId === productId);
      }

      if (!phone) {
        return res.status(500).json({ error: 'Wrong id! Use number from 1 to 71' });
      }

      const selectedPhone = await getFileData(`public/assets/phones/${phone.phoneId}.json`);

      return res.json(selectedPhone);
    }

    res.json(phones);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
