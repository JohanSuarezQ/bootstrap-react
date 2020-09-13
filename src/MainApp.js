import React from "react";
import { useFetch } from "./components/hooks/useFetch";
import "./styles/settings.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

export const MainApp = () => {
  const state = useFetch();
  console.log(state);
  const imgSize = "cover_big";
  // console.log(fetchNormal);

  return (
    <>
      <h1>Bootstrap carrousel modified whith sass(grid layout)</h1>
      <Carousel interval={null} fade={true}>
        {state.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              src={`https://images.igdb.com/igdb/image/upload/t_${imgSize}/${item.cover.image_id}.jpg`}
              alt=""
            />
            <div className="item-info">
              <h2>{item.name}</h2>
              <p>{item.summary}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
