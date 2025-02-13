export const nameOfMonth = [
  'január',
  'február',
  'március',
  'április',
  'május',
  'június',
  'július',
  'augusztus',
  'szeptember',
  'október',
  'november',
  'december',
];
export const createPostDate = (date) => {
  const dateString = date.split('.');
  return `${dateString[0]}. ${nameOfMonth[parseInt(dateString[1])]}. ${dateString[2]}`;
};

export const createExamDate = (date) => {
  let nextExamDay = date.split('/');
  let month = nameOfMonth[parseInt(nextExamDay[0] - 1)];
  nextExamDay = { year: nextExamDay[2], month: month, day: nextExamDay[1] };

  return nextExamDay;
};

export const getExamDays = (currentYear) => {
  const examDays = [];
  const currentDate = new Date();

  const currentDay = currentDate.getDay();
  let examDay = currentDate;

  if (currentDay !== 1) {
    let firstMonday = 8 - currentDay;
    examDay = new Date(currentDate.setDate(currentDate.getDate() + firstMonday));
  }

  while (examDay.getFullYear() === currentYear) {
    examDays.push({
      year: examDay.getFullYear(),
      month: examDay.getMonth(),
      day: examDay.getDate(),
    });
    examDay = new Date(currentDate.setDate(currentDate.getDate() + 7));
  }

  return examDays;
};
