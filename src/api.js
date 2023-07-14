// import axios from 'axios';

import Flickr  from 'flickr-sdk';

const FLICKR_API_KEY = '5bdcb7557153c52a5368226259bf50c6';
const flickr = new Flickr(FLICKR_API_KEY);

const getList = async (query) => {
  const { body } = await flickr.photos.search({text: query});
  return body;
};

export {getList};



// const baseUrl = 'https://www.flickr.com/services/rest';
// const apiKey = '5bdcb7557153c52a5368226259bf50c6'
// const getList = async (term) => {
//   const response = await axios.get(`${baseUrl}/?method=flickr.photos.search&api_key=${apiKey}&text=${term}`);

//   console.log('This', response)

//   return response.data.results;
// }

// export {getList};