var productData = {
  product: [],
  selected: "noSelection"
};

fetch("assets/productNameDictionary.json")
    .then(function(response){
      return response.json();
    }).then(function(json){
      productData.product = json.product;
    });

new Vue({
  el:"#app",
  data:productData
});
