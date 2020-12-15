export const formatTime = (time) => {
  if (time === undefined || typeof time !== 'number' || time < 0) {
    return null;
  } else {
    const seconds = String(Math.floor(time % 60)).padStart(2, '0');
    const minutes = String(Math.floor((time/60) % 60)).padStart(2, '0');
    const hours = String(Math.floor(time/3600)).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
};