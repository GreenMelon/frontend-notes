var a = [0, 6, 7, 1, 3, 5];
var min = [];
var max = [];

//
    for(var i = 0; i<a.length; i++ ) {
        if(a[i]<5) {
            min.push(a[i]);
        }
        else{
            max.push(a[i]);
        }
    }
console.log(min, max);
