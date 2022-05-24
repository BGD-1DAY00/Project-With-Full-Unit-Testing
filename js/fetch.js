import { fetchData } from "../globals/global.js";

//Sends out the FETCH CALL; Sends to Display Data
const retriveIp = async () => {
  try {
    let res = await fetData([
      "http://ip.jsontest.com/",
      "http://headers.jsontest.com/",
      "http://date.jsontest.com",
    ]);
    return disData(res);
  } catch (error) {
    return "retriveIP: FAILED; js/fetch.js";
  }
};
//pass in wrong number of args

const fetData = async (arr) => {
  try {
    if(typeof arr !== 'object'){
        throw new Error()
    }
    const res = await fetchData(arr);
    const allData = {
      ip: res[0],
      http: res[1],
      dateAndTime: res[2],
    };
    //console.log(allData)
    return allData;
  } catch (error) {
    return "fetData: FAILED; js/fetch.js";
  }
};

//Displays Data
const disData = (data) => {

  const { ip, http, dateAndTime } = data;
  const {
    Accept,
    "Accept-Language": AcceptLanuage,
    Host,
    Origin,
    Referer,
    "User-Agent": userAgent,
    "X-Cloud-Trace-Context": xCloudTrace,
    traceparent
  } = http;
  const { date } = dateAndTime;
  const temp = `<div>
  <h1>IP</h1>
  <h4>${ip.ip}</h4>
  <h1>Headers</h1>
  <h4>${Accept}</h4>
  <h4>${AcceptLanuage}</h4>
  <h4>${Host}</h4>
  <h4>${Origin}</h4>
  <h4>${Referer}</h4>
  <h4>${xCloudTrace}</h4>
  <h4>${traceparent}</h4>
  <h4>${userAgent}</h4>
  <h1>Time</h1>
  <h4>${date}</h4>
  </div>`;
  return {temp};
};



const displayMain = async () => {
  const {temp}= await retriveIp();
  return display.innerHTML = temp
};
async function tempTimeDisplay(timeDisplay){
  const res = await fetchData(["http://date.jsontest.com"])
  const tempTime = `
  <h4>${res[0].time}</h4>
  `
  timeDisplay.innerHTML = tempTime
}


export{fetData, retriveIp, disData, displayMain, tempTimeDisplay}