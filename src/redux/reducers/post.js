import { INIT_STATE } from "../../constant";
import { createPost, getPosts, getType } from "../actions";

export default function postsReducers(state = INIT_STATE.posts, action) {
  switch (action.type) {
    case getType(getPosts.getPostsRequest()): //case: 'getPostsRequest'
      return {
        isLoading: true,
        ...state,
      };
    case getType(getPosts.getPostsSuccess()): //case: 'getPostssuccess'
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getPosts.getPostsFailure()): //case: 'getPostsFailure'
      return {
        ...state,
        isLoading: false,
      };
    case getType(createPost.createPostSuccess):
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    // case getType(updatePost.updatePostSuccess):
    //   return {
    //     ...state,
    //     data: state.data.map((post) =>
    //       post._id === action.payload._id ? action.payload : post
    //     ),
    //   };
    default:
      return state;
  }
}
// export default function postsReducers(state = INIT_STATE.posts, action) {
//   switch (action.type) {
//     case getType(getPosts.getPostsRequest()): //case: 'getPostsRequest'
//       return {
//         isLoading: true,
//         ...state,
//       };
//     case getType(getPosts.getPostsSuccess()): //case: 'getPostssuccess'
//       return {
//         ...state,
//         isLoading: false,
//         data: action.payload,
//       };
//     case getType(getPosts.getPostsFailure()): //case: 'getPostsFailure'
//       return {
//         ...state,
//         isLoading: false,
//       };
//     default:
//       return state;
//   }
// }
