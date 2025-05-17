export const getDateTime = (dateTime: string) => {
  const dayjs = useDayjs();

  const input = dayjs(dateTime);
  const today = dayjs();

  if (input.isSame(today, "day")) {
    return input.format("HH:mm");
  }

  return input.format("DD/MM - HH:mm");
};
