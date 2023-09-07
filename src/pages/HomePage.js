import React, { useState } from "react";
import { Container, Fab } from "@material-ui/core";
import PostList from "../components/PostList";
import Header from "../components/Header";
import AddIcon from "@material-ui/icons/Add";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/actions";
import CreatePostModal from "../components/CreatePostModal";
export default function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const openCreatePostModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);
  const [isShowModal, setIsShowModal] = useState(false);
  const handleShowModal = () => {
    setIsShowModal(true);
  };
  const handleCloseModal = () => {
    setIsShowModal(false);
  };
  console.log(isShowModal);
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <PostList />
        <CreatePostModal
          isShowModal={isShowModal}
          handleCloseModal={handleCloseModal}
        />
        <Fab
          color="primary"
          className={classes.fab}
          // onClick={openCreatePostModal}
          onClick={handleShowModal}
        >
          <AddIcon />
        </Fab>
      </Container>
    </>
  );
}
