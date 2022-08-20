// 1no: problem------

function radianToDegree(radian) {
  const perRadian = 57.2958;
  let total = radian * perRadian;
  let totalDegree = total.toFixed(2);
  if (typeof radian !== "number") {
    //(typeof radian === 'string') এইটা দিয়ে করলে ‍অন্য primitive value দেখাতনা.
    totalDegree = "Jhankar Mahbub Sir Please Type Number";
  }
  return totalDegree;
}
let radian = 2;
let degree = radianToDegree(radian);
console.log(degree);

// 2no: problem-------



function isJavaScriptFile(file) {
  if (typeof file === "number") {
    let output = "Please Upload JS File";
    return output;
  }
  let fileChecker = file.endsWith(".js"); //checking js file
  if (fileChecker === true) {
    return fileChecker;
  }
  let fileChecker2 = file.split(".").pop();
  if (fileChecker2 !== "js") {
    return false;
  }
}
let file = "app.js";
let fileIs = isJavaScriptFile(file);
console.log(fileIs);

// 3no: problem-------


function oilPrice(dieselquantity, petrolQuantity, octaneQuantity) {
  const diesel = 114;
  const petrol = 130;
  const octane = 135;
  let dieselTaka = diesel * dieselquantity; //output diesel cost
  let petrolTaka = petrol * petrolQuantity; //output petrol cost
  let octaneTaka = octane * octaneQuantity; //output octane cost
  let total = dieselTaka + petrolTaka + octaneTaka; //total oil
  let stringChecker = dieselquantity + petrolQuantity + octaneQuantity;
  if (typeof stringChecker !== "number") {
    total = "Warning! Only Oil Quantity Support";
  }
  return total;
}
let dieselquantity = 1;
let petrolQuantity = 1;
let octaneQuantity = 0;
let totalCost = oilPrice(dieselquantity, petrolQuantity, octaneQuantity);
console.log(totalCost);


// 4no: problem-------


function publicBusFare(students) {
  const busSpace = 50;
  const microBusSpace = 11;
  const publicBusTicket = 250;
  let bus = 0;
  let microBus = 0;
  if (busSpace <= students) {
    for (let i = 50; i <= students; i = i + 50) {
      if (i > bus) {
        bus = bus + 50;
      }
    }
  }
  if (microBusSpace < busSpace) {
    let microBusAndBus = students - bus;
    let reserved = microBusAndBus;
    for (let i = 11; i <= reserved; i = i + 11) {
      if (i > microBus) {
        microBus = microBus + 11;
      }
    }
  }
  if (true) {
    let microBusAndBus = microBus + bus;
    let remainingStudents = students - microBusAndBus;
    let totalPublicBusFare = remainingStudents * publicBusTicket;
    if (typeof students !== "number") {
      totalPublicBusFare = "Please type amount of students";
    }
    return totalPublicBusFare;
  }
}
let totalStudents = 554;
let publicBusCost = publicBusFare(totalStudents);
console.log(publicBusCost);


// 5no: problem-------


function isBestFriend(she, he) {
  if (
    typeof she.name !== "string" ||
    typeof she.boyFriend !== "string" ||
    typeof he.name !== "string" ||
    typeof he.girlFriend !== "string"
  ) {
    //check input string or number
    let output = "Please Type Couple Name...";
    return output;
  } else if (she.name === he.girlFriend && she.boyFriend === he.name) {
    return true;
  } else {
    return false;
  }
}
let she = { name: "afsana", boyFriend: "arif" };
let he = { name: "arif", girlFriend: "afsana" };
let girlFriendBoyFriend = isBestFriend(she, he);
console.log(girlFriendBoyFriend);
