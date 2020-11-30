import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0/",
});

export const hackerNewsAPI = {
  async getItemById(id) {
      const item = await instance.get(`item/${id}.json`);
      return item.data;
  },
  async getNewItemsIds(num) {
      const itemsIds = await instance.get(
        `newstories.json?orderBy=%22$key%22&limitToFirst=${num}`
      );
      return itemsIds;
  },
};
