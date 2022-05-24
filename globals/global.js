const fetchData = async(url)=>{
    //only with arrays
    try {   
        const arr = []
        for(let i = 0; i<url.length; i++){
            const res = await fetch(url[i])
            const jsonResponse = await res.json()
            arr.push(jsonResponse)
        }
        if(arr.length<=0 || typeof url !== 'object'){
          throw new Error('afsjkd')
        }
        return arr

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