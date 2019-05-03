import axios from "axios";

export default {

  getMaster: function(q) {
    return axios.get("https://tannin-api.herokuapp.com/api/wine");
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
