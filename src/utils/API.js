import axios from "axios";

export default {

  getMaster: function(q) {
    return axios.get("http://localhost:3001/api/wine/");
  },

  // getWineId: function(id) {
  //   return axios.get("https://tannin-api.herokuapp.com/api/wine/" + id);
  // },

  // getBooks: function(q) {
  //   return axios.get("/api/wine", { params: { q: "titlename:" + q } });
  // },

  getSavedWine: function() {
    return axios.post("http://localhost:3001/api/restaurant");
  },

  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },

  // addWine: function(wineData) {
  //   return axios.post("/api/wine", wineData);
  // }

// DMS ---- hit route restaurant
addWine: function(wineData) {
  return axios.post("http://localhost:3001/api/restaurant/api/restaurant", wineData);
}

};  

//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };
