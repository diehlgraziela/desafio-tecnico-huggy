export const getDateTime = (dateTime: string) => {
  const dayjs = useDayjs();

  const input = dayjs(dateTime);
  const today = dayjs();

  if (input.isSame(today, "day")) {
    return input.format("HH:mm");
  }

  return input.format("DD/MM - HH:mm");
};

export const sliceString = (string: string, limit: number = 20) => {
  if (!string) return "";

  return string.length > limit ? `${string.slice(0, limit)}...` : string;
};
