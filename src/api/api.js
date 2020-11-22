import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/'
})

export const hackerNewsAPI = {
  getLatestItemsIds() {
    return instance.get(
      "newstories.json?print=pretty&orderBy=%22$key%22&limitToFirst=100"
    );
  },
  async getItemById(id) {
    const response = await instance.get(
      `item/${id}.json?print=pretty`
    );
    
    const item = response.data
    return item
  },
  async getLatestItemsById() {
    const response = await this.getLatestItemsIds()
    const ids =  response.data
    const items = await Promise.all(
      ids.map(id => this.getItemById(id))
    )
    return items
  },
  async getItemCommentsById(id, nestedComments = []) {
    const comment = await this.getItemById(id)
    if (comment.kids) {
      const kids = await Promise.all(
        comment.kids.map(_id => this.getItemCommentsById(_id))
      )
      return {...comment, kids}
    } else return comment
  },
};
