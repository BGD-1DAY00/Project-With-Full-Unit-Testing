import { fetchData } from "../globals/global.js";

// TEST JSON and DISPLAY INFORMATION
async function validateJson(e, form, respondToUser) {
    e.preventDefault();
    const inp = form.jsonValid.value;
    try {
      const jsonReturned = await fetchData(`http://validate.jsontest.com/?json=${inp}`)
      const {validate} = jsonReturned
      return respondToUserDisplay(jsonReturned,validate, respondToUser);
    } catch (error) {
        return 'ValidateJSON: ERROR'
    }
  }

async function respondToUserDisplay(data, validate, respondToUser) {
    // console.log(validate)
    // console.log(data)
   
    if (validate) {
      return respondToUser.innerHTML = `<div>Validation: ${validate}</div>`;
    } else {
      const {
        error,
        error_info: errorInfo,
        object_or_array: ObjectOrArray,
      } = data;
      return respondToUser.innerHTML = `
          <div>
          <h3>${error}</h3>
          <h3>${errorInfo}</h3>
          <h3>It requires an: ${ObjectOrArray}</h3>
          </div>`;
    }
  }

export{validateJson, respondToUserDisplay}