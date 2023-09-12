import React from "react";

const Cards = ({ key, article }) => {
    console.log("articles",article)
  return (
    
      <div key={key} className=" bg-slate-300 border rounded-md   m-3 ">
        <div >
        <p className=" text-primary">{article?.author}, </p>
        <p>{article?.title}</p>
        <p>{article?.description}</p>
        </div>
      </div>
  );
};

export default Cards;
