// Time Zones
const TIME_ZONES = {
  ["America/New_York"]: "(EST)",
};


// Wait for DOM to load, then run callback function
document.addEventListener('DOMContentLoaded', () => {

  // get all html elements by class name time-zone 
  let timeZones = document.getElementsByClassName("time-zone");
  // timeZones = HTMLCollection(3) [span.time-zone, span.time-zone, span.time-zone]

  // get all html elements by class name time
  let times = document.getElementsByClassName("time");
  // times = HTMLCollection(2) [span.time, span.time]

  // get timezone of current user
  // let offset = new Date().getTimezoneOffset();                               // not supported on all browsers
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;              // works w/ 95% browsers (2019)
  // ex. timeZone = "America/New_York"
  
  // convert EST time zone to timezone of user

  // loop through all timeZones, and times, and replace innerHTML with 
  // corresponding times/timezones of user

});