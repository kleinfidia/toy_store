import React, { useEffect, useState } from "react";
import axios from "axios";
import { Cards } from "../components";

export const Scrollarea = () => {
  const [news, setnews] = useState([]);

  useEffect(() => {
    const apiKey = "2a0112a1c079475cabf9f07070a308a1";
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setnews(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className=" bg-slate-600 ">
      <div className=" flex  m-7 ">
        {news.map((article, index) => (
          <Cards keys={index} article={article} />
        ))}
      </div>
    </div>
  );
};
