import { validateJson } from "../js/validateJson.js";
import { testUndefinedNull } from "../globals/global.js";
import { respondToUserDisplay } from "../js/validateJson.js";


const testJSON = async () => {
  //Arrange
  const e = {
    preventDefault: () => {},
  };
  const form = {
    jsonValid: {
      value: "{kj:li}",
    },
  };
  const respondToUser = {
    doc: "someDiv",
  };

  //ACT
  const result = await validateJson(e, form, respondToUser);

  //ASSERT
  const expected = await validateJson(e, form, respondToUser);

  result === expected
    ? testUndefinedNull(result)
      ? testUndefinedNull(expected)
        ? console.log("testJSON: PASSED")
        : console.log("testJSON: FAILED")
      : console.log("testJSON: FAIL")
    : console.log("testJSON: FAIL");
};



const testRespondToUserDisplay = async () => {

  //ARRANGE
  let validate = true;
  const data = {
    error: "someString",
    error_info: "someString",
    object_or_array: "someString",
  };
  const respondToUser = {
    innerHTML: ``,
  };
  const passExpected = `<div>Validation: true</div>`;
  const failExpected = `<div>
  <h3>someString</h3>
  <h3>someString</h3>
  <h3>It requires an: someString</h3>
  </div>`;

  //ACT
  const result = await respondToUserDisplay(data, validate, respondToUser);

  //ASSERT
  if(validate){
    result === passExpected
      ? console.log("testRespondToUserDisplay: PASSED")
      : console.log("testRespondToUserDisplay: FAIL")
  }else{
    result === failExpected
      ? console.log("PASSED")
      : console.log("FAIL")
  }

};

export{testJSON, testRespondToUserDisplay}
