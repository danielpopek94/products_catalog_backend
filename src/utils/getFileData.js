const fs = require('fs').promises;

const getFileData = async (url) => {
  try {
    const data = await fs.readFile(url, 'utf8');
    const phones = JSON.parse(data);
    return phones;
  } catch (err) {
    console.error('Error, cannot find data:', err);
    throw new Error('Internal server error');
  }
};

module.exports = getFileData;
