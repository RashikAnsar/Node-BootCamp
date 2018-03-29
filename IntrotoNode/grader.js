function average(arr){
      var total =0;
      arr.forEach(function(a){
            total += a;
      });
      var avg = total/arr.length
      console.log(Math.round(avg));
}

var a = [3,4,5,6,7];

average(a);