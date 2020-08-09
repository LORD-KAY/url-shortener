export const shortener = (size: number = 8) => {
  const combinations = "abcdefghijklmnopqrstuvwxyz0123456789";
  let shortUrl = "";
  for (let i = 0; i < size; i++) {
    shortUrl += combinations.charAt(
      Math.floor(Math.random() * combinations.length)
    );
  }
  return shortUrl;
};
