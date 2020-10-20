//  Function for rectangle
function area_perimeter_of_rectangle(height,width)
{
 let area,perimeter;
 area=height*width;
 perimeter=2*(width+height);

 console.log("Area of rectangle is: ",area," Perimeter of rectangle is: ",perimeter);
}

//function for circle
function circle_opps(rad)
{    const pi=3.14;
    let diameter, circumference,  area;
    
    diameter = 2*rad;
    circumference = 2*pi*rad;
    area = pi*rad*rad; 
   console.log("Diameter of circle is: ",diameter," Circumference of circle: ",circumference," Area of circle: ",area);
}
area_perimeter_of_rectangle(10,7);
circle_opps(10);