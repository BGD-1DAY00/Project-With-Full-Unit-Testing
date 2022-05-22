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
    throw new Error("retriveIP: FAILED; js/fetch.js");
  }
};
//pass in wrong number of args

const fetData = async (arr) => {
  try {
    const res = await fetchData(arr);
    const allData = {
      ip: res[0],
      http: res[1],
      dateAndTime: res[2],
    };
    return allData;
  } catch (error) {
    throw new Error("fetData: FAILED; js/fetch.js");
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
    traceparent,
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
  <h1>Time</h1>
  <h4>${date}</h4>
  </div>`;
  return temp;
};

export const displayMain = async () => {
  display.innerHTML = await retriveIp();
};

export{fetData, retriveIp, disData}