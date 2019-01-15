var yourName = prompt('What is your name?');
var yourNameLength = yourName.length;
var slicedName1 = yourName.slice(0,1);
var slicedName2 = yourName.slice(1,yNameLength);
var upperCaseSlice = slicedName1.toUpperCase();
var addEverything = upperCaseSlice + slicedName2;
alert(addEverything);
