/* Classes In Ecma Script */

// A class in terms of OOP is a blueprint for creating objects. A class encapsulates data for the object.

// Declaring a Class =>
class Class_name {
}

// Class Expressions =>
var var_name = new Class_name()

// Constructors − Responsible for allocating memory for the objects of the class.

// Functions − Functions represent actions an object can take. They are also at times referred to as methods.

var Polygon = class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

class Shape {
    constructor(a) {
        this.Area = a
    }
}
class Circle extends Shape {
    disp() {
        console.log("Area of the circle:  " + this.Area)
    }
}
var obj = new Circle(223);
obj.disp() 


// Class Inheritance and Method Overriding =>

class PrinterClass { 
    doPrint() { 
       console.log("doPrint() from Parent called… ");
    }
 }
 class StringPrinter extends PrinterClass { 
    doPrint() { 
       console.log("doPrint() is printing a string…"); 
    } 
 } 
 var obj = new StringPrinter(); 
 obj.doPrint();

// The Super Keyword =>

class PrinterClass { 
    doPrint() {
       console.log("doPrint() from Parent called…") 
    } 
 }  
 class StringPrinter extends PrinterClass { 
    doPrint() { 
       super.doPrint() 
       console.log("doPrint() is printing a string…") 
    } 
 } 
 var obj = new StringPrinter() 
 obj.doPrint()