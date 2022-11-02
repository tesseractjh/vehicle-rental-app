const DAY_NAME = ['일', '월', '화', '수', '목', '금', '토'];

const dateString = (input: Date | string) => {
  const dateObj = input instanceof Date ? input : new Date(input);
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const day = dateObj.getDay();

  return `${month}월 ${date}일 (${DAY_NAME[day]})`;
};

export default dateString;
