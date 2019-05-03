import axios from "axios";

export default {

<<<<<<< HEAD:client/src/utils/API.js
  // getBooks:  function(q) {
  //    return axios.get("https://tannin-api.herokuapp.com/api/wine", { params: { q: "title:" + q } });
  //  },
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
=======
  getMaster: function(q) {
    return axios.get("https://tannin-api.herokuapp.com/api/wine");
>>>>>>> ea94e12b71daba018aa2c5f6b76437b81c7d173b:src/utils/API.js
  },
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
