import React from "react";
import Title from "./Title";
import "./Magazine.scss";
import MagazineImg from "./MagazineImg";

function Magazine() {
  const title = "MAGAZINE";
  const color = "#000";
  return (
    <section className="Magazine-container">
      <Title title={title} color={color} />
      <MagazineImg />
    </section>
  );
}

export default Magazine;
