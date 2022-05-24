import { validateJson } from "../js/validateJson.js";
import { testUndefinedNull } from "../globals/global.js";
import { respondToUserDisplay, validateJsonCall } from "../js/validateJson.js";



//FIRST TEST
const testValidateJSON = async () => {
  //Arrange
  const e = {
    preventDefault: () => {},
  };
  const form = {
    jsonValid: {
      value: "{kj:li}",
    },
  };
  const formFail = {
    jsonValid: {
      value: "sfd",
    },
  };

  const respondToUser = {
    div: ` "someDiv"`,
  };

  //ACT
  const passResult = await validateJson(e, form, respondToUser);
  const passExpected = `<div>Validation: true</div>`;

  const failResult = await validateJson(e, formFail, respondToUser);
  const failExpected = `string`;

  //ASSERT
  passResult === passExpected
    ? typeof failResult === failExpected
      ? testUndefinedNull(passResult)
        ? testUndefinedNull(passExpected)
          ? testUndefinedNull(failResult)
            ? console.log("testJSON: PASSED")
            : console.log("testJSON: FAILED")
          : console.log("testJSON: FAIL")
        : console.log("testJSON: FAIL")
      : console.log("testJSON: FAIL")
    : console.log("testJSON: FAIL");
};


//SECOND TEST
const testValidateJsonCall = async() => {
  const form = {
    jsonValid: {
      value: "{kj:li}",
    },
  };
  const formb = {
    jsonValid: {
      value: "{kj:li",
    },
  };
  const respondToUser = {
    div: ``,
  };
  const SuccExpected = '<div>Validation: true</div>'
  const stringResultExpected = 'string'
  const failResultExpected = 'ValidationJsonCall: FAIL'
  const succResult = await validateJsonCall(form, respondToUser)
  const stringResult = await validateJsonCall(formb, respondToUser)
  const failResult = await validateJsonCall(null, respondToUser)

  succResult === SuccExpected
    ? typeof stringResult === stringResultExpected
      ? failResult === failResultExpected
        ? testUndefinedNull(stringResult)
          ? testUndefinedNull(succResult)
            ? console.log("testJSON: PASSED")
            : console.log("testJSON: FAILED")
          : console.log("testJSON: FAIL")
        : console.log("testJSON: FAIL")
      : console.log("testJSON: FAIL")
    : console.log("testJSON: FAIL");

}

// Third Test
const testRespondToUserDisplay = async () => {
  //ARRANGE
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
  const result = await respondToUserDisplay(data, true, respondToUser);
  const failResult = await respondToUserDisplay(data, false, respondToUser);


  //ASSERT

  result === passExpected
    ? failResult === failExpected
      ? console.log("testRespondToUserDisplay: PASSED")
      : console.log("testRespondToUserDisplay: FAIL")
    : console.log("testRespondToUserDisplay: FAIL");
};

export { testValidateJSON, testRespondToUserDisplay,testValidateJsonCall};
