import React from "react";
import { Skeleton } from "@mui/material";

export default function Home() {
  return (
    <main>
      <small className="breadcrumb">You are here {">"} Home</small>
      <section className="main-content">
        <h1>Home Section</h1>
        <div className="home-skeleton">
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </div>
      </section>
    </main>
  );
}
