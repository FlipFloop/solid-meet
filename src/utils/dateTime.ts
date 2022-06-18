export const showTime = () => {
  return new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

export const showDate = () => {
  return new Date().toDateString();
}
