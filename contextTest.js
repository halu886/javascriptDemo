var x = 1;


var $this = global;
console.log(x);

var f = function (){
    
    console.log($this === this)
    console.log(this.x);
}
console.log();
f();

var ff = function(){
    this.x = 2;
    console.log(this.x);
}

ff();
x;

var o = {x:"o'sx",f:f}

o.f();