import { fetchData } from "../globals/global.js"
import { testUndefinedNull } from "../globals/global.js"

async function validateMD5(e, formTwo, secondResponseToUser){
    e.preventDefault()
    const val = formTwo.mdFive.value
    const res = await fetchData(`http://md5.jsontest.com/?text=${val}`)
    const {md5,original} = res
    return respondToUserTwo(md5, original, secondResponseToUser)
}
function respondToUserTwo(md5, original, sec){
    const temp = `<div>
    <h2>${md5}</h2>
    <h2>${original}</h2>
    </div>`
    return sec.innerHTML = temp
}

export{respondToUserTwo, validateMD5}