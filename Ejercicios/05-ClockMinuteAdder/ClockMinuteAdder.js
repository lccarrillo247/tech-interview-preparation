function clockMinuteAdder (time, minutesToAdd) {
  // Your code here:

  let abc = time.split(":")
  let newMinutes = Number(abc[1]) + Number(minutesToAdd)

if (newMinutes < 60) {
  let newHour = abc[0] + ':' + newMinutes
  console.log(newHour)
  return newHour
} else {

  let finalMinutes = newMinutes % 60
  addHours = Math.floor(newMinutes / 60)

  if (finalMinutes < 10) finalMinutes = '0' + finalMinutes

  let newHours = Number(abc[0]) + addHours

  if (newHours > 12) {
    newHours = newHours - 12
    if (newHours < 10) newHours = '0' + newHours
    let newHour = newHours + ':' + finalMinutes
    console.log(newHour)
return newHour;

  } else {
    let newHour = newHours + ':' + finalMinutes
    console.log(newHour)
    return newHour;
  }
}
}

function clockMinuteAdderChatGPT(time, minutesToAdd) {
  const [hours, minutes] = time.split(":").map(Number);

  let totalMinutes = hours * 60 + minutes + minutesToAdd;
  totalMinutes = (totalMinutes + 1440) % 1440; // Ensure totalMinutes is in the range 0-1439 (24 hours)

  const newHours = Math.floor(totalMinutes / 60);
  const newMinutes = totalMinutes % 60;

  const formattedHours = (newHours % 12 || 12).toString().padStart(2, "0");
  const formattedMinutes = newMinutes.toString().padStart(2, "0");

  const newTime = `${formattedHours}:${formattedMinutes}`;
  console.log(newTime);
  return newTime;
}

module.exports = clockMinuteAdder

clockMinuteAdder('09:12', '30')
clockMinuteAdder('10:53', '15')
clockMinuteAdder('12:32', '50')