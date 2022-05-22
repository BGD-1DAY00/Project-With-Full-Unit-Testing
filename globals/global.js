const fetchData = async(url)=>{
    try {
        if(typeof(url) === 'string'){
            const res = await fetch(url)
            const jsonResponse = await res.json()
            return jsonResponse
        }
    } catch (error) {
        return 'fetchData: FAILED'
    }

    //only with arrays
    try {
        if(typeof(url) === 'object'){
            const arr = []
            for(let i = 0; i<url.length; i++){
                const res = await fetch(url[i])
                const jsonResponse = await res.json()
                arr.push(jsonResponse)
            }
            return arr
        }
    } catch (error) {
        return 'fetchData: FAILED'
    }

}

function testUndefinedNull(val){
    if(val !==undefined && val!==null){
      return val
    }else{
      return false
    }
  }

export {testUndefinedNull, fetchData}