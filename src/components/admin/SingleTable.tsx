import React from "react";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch } from "react-redux";
import { removeBlogFromDatabase } from "../../manager/actions/blogAction";
interface propsType {
  title: string;
  desc: string;
  photo: string;
  id: number;
  count: number;
}
const SingleTable = ({ photo, title, desc, id, count }: propsType) => {
  const dispatch: any = useDispatch();

  return (
    <tr>
      <td>{count + 1}</td>
      <td>
        <img className="photo"
          style={{ verticalAlign: "middle" }}
          src={photo}
          width={50}
          alt=""
        />
      </td>
      <td>{title}</td>
      <td>{desc}</td>

      <td>
        <LinkContainer to={`edit/${id}`}>
          <Button variant="warning">
            <i className="fa-solid fa-pencil"></i>
          </Button>
        </LinkContainer>
      </td>
      <td>
        <Button
          onClick={() => {
            dispatch(removeBlogFromDatabase(id));

            window.location.reload();
          }}
          className="btn btn-danger" 
          variant="danger"
        >
          <i className="fa-solid fa-trash"></i>
        </Button>
        
      </td>
    </tr>
  );
};

export default SingleTable;
