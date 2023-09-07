import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";
function* fetchPostSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    console.log("[post]", posts.data);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (err) {
    console.log(err);
    yield put(actions.getPosts.getPostsFailure(err));
  }
}
function* createPostSaga(action) {
  try {
    const post = yield call(api.createPost, action.payload);
    console.log("[createPostSaga - post]", post);
    yield put(actions.createPost.createPostSuccess(post.data));
  } catch (error) {
    console.log(error);
    yield put(actions.createPost.createPostFailure(error));
  }
}
function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
}
export default mySaga;
