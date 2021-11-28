import React from "react";
import Style from "./DetailProfil.module.scss";
import Profil from "../../../assets/Dashboard/profil.svg";

const DetailProfil = () => {
    return (
        <div className={Style.container}>
            <div className={Style.containAll}>
                <div className={Style.details}>
                    <div className={Style.img}>
                        <img src={Profil} alt="profil" />
                    </div>
                    <div className={Style.detailConsultant}>
                        <button className={Style.button}>
                            Myriam Martin, Coatch Agile
                        </button>
                        <div className={Style.spaceBetween}>
                            <div>
                                <h6>Séniorité </h6>
                                <p>5 ans</p>
                            </div>
                            <div>
                                <h6>TJM</h6>
                                <p>500</p>
                            </div>
                            <div>
                                <h6>Disponibilité</h6>
                                <p>Immédiate</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Style.detailMission}>
                    <h6>
                        Vos retours sur cette mission : Interrogations,
                        pertinence de votre profil, Intérêt professionnel
                    </h6>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.{" "}
                    </p>
                    <h6>
                        Vos missions précédente en lien avec le projet du client{" "}
                    </h6>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DetailProfil;
