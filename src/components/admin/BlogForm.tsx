import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
interface propType {
  blogSubmit: any;
  blogEdit: any;
}
const BlogForm: React.FC<propType> = ({ blogSubmit, blogEdit }) => {
  // const [blogphoto, setBlogphoto] = useState(blogEdit?.photo ? blogEdit.photo : "" );

  // const [blogtitle, setBlogtitle] = useState(blogEdit?.title ? blogEdit.title : "" );
  // const [blogdesc, setBlogdesc] = useState( blogEdit?.desc ? blogEdit.desc : "")

  const [blogphoto, setBlogphoto] = useState(
    blogEdit?.photo ? blogEdit.photo : ""
  );
  const [blogtitle, setBlogtitle] = useState(blogEdit ? blogEdit.title : "");
  const [blogdesc, setBlogdesc] = useState(blogEdit ? blogEdit.desc : "");

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogphoto || !blogtitle || !blogdesc) {
      alert("Please, fill this area!");
    } else {
      blogSubmit({
        photo: blogphoto,
        title: blogtitle,
        desc: blogdesc,
      });
    }
  };
  return (
    <div
    
      className="d-flex py-5 align-items-center justify-content-center flex-column"
    >
      <div className="col-6">
        <Form onSubmit={formSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Photo</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setBlogphoto(e.target.value)}
              value={blogphoto}
              placeholder="Enter photo"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setBlogtitle(e.target.value)}
              value={blogtitle}
              placeholder="Enter title"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setBlogdesc(e.target.value)}
              value={blogdesc}
              placeholder="Enter description"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {blogEdit ? "Save" : "Add"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default BlogForm;
