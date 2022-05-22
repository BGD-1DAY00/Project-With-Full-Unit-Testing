import { fetchData, testUndefinedNull } from "./global.js";

async function testFetchData() {
  //ARRANGE
  const url = "https://jsonplaceholder.typicode.com/comments";
  const expected = "Eliseo@gardner.biz";

  //ACT
  const result = await fetchData(url);
  const testedResult = result[0].email;

  //ASSERT
  testedResult === expected
    ? testUndefinedNull(testedResult)
      ? console.log("testFetchData: PASSED")
      : console.log("testFetchData: FAILED")
    : console.log("testFetchData: FAILED");
}

function unitTestUndefinedNull() {
  //ARRANGE
  const passVal = "pass";
  const failVal = "";

  //ACT
  const passResult = testUndefinedNull(passVal);
  const failResult = testUndefinedNull(failVal);

  //ASSERT
  passResult === passVal
    ? failResult == false
      ? console.log("unitTestUndefinedNull: PASSED")
      : console.log("unitTestUndefinedNull: FAILED")
    : console.log("unitTestUndefinedNull: FAILED");
}

export { testFetchData, unitTestUndefinedNull };
