import './contact-form.scss'
import { useState } from 'react';
import { TextInput } from '../Inputs';

function ContactForm() {
  const [errors, setErrors] = useState({
    name: '',
    email: ''
  });
  const [fields, setFields] = useState({
    name: '',
    email: '',
    companyName: '',
    companyType: ''
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const changeHandler = e => {
    setFields({...fields, [e.target.name]: e.target.value});
  };

  return (
    <form className={'contact-form'} onSubmit={submitHandler}>
      <div className={'half-width'}>
        <TextInput name={'name'}
                   placeholder={'John Doe'}
                   label={'Name'}
                   onChangeCallback={changeHandler}
                   value={fields.name}
                   required={true}
                   error={errors.name}
        />
      </div>
      <div className={'half-width'}>
        <TextInput name={'email'}
                   placeholder={'john@example.com'}
                   label={'E-mail'}
                   onChangeCallback={changeHandler}
                   value={fields.email}
                   required={true}
                   error={errors.email}
        />
      </div>
      <div className={'half-width'}>
        <TextInput name={'companyName'}
                   label={'Company name'}
                   onChangeCallback={changeHandler}
                   value={fields.companyName}
        />
      </div>
      <div className={'half-width'}>
        <TextInput name={'companyName'}
                   label={'Company name'}
                   onChangeCallback={changeHandler}
                   value={fields.companyName}
        />
      </div>
      <div className="fullwidth">

      </div>
      <button type="submit">click me</button>
    </form>
  );
}

export default ContactForm;
