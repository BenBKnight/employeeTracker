import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  // getAll: function () {
  //   return axios.get("https://randomuser.me/api/?results=200&nat=us");
  // },
  getPicture: function () {
    axios.get("https://randomuser.me/api/?results=200&nat=us")
      .then(res => {
        return axios.get(res.data.results[0].picture.large)
      })

  },
  getAll: function () {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
