import axios from "axios";

const baseURL = "https://api.github.com";

function sortNames(array, key) {
  let sorted = array.sort(function (a, b) {
    let x = a[key];
    let y = b[key];

    return x < y ? -1 : x > y ? 1 : 0;
  });

  return sorted.splice(0,10);
}

// Handles GET Requests
export const fetchResource = async (resource) => {
  try {
    const response = await axios.get(`${baseURL}/${resource}`);
    await response.data;
    return sortNames(response.data, "id");
  } catch (err) {
    console.log(`Error: ${err.response.data.message}`);
    throw err;
  }
};
