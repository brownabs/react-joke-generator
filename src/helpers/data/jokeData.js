import Axios from 'axios';

const baseUrl = 'https://official-joke-api.appspot.com/random_joke';

const getJokes = () => new Promise((resolve, reject) => {
  Axios.get(`${baseUrl}`)
    .then((response) => {
      const jokes = response.data;
      resolve(jokes);
    }).catch((error) => reject(error));
});

export default { getJokes };
