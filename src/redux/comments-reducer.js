import { hackerNewsAPI } from "../api/api";

let initialState = {
  comments: [],
  // kids: []
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COMMENTS":
      return { ...state, comments: action.comments };
    // case 'SET_COMMENT_KIDS':
    //   return {...state, kids: action.kids}
    default:
      return state;
  }
};

// comments : comments.map(el => el.parent = parent ? [el]: )


const setComments = (comments) => ({type: 'SET_COMMENTS', comments})
// const setCommentKids = (kids) => ({type: 'SET_COMMENT_KIDS', kids})

export const getComments = (id) => async (dispatch) => {
  const comments = await hackerNewsAPI.getItemCommentsById(id)
  dispatch(setComments(comments))
}

// export const getCommentKids = (kidsId) => async (dispatch) => {
//   const kids = await hackerNewsAPI.getCommentKids(kidsId)
//   dispatch(setCommentKids(kids))
// }



export default commentsReducer;