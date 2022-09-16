const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
// Question 1
const newarray1 = itemsObject.map(({ quantity, price }) => {
  return { quantity: quantity * 2, price: price * 2 };
});
console.log(newarray1);
// Question 2
const newarray2 = itemsObject.filter(({ quantity, price }) => {
  return quantity > 2 && price > 300;
});
console.log(newarray2);
// Question 3
const newarray3 = itemsObject.reduce((accumulator, current) => {
  return accumulator + current.quantity * current.price;
}, 0);
console.log(newarray3);

// Question 4
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";
function question4(string) {
  let formattedstring = string
    .toLowerCase()
    .trim()
    .split(/-|\s\s+/g)
    .join(" ");
  return formattedstring;
}
console.log(question4(string));

// Question 5
const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const merge = (arg1, arg2) => {
  let output = [...arg1, ...arg2];
  output.sort((a, b) => a.uuid - b.uuid);

  output.forEach((cur, ind) => {
    if (ind < output.length - 1) {
      cur.uuid === output[ind + 1].uuid
        ? (Object.assign(cur, output[ind + 1]), output.splice(ind + 1, 1))
        : null;
    }
    cur.hasOwnProperty("role") ? null : (cur.role = "null");
    cur.hasOwnProperty("name") ? null : (cur.name = "null");
  });
  return console.log(output);
};
merge(first, second);
