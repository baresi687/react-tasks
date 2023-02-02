import React from "react";
import { Button } from "@mui/material";

export default function Contact() {
  return (
    <main>
      <small className="breadcrumb">You are here {">"} Contact</small>
      <section className="main-content">
        <h1>Contact Section</h1>
        <Button variant="outlined">Contact Us</Button>
      </section>
    </main>
  );
}
