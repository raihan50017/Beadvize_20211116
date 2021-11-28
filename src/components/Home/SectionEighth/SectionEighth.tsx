import React, { useState } from "react";
import { newsletter } from "../../../Utilities/request";
import Style from "./SectionEighth.module.scss";
import { Grid, Container } from "@mui/material";

const SectionEighth = () => {
  const [form, setFrom] = useState({
    email: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFrom({
      ...form,
      email: value,
    });
  };

  const submitNewsletter = () => {
    const data = newsletter(form);
    data
      .then((res) => {
        //pop up de confirmtaion
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
      <div className={Style.sectioneight}>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <div className={Style.text}>
                <h4>Recevez nos dernières offres </h4>
                <div className={Style.barre}>
                  <p></p>
                </div>
                <p>
                  Inscrivez-vous à notre newsletter pour recevoir les dernières
                  missions, et les actualités du freelancing
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={Style.nwsection}>
                <input
                  placeholder="Votre mail"
                  className={Style.nwinput}
                  name="email"
                  type="email"
                  onChange={handleChange}
                ></input>
                <a className={Style.inputbtn} onClick={submitNewsletter}>
                  Envoyer
                </a>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
};

export default SectionEighth;
