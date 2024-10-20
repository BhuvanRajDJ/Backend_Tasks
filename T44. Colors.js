var colors = ["red", "green", "blue"];
console.log(colors[0]);

colors[1] = "yellow";
console.log(colors);

colors.push("black");
console.log(colors);

console.log("for loop");
let i = 0;
for (i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

i = 0;
console.log(" ");
console.log("while loop");

while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

console.log("");
console.log("for... of loop");

for (i of colors) {
  console.log(i);
}

console.log(typeof colors);
console.log(colors.length);

colors.push("white");
console.log(colors);

colors.pop();
console.log(colors);

console.log(colors.indexOf("blue"));

colors.owner = "Bhuvan Raj DJ";
console.log(colors);

for (i in colors) {
  console.log(colors[i]);
}
