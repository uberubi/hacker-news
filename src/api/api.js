import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0/",
});

export const hackerNewsAPI = {
  async getItemById(id) {
    const item = await instance.get(`item/${id}.json?print=pretty`);

    return item.data;
  },
  async getLatestItemsById(num) {
    const itemsIds = await instance.get(
      `newstories.json?print=pretty&orderBy=%22$key%22&limitToFirst=${num}`
    );
    const items = await Promise.all(
      itemsIds.data.map((id) => this.getItemById(id))
    );
    return items;
  },
  async getItemCommentsById(id) {
    const comment = await this.getItemById(id);
    if (comment.kids) {
      let kids = await Promise.all(
        comment.kids.map((_id) => this.getItemCommentsById(_id))
      );
      kids = kids.filter((kid) => !kid.hasOwnProperty("deleted"));
      return { ...comment, kids };
    } else return comment;
  },
};
