import React, { useState } from "react";
import InputMask from "react-input-mask";
import { Button, FormGroup, Input } from "reactstrap";
import FormFeedback from "reactstrap/lib/FormFeedback";
import Style from "./RegisterForm.module.scss";
import linkedin from "../../../assets/Auth/linkedin.svg";
import useForm from "./ValidateForm/useFormStep1/useForm";
import Validate from "./ValidateForm/useFormStep1/Validate";
import { signup } from "../../../Utilities/request";
import {
  isEmail,
  isMobilePhoneNumber,
  isPassword,
} from "../../../Utilities/validation";
import { useLocation } from "react-router-dom";
import Cross from "../../../assets/Auth/Cross.svg";
import { TextField, Typography } from "@mui/material";

const RegisterForm = ({ next, type, step }: any) => {
  const signUp = step;

  function submit() {
    let data = signup(valuesFirstStep);
    data
      .then((res) => {
        next();
      })
      .catch((err) => {
        alert(err);
        if (err.response.status === 400) {
          let errors: any = {};
          errors.email = "Cet email est déjà utilisé !";
          setErrors(errors);
        }
      });
  }

  const {
    handleChangeFirstStep,
    errors,
    handleSubmit,
    valuesFirstStep,
    setErrors,
  } = useForm(submit, Validate, type, signUp);

  const toConnect = () => {
    localStorage.setItem("toConnect", "true");
  };

  const location = useLocation();
  const fromConnect =
    location.state && (location.state as any).register
      ? (location.state as any).register
      : false;

  const [showMention, setShwoMention] = useState(false);
  const noScroll = () => {
    let body = document.body;
    body.style.height = "100vh";
    body.style.overflowY = "hidden";
  };
  const goScroll = () => {
    let body = document.body;
    body.style.height = "";
    body.style.overflowY = "";
  };

  return (
    <section className={Style.section}>
      <div className={Style.container}>
        <h1 className={Style.title}>Je crée mon compte BeAdvize</h1>
        <div className={Style.barre}></div>
        <a className={Style.button} href="/" onClick={toConnect}>
          Déjà inscrit ? <span>Connectez-vous</span>
        </a>
        <Button style={{ padding: "10px 18px" }} className={Style.linkedin}>
          <img src={linkedin} alt="logo linkedin" />
          <Typography variant="body1">Inscription à linkedin</Typography>
        </Button>
        {fromConnect && <p className={Style.para}>ou</p>}
        {fromConnect === true ? (
          <div className={Style.containRegisterButton}>
            <a href="/registerClient" className={Style.registerClient}>
              Inscription Client
            </a>
            <a href="/registerFreelance" className={Style.registerFreelance}>
              Inscription Freelance
            </a>
          </div>
        ) : null}

        <form className={Style.form} onSubmit={handleSubmit} noValidate>
          <TextField
            style={{ width: "100%", marginBottom: "15px" }}
            required
            id="outlined-required"
            label="Required"
            defaultValue="Prénom"
            onChange={handleChangeFirstStep}
          />
          {/* <input
            type="text"
            placeholder="Prénom"
            className={Style.input}
            name="firstname"
            onChange={handleChangeFirstStep}
          ></input> */}
          {/*  {errors.firstname && (
                        <p className={Style.errors}>{errors.firstname}</p>
                    )} */}
          <TextField
            style={{ width: "100%", marginBottom: "15px" }}
            required
            id="outlined-required"
            label="Required"
            defaultValue="Nom"
            onChange={handleChangeFirstStep}
          />
          {/* <input
            type="text"
            placeholder="Nom"
            className={Style.input}
            name="lastname"
            onChange={handleChangeFirstStep}
          ></input> */}
          {/*   {errors.lastname && (
                        <p className={Style.errors}>{errors.lastname}</p>
                    )} */}

          <FormGroup className={Style.formgroup}>
            <TextField
              style={{ width: "100%", marginBottom: "15px" }}
              required
              id="outlined-required"
              label="Required"
              defaultValue="E-mail"
              onChange={handleChangeFirstStep}
            />
            {/* <Input
              className={Style.input}
              type="text"
              name="email"
              placeholder="E-mail*"
              invalid={
                !!valuesFirstStep.email && !isEmail(valuesFirstStep.email)
              }
              //value={valuesFirstStep}
              onChange={handleChangeFirstStep}
            /> */}

            <FormFeedback className={Style.FormFeedback}>
              {isEmail(valuesFirstStep.email)
                ? `Cette adresse e-mail est déjà associée à un compte`
                : `Adresse e-mail non valide`}
            </FormFeedback>
          </FormGroup>
          {/*                     <input
                        type="email"
                        placeholder="E-mail professionnel"
                        className={Style.input}
                        name="email"
                        onChange={handleChangeFirstStep}
                    ></input> */}
          {/*   {errors.email && (
                        <p className={Style.errors}>{errors.email}</p>
                    )} */}
          <FormGroup className={Style.formgroup}>
            <TextField
              //   className={Style.input}
              style={{ width: "100%", marginBottom: "15px" }}
              type="text"
              name="mobilephone"
              //   placeholder="Mobile*"
              required
              id="outlined-required"
              label="Required"
              defaultValue="Mobile"
              //   invalid={
              //     !!valuesFirstStep.address.mobilephone &&
              //     !isMobilePhoneNumber(valuesFirstStep.address.mobilephone)
              //   }
              //value={state.signup.address.mobilephone}
              onChange={handleChangeFirstStep}
              //   tag={InputMask}
              // eslint-disable-next-line
              //   mask="+3\3 9 99 99 99 99"
              //   maskChar={null}
            />
            <FormFeedback className={Style.FormFeedback}>
              {/*  {!state.signup.address.mobilephone 
            ? 'Merci de renseigner ce champ'
            : null} */}
            </FormFeedback>
          </FormGroup>
          {/*   <input
                        type="tel"
                        placeholder="Téléphone (optionnel)"
                        className={Style.input}
                        name="tel"
                        onChange={handleChangeFirstStep}
                    ></input> */}
          {errors.tel && <p className={Style.errors}>{errors.tel}</p>}

          <FormGroup className={Style.formgroup}>
            <TextField
              style={{ width: "100%", marginBottom: "15px" }}
              required
              id="outlined-required"
              label="Required"
              defaultValue="Password"
              onChange={handleChangeFirstStep}
            />
            {/* <Input
              className={Style.input}
              type="password"
              name="password"
              placeholder="Mot de passe*"
              invalid={
                !!valuesFirstStep.password &&
                !isPassword(valuesFirstStep.password)
              }
              //value={state.signup.password}
              onChange={handleChangeFirstStep}
            /> */}
            <FormFeedback className={Style.FormFeedback}>
              {!valuesFirstStep.password
                ? "Merci de choisir un mot de pass"
                : "Votre mot de passe doit contenir 8 caractères minimum avec au moins une majuscule, un chiffre et un caractère spécial"}
            </FormFeedback>
          </FormGroup>
          {/* <input
                        type="password"
                        placeholder="Mot de passe"
                        className={Style.input}
                        name="password"
                        onChange={handleChangeFirstStep}
                        autoComplete="current-password"
                    ></input> */}
          {errors.password && <p className={Style.errors}>{errors.password}</p>}
          {/* <div className={Style.passConstraint}>
                        <p> {">"}8 caracteres</p>
                        <p>1 Majuscule</p>
                        <p>1 caractère special</p>
                    </div> */}
          <p className={Style.paraEnd}>
            En continuant votre inscription, vous acceptez nos{" "}
            <span
              onClick={() => {
                setShwoMention(true);
                noScroll();
              }}
            >
              conditions générales
            </span>
            .
          </p>
          <button className={Style.send}>S’inscrire sur BeAdvize</button>
        </form>
      </div>

      {showMention ? (
        <div className={Style.vh} id="mention">
          <div className={Style.Block}>
            <div className={Style.containTitle}>
              <h1>Mentions Légals</h1>
              <img
                src={Cross}
                alt="bouton pour quitter la modale"
                onClick={() => {
                  setShwoMention(false);
                  goScroll();
                }}
              />
            </div>
            <div className={Style.containPata}>
              <div>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default RegisterForm;
