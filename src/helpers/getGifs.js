export const getGifs = async (category) => {
  const offset = Math.floor(Math.random() * 100) + 1;
  const url = `https://api.giphy.com/v1/gifs/search?offset=${offset}&q=${encodeURI(
    category
  )}&limit=10&api_key=j7YTK2glWvNU6xjliyrwuMdiuWZhkAfD`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized.url,
    };
  });

  return gifs;
};
