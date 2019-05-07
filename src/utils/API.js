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
  //   return axios.put("https://tannin-api.herokuapp.com/api/restaurant", wineData);
  // },

  // deleteWine: function(id) {
  //   return axios.delete("https://tannin-api.herokuapp.com/api/restaurant" + id);
  // },

//------------------------------------------------------

  getMaster: function(q) {
    return axios.get("http://localhost:3001/api/wine/");
  },

  getSavedWine: function() {
    return axios.get("http://localhost:3001/api/restaurant/");
  },

  addWine: function(wineData) {
    return axios.put("http://localhost:3001/api/restaurant/", wineData);
  },

  // getWineId: function(id) {
  //   return axios.get("https://tannin-api.herokuapp.com/api/wine/" + id);
  // },

  // getBooks: function(q) {
  //   return axios.get("/api/wine", { params: { q: "titlename:" + q } });
  // },





};  


