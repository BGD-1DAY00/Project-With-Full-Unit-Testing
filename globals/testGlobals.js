import { fetchData, testUndefinedNull } from "./global.js";

async function testFetchData() {

  //---->TEST ONE TESTING CALL FUNCTIONALITY 

    //ARRANGE
  const url = "https://jsonplaceholder.typicode.com/comments";
  const expectedResponseOne = "Eliseo@gardner.biz";

  //ACT
  const result = await fetch([url]);
  const resultJson = await result.json()
  const resultJsonEmail = resultJson[0].email;

    //ASSERT
  resultJsonEmail === expectedResponseOne
    ? testUndefinedNull(resultJsonEmail)
      ? console.log("testFetchData: PASSED")
      : console.log("testFetchData: FAILED")
    : console.log("testFetchData: FAILED");


  //---->TEST TWO->TESTING FETCH 

    //ARRANGE
      const succUrl = ['https://jsonplaceholder.typicode.com/comments']
      const testUrl = ['https://test.com/']//NotREAL
      const arr = []
      for(let i = 0; i<testUrl.length; i++){
        const jsonReturned = ()=>{
          const as = async()=>{
            const asTwo = async()=>{
              return await [{name: 'id labore ex et quam laborum'}]
            }
            return await asTwo()
          }
          return  as()
        }
        arr.push(await jsonReturned())
    }

    //ACT

    const expected = arr[0][0].name
    const [[name]] = await fetchData(succUrl)
    const resultTest = name.name

    //ASSERT
    expected !== resultTest? console.log('testFetchData: FAIL'): null


  //---->TEST THREE TESTING FAIL CASE

   //ARRANGE
    const failUrl = ''
    const arrTestTwo = []
    for(let i = 0; i<failUrl.length; i++){
      const jsonReturned = ()=>{
        const as = async()=>{
          const asTwo = async()=>{
            return await [{name: 'id labore ex et quam laborum'}]
          }
          return await asTwo()
        }
        return  as()
      }
      arrTestTwo.push(await jsonReturned())
    }
    //ACT
    const resFail = await fetchData(failUrl)
    const expFail = 'fetchData: FAILED'

    //ASSERT
    resFail !== expFail? console.log('testFetchData: FAIL'): null


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


const testFetchDataPartTwo = async()=>{
//MORE EDGE CASES
  //ARRANGE
  const failStringUrl = ['http://kalsjflkaj.com/']
  const passObjectUrl = [
      "http://ip.jsontest.com/",
      "http://headers.jsontest.com/",
      "http://date.jsontest.com",
    ]
  const failObjectUrl = ['aljsdafljsf', 'ajsdflkja;l']


  //ACT
  const failStringUrlExpected = 'fetchData: FAILED'
  const failStringUrlResult = await fetchData(failStringUrl)


  const passObjectUrlExpected = [{ip: '75.72.138.118'},{Accept: "*/*"},{date: 'someDate'}] 
  const passObjectUrlResult = await fetchData(passObjectUrl)

  const failObjectUrlExpected = 'fetchData: FAILED'
  const failObjectUrlResult = await fetchData(failObjectUrl)


  //ASSERT
  failStringUrlResult !== failStringUrlExpected ? console.log('testFetchDataPartTwo: Fail'): null

  passObjectUrlExpected.ip !== passObjectUrlResult.ip ? passObjectUrlExpected.Accept !== passObjectUrlResult.Accept ?  console.log('testFetchDataPartTwo: Fail'): console.log('testFetchDataPartTwo: Fail'): null

  failObjectUrlExpected !== failObjectUrlResult ? console.log('testFetchDataPartTwo: Fail'): null
} 

export { testFetchData, unitTestUndefinedNull, testFetchDataPartTwo };
