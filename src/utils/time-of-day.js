const DAY_TIME = 12;
const EVENING_TIME = 18;
const NIGHT_TIME = 22;

export const getTimeOfDay = () => {
  const currentDate = new Date();
  const currentTime = currentDate.getHours();

  if (currentTime >= NIGHT_TIME) {
    return 'nightGreetingMessage';
  }

  if (currentTime >= EVENING_TIME) {
    return 'eveningGreetingMessage';
  }

  if (currentTime >= DAY_TIME) {
    return 'afternoonGreetingMessage';
  }

  return 'morningGreetingMessage';
};
