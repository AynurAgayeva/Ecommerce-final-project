import React from "react";
import BlogForm from "../../components/admin/BlogForm";
// import { useParams } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";

import {
  editBlogFromDatabase,
  removeBlogFromDatabase,
} from "../../manager/actions/blogAction";
import { useNavigate } from "react-router-dom";

// const EditBlog = (props) => {
//   let { id } = useParams();
//     const navigate = useNavigate();
//   const currentValue = useSelector(state=>state)
//   const data = currentValue.find(p=>p.id == id);
//   console.log(data)
//   return (
//     <div style={{ backgroundColor: "#0f172a", color: "#94a9c9" }}>
//       <h1 className="text-center">Edit Blog</h1>

//       <BlogForm
//         blogEdit={data}
//         blogSubmit={(items) => {
//           props.dispatch(editBlog(items));
//           navigate("/dashboard");
//         }}
//       />
//     </div>
//   );
// };

// export default  connect() (EditBlog);

const EditBlog = (props: any) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-center blog-style mt-5 pt-5">Edit Blog</h1>

      <BlogForm
        blogEdit={props.pvalue}
        blogSubmit={(items: any) => {
          props.dispatch(editBlogFromDatabase(props.pvalue.id, items));

          console.log(items);
          navigate("/dashboard");
          window.location.reload();
        }}
      />
      <div className="pb-5 d-flex align-items-center justify-content-end">
        <div className="col-9 p-0">
          <Button
            variant="danger"
            onClick={() => {
              props.dispatch(removeBlogFromDatabase(props.pvalue.id));
              navigate("/dashboard");
              window.location.reload();
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const link = window.location.pathname.slice(16, 99);
  return {
    pvalue: state.find((p: any) => p.id === link),
  };
};

export default connect(mapStateToProps)(EditBlog);
