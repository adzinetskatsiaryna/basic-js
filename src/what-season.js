import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason( date ) { 
  if (!date) {
    return "Unable to determine the time of year!";
  }
  try {
    date.toLocaleTimeString();
  } catch (e) {
    throw new Error("Invalid date!");
  }
  let monath = date.getMonth();
  if(monath === 0 || monath === 1 || monath === 11){
    return 'winter';
  }else if(monath > 1 && monath < 5){
    return 'spring';
  }else if(monath > 4 && monath < 8){
    return 'summer';
  }else if(monath >7 && monath <11) {
    return 'autumn';
  }  
}
