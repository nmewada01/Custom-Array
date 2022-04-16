function myArray() {
  Object.defineProperty(this, "length", {
    value: 0,
    writable: true,
    enumerable: false, //dont count this property
  });

  this.length = arguments.length;

  for (let i = 0; i < this.length; i++) {
    this[i] = arguments[i];
  }
}

let a2 = new myArray("x", "y", "z");

myArray.prototype.आखिरी_छापदे = function () {
  let i = this.length - 1;
  console.log(this[i]);
};

myArray.prototype.लंबाई_छापदे = function () {
  let i = this.length;
  console.log(i);
};

//console.log("a2:",Object.values(a2));

myArray.prototype.सीधों_छापदे = function (value) {
  var झोलो = "";
  for (let i = 0; i < this.length; i++) {
    झोलो = झोलो + this[i] + " ";
  }
  console.log(झोलो);
};

myArray.prototype.उलटो_छापदे = function () {
  var झोलो = "";
  for (let i = this.length - 1; i >= 0; i--) {
    झोलो = झोलो + this[i] + " ";
  }
  console.log(झोलो);
};

myArray.prototype.अंदर_जा = function (value) {
  let index = this.length;
  this[index] = value;
  this.length++;
};

myArray.prototype.हटजा = function () {
  let index = this.length - 1;

  delete this[index];

  this.length--;
};

var a1 = new myArray(
  "नरेश",
  "विनोद",
  "विशाल",
  "रोहित",
  "रानू",
  "जतिन",
  "सफल",
  "रोहन"
);


a1.अंदर_जा("साक्षी");
a1.अंदर_जा("मायरा");
a1.हटजा();
a1.सीधों_छापदे();
a1.उलटो_छापदे();
a1.आखिरी_छापदे();
a1.लंबाई_छापदे();

console.log(a1);
