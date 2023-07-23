

import database from "../../firebase/firebaseConfig";

export const addBlog = (blog) => ({
  type: "ADD_BLOG",
  blog,
});

export const addBlogToDatabase = (blogData = {}) => {
  return (dispatch) => {
    const { title = "", desc = "", photo = "" } = blogData;
    
    const blog = { title, desc, photo };
console.log(blogData)
    database
      .ref("blogs")
      .push(blog)
      .then((res) => {
        dispatch(
          addBlog({
            id: res.key,
            ...blog,
          })
        );
      });
  };
};

export const removeBlog = (id) => ({
  type: "REMOVE_BLOG",
  id: id,
});

export const removeBlogFromDatabase = (id) => {
  return (dispatch) => {
    return database
      .ref(`blogs/${id}`)
      .remove()
      .then(() => {
        dispatch(removeBlog(id));
      });
  };
};

export const editBlog = (id, updates) => ({
  type: "EDIT_BLOG",
  id,
  updates,
});

export const editBlogFromDatabase = (id, updates) => {
  return (dispatch) => {
    return database
      .ref(`blogs/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editBlog(id, updates));
      });
  };
};

export const setBlogs = (blogs) => ({
  type: "SET_BLOGS",
  blogs,
});

export const getBlogsFromDatabase = () => {
  return (dispatch) => {
    return database
      .ref("blogs")
      .once("value")
      .then((snapshot) => {
        const blogs = [];

        snapshot.forEach((blog) => {
          blogs.push({
            id: blog.key,
            ...blog.val(),
          });
        });

        dispatch(setBlogs(blogs));
      });
  };
};

















// import { v4 as uuid } from "uuid";

// export const addBlog = ({ title, desc, photo }) => {
 
//   console.log(title, desc,photo)
//   return(
//    {
//   type: "ADD_BLOG",
//   myblog: {
//     id: uuid(),
//     title,
//     desc,
//     photo,
//   },
// })
// }
// ;

// // export const editBlog =({blogid,blogupdate})=>({
// //     type:"EDIT_BLOG",
// //     id:blogid,
// //     update:blogupdate
// // })

// export const editBlog = (id, update) => ({
//   type: "EDIT_BLOG",
//   id,
//   update,
// });

// export const removeBlog = ({ comingid }) => ({
//   type: "REMOVE_BLOG",
//   myid: comingid,
// });
