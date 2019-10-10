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

module.exports.vacation = async (event) => {
  console.log(event);
  const now = moment().tz("Europe/Berlin").format();
  let isVacation = false;
  let vacationName = 'None';

  const vacations = await axios.get('https://ferien-api.de/api/v1/holidays/'+STATE+'/'+moment().year());

  for(let i in vacations.data){
    if(moment(now).isBetween(vacations.data[i].start, vacations.data[i].end)){
      isVacation = true;
      vacationName = vacations.data[i].name,
      console.log(" F E R I E N ");
      console.log(vacationName);
    }
  }

  return {

      message: isVacation,
      vacation: vacationName
  };
};
