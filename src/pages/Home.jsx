import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Home 페이지 입니다.</h1>
      <Link to="/detail/123">Datail페이지로 이동</Link>
    </div>
  );
};

export default Home;
