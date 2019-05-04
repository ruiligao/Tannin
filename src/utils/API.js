import axios from "axios";

export default {

  getMaster: function(q) {
    return axios.get("https://tannin-api.herokuapp.com/api/wine");
  },

  // getBooks: function(q) {
  //   return axios.get("/api/wine", { params: { q: "titlename:" + q } });
  // },

  // getSavedBooks: function() {
  //   return axios.get("/api/books");
  // },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },

  addWine: function(wineData) {
    return axios.post("/api/wine", wineData);
  }
};  

//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
// };
