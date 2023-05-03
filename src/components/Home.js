import { useQuery, useQueryClient } from "react-query";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
        <Link to='/table'><button className="button">User</button></Link>
        <Link to='user/CreateUser'> <button className="button">Create User</button></Link>
       <Outlet />
    </>
  );
};

export default Home;
