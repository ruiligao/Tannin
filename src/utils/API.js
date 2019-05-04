import axios from "axios";

export default {
  signUpSubmit: function(userInfo) {
    console.log(userInfo);
    return axios.post("/api/user/signup", userInfo);
  },
  logIn: function(userInfo) {
    console.log(userInfo);
    return axios.post("/api/user/login", userInfo);
  },
  logOut: function() {
    // console.log(userInfo);
    return axios.post("/api/user/logout");
  },
  // getUser: function() { 
  //   return axios.get('/api/user/getUser');
  // },
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
