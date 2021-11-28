import React from 'react'
import { changePassword } from '../../../Utilities/request';
import { isPassword } from '../../../Utilities/validation';
import Style from './FormPassword.module.scss'
import { Button, Col, Form, FormFeedback, FormGroup, Input, Row } from 'reactstrap';

const FormPassword = () => {
    
    const [form, setForm ] = React.useState({
        confirmedPassword: '',
        currentPassword: '',
        invalid: false,
        isChanged: false, 
        newPassword: '',
      });
    
    const isValid =
    !!form.currentPassword &&
    isPassword(form.newPassword) &&
    form.newPassword === form.confirmedPassword &&
    form.newPassword !== form.currentPassword;

    const handleChange = (e: React.ChangeEvent<Element>) => {
      setForm({
            ...form,
            invalid: false,
            [(e.target as any).name]: (e.target as any).value,
        });
    };

    const handleSave = async () => {
      alert (JSON.stringify(form))
        const { currentPassword, newPassword } = form;
        if (isValid) {
          alert ('valid')
          try {
            const updatedUser = await changePassword({
              currentPassword,
              newPassword,
            });
            if (updatedUser) {
              setForm({
                confirmedPassword: '',
                currentPassword: '',
                invalid: false,
                isChanged: true,
                newPassword: '',
              });
            }
          } catch (error) {
            setForm({ ...form, invalid: true });
            alert(error)
          }
        } else {
          alert ('inValid')
          setForm({ ...form, invalid: true });
          alert('on refait le form')
        }
      };


    return (
         <div className={Style.container}>
            <h1 className={Style.title}>Changement de mot de passe</h1>   
            <div className={Style.barre}>
                <div></div>
            </div>
            <div className={Style.form}>
                <label htmlFor="lastName">Mot de passe actuel</label>
                {/* <input type="text" id="lastName"/> */}
                <Input
                type='password'
                name='currentPassword'
                disabled={form.isChanged}
                invalid={
                  form.invalid &&
                  (form.currentPassword === form.newPassword || isValid)
                }
                value={form.currentPassword}
                onChange={handleChange}
              />
              <FormFeedback>
                {form.currentPassword === form.newPassword
                  ? 'Le nouveau mot de passe est identique au mot de passe actuel'
                  : isValid
                  ? 'Le mot de passe renseigné est incorrect'
                  : null}
              </FormFeedback>
                <label htmlFor="lastName">Nouveau mot de passe</label>
               {/*  <input type="text" id="lastName"/> */}
               <Input
                type='password'
                name='newPassword'
                disabled={form.isChanged}
                invalid={form.invalid && form.newPassword.length < 8}
                value={form.newPassword}
                onChange={handleChange}
              />
              <FormFeedback>
                Le nouveau mot de passe doit comporter 8 caractères minimum
              </FormFeedback>
                <label htmlFor="lastName">Confirmer mot de passe</label>
               {/*  <input type="text" id="lastName"/> */}
               <Input
                type='password'
                name='confirmedPassword'
                disabled={form.isChanged}
                invalid={
                  form.invalid && form.newPassword !== form.confirmedPassword
                }
                value={form.confirmedPassword}
                onChange={handleChange}
              />
              <FormFeedback>
                Les deux mots de passe ne correspondent pas
              </FormFeedback>
                <div className={Style.containButton}>
                    <button onClick={handleSave} className={Style.button}>Enregistrer</button>
                </div>
            </div>
        </div> 

     
            
           
    


    )
}

export default FormPassword
