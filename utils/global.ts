export const getTime = (dateTime: string) => {
  const time = dateTime.split(" ")[1];
  const [hour, minute] = time.split(":");

  return `${hour}:${minute}`;
};
