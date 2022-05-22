import { validateMD5, respondToUserTwo } from "../js/validateMD5.js";
import { testUndefinedNull } from "../globals/global.js";

async function testMD5() {
  //ARRANGE
  const e = {
    preventDefault: () => {},
  };
  const formTwo = {
    mdFive: {
      value: "someString",
    },
  };
  const secondResponseToUser = {
    innerHTML: ``,
  };
  const expected = `<div>
    <h2>56d960277abbc1a3e19f6c9250726307</h2>
    <h2>someString</h2>
    </div>`;

  //ACT
  const result = await validateMD5(e, formTwo, secondResponseToUser);

  //ASSERT
  result === expected
    ? testUndefinedNull(expected)
      ? console.log("testMD5: PASSED")
      : console.log("testMD5: FAILED")
    : console.log("testMD5: FAILED");
}

function testRespondToUserTwo(){

    //ARRANGE
    const md5 = 'hello'
    const original = 'world'
    const sec = {
        innerHTML:``
    }
    const expected = `<div>
    <h2>hello</h2>
    <h2>world</h2>
    </div>`

    //ACT
    const result =  respondToUserTwo(md5, original, sec)
    
    //ASSERT
    result === expected
    ? testUndefinedNull(expected)
      ? console.log("testMD5: PASSED")
      : console.log("testMD5: FAILED")
    : console.log("testMD5: FAILED");
}
export{testMD5, testRespondToUserTwo}

