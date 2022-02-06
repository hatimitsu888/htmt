const url = document.URL;
const referrer = document.referrer;
var titleElement = document.getElementById("title");
var textElement = document.getElementById("text");
const title = titleElement.textContent;
const text = textElement.textContent;
document.write("<title>"+title+"</title>");
document.write("<meta name='twitter:title' content='"+title+"'>");
document.write("<meta name='twitter:image' content='"+referrer+"samune.png'>");
document.write("<meta name='twitter:description' content='"+text.substring(0,60)+"...'>");
document.write("<meta name='description' content='"+text.substring(0,60)+"...'>");

console.log("<title>"+title+"</title>");
console.log("<meta name='twitter:title' content='"+title+"'>");
console.log("<meta name='twitter:image' content='"+referrer+"samune.png'>");
console.log("<meta name='twitter:description' content='"+text.substring(0,60)+"...'>");
console.log("<meta name='description' content='"+text.substring(0,60)+"...'>");
