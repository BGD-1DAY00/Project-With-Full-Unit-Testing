import { retriveIp, fetData, disData, displayMain, tempTimeDisplay } from "../js/fetch.js";
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
`;

  //Act
  const { temp } = await retriveIp();
  const tempSubstring = temp.substring(0, 131);

  //Assert
  tempSubstring === expected.substring(0, 131)
    ? typeof tempSubstring === "string"
      ? console.log(`testRetriveIp: PASSED`)
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
    ipE: "object",
    httpE: "object",
    dateAndTimeE: "object",
  };

  const {
    ipE: expectedip,
    httpE: expectedhttp,
    dateAndTimeE: expectedDateAndTime,
  } = returnedObj;
  const expectedFail = "fetData: FAILED; js/fetch.js";

  //Act
  const failResult = await fetData("");
  const result = await fetData(array);
  const { ip, http, dateAndTime } = result;

  //Assert

  typeof ip === testUndefinedNull(expectedip)
    ? typeof http === testUndefinedNull(expectedhttp)
      ? typeof dateAndTime === testUndefinedNull(expectedDateAndTime)
        ? failResult === expectedFail
          ? console.log("testFetData: PASSED")
          : console.log("testFetData: FAIL}")
       
        : console.log("testFetData: FAIL")
      : console.log("testFetData: FAIL")
    : console.log("testFetData: FAIL");
};
//last one
const testDisData = () => {
  //Arrange
  const objData = {
    ip: { ip: 42342 },
    http: {
      Accept: "*/*",
      AcceptLanuage: "en-US,en;q=0.9",
      Host: "headers.jsontest.com",
      Origin: "http://127.0.0.1:5503",
      Referer: "http://127.0.0.1:5503/",
    },
    dateAndTime: { date: "05-21-2022" },
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
  <h4>bf0d7eae5b29c53b26e3200413f11d86/4834061255350600970</h4>
  <h4>00-bf0d7eae5b29c53b26e3200413f11d86-431609198ba6c50a-00</h4>
  <h4>Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36</h4>
  <h1>Time</h1>
  <h4>05-24-2022</h4>
  </div>`;

  //ACT
  let result = disData(objData);

  //ASSERT

  result.temp.substring(0,100) === expected.substring(0,100) 
    ? testUndefinedNull(result) === result
      ? console.log("testDisData: PASSED")
      : console.log("testDisData: FAIL")
    : console.log("testDisData: FAIL");
};

const testDisplayMain = async () => {
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

export { testRetriveIp, testFetData, testDisData, testDisplayMain };
