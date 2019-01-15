
var characterCount = prompt('Write your tweet here:');
// slices the user input so only the first 280 characters are stored in the characterCountSplice variable 
var characterCountSplice = characterCount.slice(0,280);
// calculates how many characters the user has left.
var charactersLeft = 280 - characterCount.length;
// gives the user back the the first 280 characters of their tweet and tells them how many characters they have used and how many they have left
alert(characterCountSplice + ' You have written '+ characterCount.length + ' characters. You have ' + charactersLeft + ' characters left');
