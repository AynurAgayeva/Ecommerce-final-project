import React from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BlogForm from "../../components/admin/BlogForm";
import { addBlogToDatabase } from "../../manager/actions/blogAction";

const AddBlog = (props: any) => {
  const navigate = useNavigate();
  return (
    <div >
      <h1 className=" mt-5 text-center blog-style pt-5">New Blog</h1>
      <BlogForm
        blogEdit={null}
        blogSubmit={(items: any) => {
          console.log(items);
          props.dispatch(addBlogToDatabase(items));
          navigate("/dashboard");

          window.location.reload();
        }}
      />
    </div>
  );
};
export default connect()(AddBlog);
