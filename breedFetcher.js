const request = require('request');
const breedName = process.argv[2];


const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    //console.log('statusCode:', response && response.statusCode);
    //console.log('body:', body);
    if (data.length === 0) {
      console.log(`Breed not found`);
    } else if (body) {
      callback(null, data[0].description.trim());
    }
  });
};

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details: ', error);
  } else {
    console.log(desc);
  }
});