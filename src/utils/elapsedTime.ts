const elapsedTime = (input: Date | string) => {
  const date = input instanceof Date ? input : new Date(input);
  const now = new Date();

  return now.getTime() - date.getTime();
};

export default elapsedTime;
