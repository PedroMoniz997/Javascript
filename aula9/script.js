const convertInt = (e) => parseInt(e);
let arry = ["1", "2", "3", "4", "5", "6"].map(convertInt);
for (let v of arry) {
  console.log(v + " = " + typeof(v));
}

/*const el = document.getElementsByTagName("div");
const valores = Array.prototype.map.call(el,({innerHTML}) => innerHTML);*/

// let elements = document.getElementsByTagName("div");
// elements = [...elements];
// elements.map((el, ind) => {
//   el.innerHTML = "Moniz-Developer";
// });