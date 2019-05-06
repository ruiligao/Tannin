import axios from "axios";

export default {

  getMaster: function(q) {
    return axios.get("https://tannin-api.herokuapp.com/api/wine");
  },

  // getWineId: function(id) {
  //   return axios.get("https://tannin-api.herokuapp.com/api/wine/" + id);
  // },

  // getBooks: function(q) {
  //   return axios.get("/api/wine", { params: { q: "titlename:" + q } });
  // },

  getSavedWine: function() {
    return axios.post("https://tannin-api.herokuapp.com/api/restaurant");
  },

  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },

  // addWine: function(wineData) {
  //   return axios.post("/api/wine", wineData);
  // }

// DMS ---- hit route restaurant
addWine: function(wineData) {
  return axios.post("https://tannin-api.herokuapp.com/api/restaurant", wineData);
}

// something: function(wineData) {
//   return axios.post("https://tannin-api.herokuapp.com/api/addwine", wineData);
// }


};  

//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };
