'use strict';
const AWS = require('aws-sdk');
const moment = require('moment-timezone');
const axios = require('axios');

const STATE = process.env.STATE;

async function writePin(pin,val) {
  try {
    const response = await axios.get('http://blynk-cloud.com/'+BLYNK+'/update/'+pin+'?value='+val);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function getVacation (url) {
  try {
    let res = await axios.get(url);
    console.log(res.data);
    let data = res.data;
    return data;
  }catch(error){
    console.log(error);
  }
}

module.exports.vacation = async (event) => {
  console.log(event);
  const now = moment().tz("Europe/Berlin").format();
  let isVacation = false;
  let isFree = false;
  let isWeekend = false;
  let vacationName = 'None';
  let url = 'https://ferien-api.de/api/v1/holidays/'+STATE+'/'+moment().year();
  const vacations = await getVacation(url);

  for(let i in vacations){
    if(moment(now).isBetween(vacations[i].start, vacations[i].end)){
      isVacation = true;
      vacationName = vacations[i].name;
    }
  }

  url = 'https://ipty.de/feiertag/api.php?do=isFeiertag&datum='+moment().format("DD-MM-YYYY")+'&loc='+STATE;

  if(moment().day() === 0 || moment().day() === 6){
    isWeekend = true;
  }
  const freeday = await getVacation(url);
  if(isVacation || freeday === 1 || isWeekend){
    isFree = true;
  }

  return {
      weekend: isWeekend,
      vacation: isVacation,
      freeday: freeday,
      isFree: isFree
  };
};
