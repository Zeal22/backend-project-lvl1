const randomGenerator = (min, max) => {
  const randomNum = Math.floor(Math.random() * (max - min) + min);
  return randomNum;
};

export default randomGenerator;
