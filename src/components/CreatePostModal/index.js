import { Button, Modal, TextareaAutosize, TextField } from "@material-ui/core";
import FileBase64 from "react-file-base64";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalState$ } from "../../redux/selectors";
import useStyle from "./style";
import { createPost, hideModal } from "../../redux/actions";

export default function CreatePostModal({ isShowModal, handleCloseModal }) {
  const [data, setData] = React.useState({
    title: "",
    content: "",
    attachment: "",
  });
  const dispatch = useDispatch();
  const { isShow } = useSelector(modalState$);
  const classes = useStyle();

  // const onClose = React.useCallback(() => {
  //   dispatch(hideModal());
  //   setData({
  //     title: "",
  //     content: "",
  //     attachment: "",
  //   });
  // }, [dispatch]);

  const onClose = () => {
    handleCloseModal();
  };
  const onSubmit = React.useCallback(() => {
    data.author = "TAMLONG";
    dispatch(createPost.createPostRequest(data));
    onClose();
  }, [data, dispatch, onClose]);
  // const onSubmit = () => {
  //   console.log(data);
  // };

  const body = (
    <div className={classes.paper} id="simple-modal-title">
      <h2>Create New Post</h2>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          className={classes.title}
          required
          label="Title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextareaAutosize
          className={classes.textarea}
          minRows={10}
          maxRows={15}
          placeholder="Content..."
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />
        <FileBase64
          accept="image/*"
          multiple={false}
          type="file"
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
        />
        <div className={classes.footer}>
          <Button
            variant="contained"
            color="secondary"
            component="span"
            fullWidth
            style={{ cursor: "pointer" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            component="span"
            fullWidth
            style={{ marginLeft: "10px", cursor: "pointer" }}
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );

  console.log(isShowModal);
  return (
    <div>
      <Modal open={isShowModal} onClose={onClose}>
        {body}
      </Modal>
    </div>
  );
}
