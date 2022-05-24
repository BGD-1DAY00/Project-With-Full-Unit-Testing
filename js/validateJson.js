import { fetchData } from "../globals/global.js";

// TEST JSON and DISPLAY INFORMATION
async function validateJson(e, form, respondToUser) {
    e.preventDefault();
    return validateJsonCall(form, respondToUser)
  }

async function validateJsonCall(form,respondToUser){
  try {
    const inp = form.jsonValid.value
    const jsonReturned = await fetchData([`http://validate.jsontest.com/?json=${inp}`])
    return respondToUserDisplay(jsonReturned[0], jsonReturned[0].validate, respondToUser)
  } catch (error) {
    return 'ValidationJsonCall: FAIL'
  }
}

async function respondToUserDisplay(data, validate, respondToUser) {
    if (validate) {
      return respondToUser.innerHTML = `<div>Validation: ${validate}</div>`;
    } else {
      return respondToUser.innerHTML = `<div>
          <h3>${data.error}</h3>
          <h3>${data.error_info}</h3>
          <h3>It requires an: ${data['object_or_array']}</h3>
          </div>`;
    }
  }

export{validateJson, respondToUserDisplay, validateJsonCall}