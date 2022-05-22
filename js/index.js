const display = document.getElementById("display");
const displayTime = document.getElementById("time");
const Ipbtn = document.querySelector("#btn");
const form = document.querySelector("#formOne");
const reponseToUser = document.querySelector("#reponseToUser");

const formTwo = document.querySelector("#formTwo");
const secondResponseToUser = document.getElementById("reponseToUserAboutMDT5");
const btnForMdFive = document.getElementById("btnforMdFive");

// Importing functions
import { validateJson } from "./validateJson.js";
import { validateMD5 } from "./validateMD5.js";
import { displayMain} from "./fetch.js";
import { doDate } from "./doDate.js";

//TESTING IMPORTS
import {testRetriveIp, testFetData, testDisData, testDisplayMain} from "../testJS/testFetch.js"
import{testJSON, testRespondToUserDisplay} from '../testJS/testJSON.js'
import {testMD5, testRespondToUserTwo} from '../testJS/testMD5.js'
import {testFetchData, unitTestUndefinedNull} from '../globals/testGlobals.js'
import {testDoDate} from '../testJS/testDoDate.js'

//Starting Function
displayMain()



//Time Function 
setInterval(()=>{
  const date = doDate()
  displayTime.innerHTML = date
}, 1000);

//TESTING FUNCTION
function test(){
  testRetriveIp()
  testFetData()
  testDisData()
  testDisplayMain()
  testJSON()
  testRespondToUserDisplay()
  testMD5()
  testRespondToUserTwo()
  testFetchData()
  unitTestUndefinedNull()
  testDoDate()
}
test()

// Event Listeners
btn.addEventListener("click", (e) => {
  validateJson(e, form, reponseToUser);
});
btnForMdFive.addEventListener("click", (e) => {
  validateMD5(e, formTwo, secondResponseToUser)
});
