function string_operations(str)
{
    let strlower=str.toLowerCase();
    console.log("String converted to lowerCase: ", strlower);
    let strupper=str.toUpperCase();
    console.log("String converted to UpperCase: ", strupper);
    let char1=str.charAt(2);
    console.log("character at given index is: ", char1);

    let str2=" Good Morning";
    let mrg= str.concat(str2);
    console.log("After concat: ", mrg);
}
string_operations("Hello World");