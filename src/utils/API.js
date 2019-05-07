import axios from "axios";

export default {
//----------------------------------
  // getMaster: function(q) {
  //   return axios.get("https://tannin-api.herokuapp.com/api/wine");
  // },
  

  // getSavedWine: function() {
  //   return axios.get("https://tannin-api.herokuapp.com/api/restaurant");
  // },

  // addWine: function(wineData) {
  //   return axios.put("https://tannin-api.herokuapp.com/api/addwine", wineData);
  // },

  // deleteWine: function(id) {
  //   return axios.delete("https://tannin-api.herokuapp.com/api/restaurant" + id);
  // },

//------------------------------------------------------
signUpSubmit: function (userInfo) {
  console.log(userInfo);
  return axios.post("/api/user/signup", userInfo);
},
logIn: function (loginInfor) {
  console.log(loginInfor);
  return axios.post("/api/user/login", loginInfor);
},
logOut: function () {
  // console.log(userInfo);
  return axios.post("/api/user/logout");
},
getUser: function () {
  return axios.get('/api/user/getUser');
},
  getMaster: function(q) {
    return axios.get("http://localhost:3001/api/wine/");
  },

  getSavedWine: function() {
    return axios.get("http://localhost:3001/api/getwine/");
  },

  addWine: function(wineData) {
    console.log(wineData);
    return axios.put("http://localhost:3001/api/addwine/", wineData);
  },
 
  deleteWine: function(id) {
    console.log(id);
    return axios.delete("http://localhost:3001/api/restaurant/" + id);
  },

  // getWineId: function(id) {
  //   return axios.get("https://tannin-api.herokuapp.com/api/wine/" + id);
  // },

  // getBooks: function(q) {
  //   return axios.get("/api/wine", { params: { q: "titlename:" + q } });
  // },





};  


