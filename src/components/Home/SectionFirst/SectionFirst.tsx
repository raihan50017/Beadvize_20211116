import React from "react";
import Style from "./SectionFirst.module.scss";
import Img from "../../../assets/Home/SectionFirst/ImgFirstSection.svg";
import Mobile from "../../../assets/Home/SectionFirst/Mobile.svg";
import arrowGreen from "../../../assets/Home/SectionFirst/arrowGreen.svg";
import arrowBleue from "../../../assets/Home/SectionFirst/arrowBleu.svg";
import { Grid, Typography } from "@mui/material";
import { Container } from "reactstrap";

const FirstSection = () => {
  return (
    <section>
      <div className={Style.firstsection}>
        <Container maxWidth="sm">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <div>
                <img
                  src={Mobile}
                  className={Style.imgMobile}
                  alt="beaucoup de personnes"
                />
                <Typography variant="h4" className={Style.title}>
                  L'accompagnement idéal de la communauté freelances pour la
                  réussite de vos projets
                </Typography>
                <p className={Style.barre}></p>
                <Typography style={{fontSize:"16px"}} variant="body1" className={Style.para}>
                  Nous accompagnons les freelances dans leurs recherches de
                  missions, tout en apportant l’expertise nécessaire aux
                  entreprises
                </Typography>

                <div className={Style.button}>
                  <a href="/registerClient" className={Style.btnConsultant}>
                    Trouver un freelance{" "}
                    <img src={arrowBleue} alt="flèche de couleur bleu foncé" />
                  </a>

                  <a href="/registerFreelance" className={Style.btnMission}>
                    Trouver une mission{" "}
                    <img src={arrowGreen} alt="flèche de couleur verte clair" />
                  </a>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                style={{ width: "100%" }}
                // className={Style.img}
                src={Img}
                alt="logo de l'entreprise BeAdvize"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
};

export default FirstSection;
