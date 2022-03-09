// import axios from "axios";
import { User } from "./models/User";

const user = new User({ name: "new record", age: 99 });
// const user = new User({ name: "myname", age: 666 });

// user.set({ name: "newname" });
// console.log(user.get("name"));
// console.log(user.get("age"));

// user.set({ name: "One more name", age: 400 });
// user.save();

// Testing approach using get as an accessor
user.on("change", () => {
  console.log("User was changed");
});
// user.trigger("change");
user.set({ name: "New name", age: 40 });

// Testing Eventing class
// user.events.on("change", () => {
//   console.log("change");
// });
// user.events.trigger("change");

// Testing axios
// axios.post("http://localhost:3000/users", {
//   name: "myname",
//   age: 20,
// });
// axios.get("http://localhost:3000/users/1");

// Testing events phase 1
// user.on("change", () => {
//   console.log("Change #1");
// });
// user.on("click", () => {
//   console.log("Click was triggered");
// });
// user.on("change", () => {
//   console.log("Change #2");
// });

// user.trigger("click");

// Testing getget
console.log(user.get("name"));
// How to fix it -> making get in Attributes an arrow function

// Reminder on how 'this' works in JS

// const colors = {
//   color: 'red',
//   printColor(){
//     console.log(this.color)
//   }
// }
// this === what is to the left of printColor()
// colors.printColor()
// if
// const printColor = colors.printColor;
// printColor() will be undefined
