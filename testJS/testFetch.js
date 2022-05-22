import { retriveIp, fetData, disData, displayMain } from "../js/fetch.js";
import { testUndefinedNull } from "../globals/global.js";

const testRetriveIp = async () => {

  //Arrange
  const expected = `<div>
  <h1>IP</h1>
  <h4>75.72.138.118</h4>
  <h1>Headers</h1>
  <h4>*/*</h4>
  <h4>en-US,en;q=0.9</h4>
  <h4>headers.jsontest.com</h4>
  <h4>http://127.0.0.1:5503</h4>
  <h4>http://127.0.0.1:5503/</h4>
  <h1>Time</h1>
  <h4>05-22-2022</h4>
  </div>`;

  //Act
  const j = {}
  const result = await retriveIp();
  j.result = result

  //Assert
  expected === j.result 
      ? typeof(j.result) !== undefined
         ? console.log(
             `testRetriveIp: PASSED: expected === result`
           )
         : console.log(`testRetriveIp: FAILED`)
       : console.log(`testRetriveIp: FAILED`);
};

const testFetData = async () => {

  //Arrange
  const array = [
    "http://ip.jsontest.com/",
    "http://headers.jsontest.com/",
    "http://date.jsontest.com",
  ];

  const returnedObj = {
    ip: "object",
    http: "object",
    dateAndTime: "object",
  };
  const {
    ip: expectedip,
    http: expectedhttp,
    dateAndTime: expectedDateAndTime,
  } = returnedObj;

  //Act
  const result = await fetData(array);
  const { ip, http, dateAndTime } = result;

  //Assert

  //Terneray Operator
  typeof ip === testUndefinedNull(expectedip)
    ? typeof http === testUndefinedNull(expectedhttp)
      ? typeof dateAndTime === testUndefinedNull(expectedDateAndTime)
        ? console.log("testFetData: PASSED")
        : console.log("testFetData: FAIL}")
      : console.log("testFetData: FAIL")
    : console.log("testFetData: FAIL");
};



const testDisData = () => {
  //Arrange
  const objData = {
    ip:{ip:42342},
    http: {Accept: '*/*', AcceptLanuage: 'en-US,en;q=0.9', Host: 'headers.jsontest.com', Origin: 'http://127.0.0.1:5503', Referer : 'http://127.0.0.1:5503/'},
    dateAndTime: {date: '05-21-2022'}
  };

  const expected = `<div>
  <h1>IP</h1>
  <h4>42342</h4>
  <h1>Headers</h1>
  <h4>*/*</h4>
  <h4>undefined</h4>
  <h4>headers.jsontest.com</h4>
  <h4>http://127.0.0.1:5503</h4>
  <h4>http://127.0.0.1:5503/</h4>
  <h1>Time</h1>
  <h4>05-21-2022</h4>
  </div>`;

  //ACT
  const result = disData(objData);

  //ASSERT

  result === expected
    ? testUndefinedNull(result) === result
      ? console.log("testDisData: PASSED")
      : console.log("testDisData: FAIL")
    : console.log("testDisData: FAIL");

};



const testDisplayMain = async() => {

  //ARRANGE
  const prom = async () => {
    return await "promise";
  };

  //ACT
  const result = displayMain();

  //ASSERT
  const expected = prom();

  typeof expected === typeof result
    ? console.log("testDisplayMain: PASSED")
    : console.log("testDisplayMain: FAILED");
};


export{ testRetriveIp, testFetData, testDisData, testDisplayMain}