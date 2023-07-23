const blog = [];

export const blogReducer = (state = blog, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.myblog];

    case "REMOVE_BLOG":
      return state.filter(({ id }) => {
        return id !== action.myid;
      });

    case "EDIT_BLOG":
      return state.map((data) => {
        if (data.id === action.id) {
          console.log(action.update);
          return {
            ...data,
            ...action.update,
          };
        } else {
          return data;
        }
      });
    case "SET_BLOGS":
      return action.blogs;
    default:
      return state;
  }
};
