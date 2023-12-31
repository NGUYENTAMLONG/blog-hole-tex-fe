import React from "react";
import { Grid } from "@material-ui/core";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { postState$ } from "../../redux/selectors";
export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(postState$);
  React.useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);
  return (
    <div>
      <Grid container spacing={2} alignItems="stretch">
        {posts.map((post) => {
          return (
            <Grid item xs={12} sm={6} key={post._id}>
              <Post post={post} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
