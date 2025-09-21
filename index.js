const moment = require("moment");

const birthDate = "2005-03-10";
const today = moment();


const dob = moment(birthDate, "YYYY-MM-DD");


const years = today.diff(dob, "years");
const months = today.diff(dob.clone().add(years, "years"), "months");
const days = today.diff(dob.clone().add(years, "years").add(months, "months"), "days");


console.log(`Your age is ${years} years, ${months} months, and ${days} days.`);
