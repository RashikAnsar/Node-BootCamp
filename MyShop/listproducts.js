var faker = require('faker');

console.log("===========================");
console.log("List Of Products");
console.log("===========================");
for(i=0;i<10;i++){
      var randomPro = faker.commerce.product();
      var randomPri = faker.commerce.price();
      console.log(randomPro+ " - " + randomPri);      
}
