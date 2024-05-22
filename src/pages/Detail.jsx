import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Detail 페이지 입니다.</h1>
      <p>id : {id}</p>
    </div>
  );
};

export default Detail;
