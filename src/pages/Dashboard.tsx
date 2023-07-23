import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import SingleTable from "../components/admin/SingleTable";

function Dashboard() {
  const selectdata: any = useSelector((state) => state);

  return (
    <div>
      <div className=" dash container pb-5" style={{paddingTop:"80px"}}>
        <h1 className=" text-center fs-1  mt-5">Dashboard</h1>
        <LinkContainer to="add">
          <Button variant="danger">New blog</Button>
        </LinkContainer>
        <Table className="mt-5 container">
          <thead>
            <tr className="fw-bold">
              <th>#</th>
              <th>Photo</th>
              <th>Title</th>
              <th>Description</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {selectdata.map((item: any, i: any) => {
              return (
                <SingleTable
                  count={i}
                  key={i}
                  title={item.title}
                  desc={item.desc}
                  id={item.id}
                  photo={item.photo}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Dashboard;
