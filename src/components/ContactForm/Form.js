import './contact-form.scss';
import { useState, useEffect } from 'react';
import { TextInput, TextArea, Checkbox, FileDrop } from '../Inputs';
import { Link } from 'react-router-dom';
import { BlueBorderedButton } from '../Buttons';
import {validateEmail, validateRequired} from '../../utils/validate';

function ContactForm() {
  const [valid, setValid] = useState(false)
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [fields, setFields] = useState({
    name: undefined,
    email: undefined,
    companyName: undefined,
    companyType: undefined,
    message: undefined,
    consulting: false,
    design: false,
    development: false,
    devops: false,
    qa: false,
    files: []
  });

  const submitHandler = e => {
    e.preventDefault();
    // validate();
  };

  useEffect(() => {
    let currentCheck = {
      name: fields.name !== undefined ? validateRequired(fields.name) : '',
      email: fields.email !== undefined ? validateEmail(fields.email) : '',
      message: fields.message  !== undefined ? validateRequired(fields.message) : ''
    };
    setErrors(currentCheck);
    console.log(Object.values(currentCheck))
  }, [fields.name, fields.email, fields.message]);

  const changeHandler = e => {
    setFields({
      ...fields,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });
  };

  const fileDropHandler = selectedFiles => {
    setFields({
      ...fields,
      files: [...fields.files, ...selectedFiles]
    });
  };

  const fileRemoveHandler = (fileToRemove, e) => {
    e.stopPropagation();
    setFields({
      ...fields,
      files: fields.files.filter(file => {
        if (file.errors) {
          return file.file.name !== fileToRemove;
        } else {
          return file.name !== fileToRemove;
        }
      })
    })
  }

  return (
    <form className={'contact-form'} onSubmit={submitHandler}>
      <div className={'half-width'}>
        <TextInput name={'name'}
                   placeholder={'John Doe'}
                   label={'Name'}
                   onChangeCallback={changeHandler}
                   value={fields.name || ''}
                   required={true}
                   error={errors.name.message}
        />
      </div>
      <div className={'half-width'}>
        <TextInput name={'email'}
                   placeholder={'john@example.com'}
                   label={'E-mail'}
                   onChangeCallback={changeHandler}
                   value={fields.email || ''}
                   required={true}
                   error={errors.email.message}
        />
      </div>
      <div className={'half-width'}>
        <TextInput name={'companyName'}
                   label={'Company name'}
                   onChangeCallback={changeHandler}
                   value={fields.companyName || ''}
        />
      </div>
      <div className={'half-width'}>
        <TextInput name={'companyName'}
                   label={'Company name'}
                   onChangeCallback={changeHandler}
                   value={fields.companyName || ''}
        />
      </div>
      <div className="full-width legend-holder">
        <span className="legend">I`m looking for</span>
      </div>
      <div className="half-width checkbox-area">
        <Checkbox label={'Consulting'} name={'consulting'} onChangeCallback={changeHandler}
                  checked={fields.consulting}/>
        <Checkbox label={'Design'} name={'design'} onChangeCallback={changeHandler}
                  checked={fields.design}/>
        <Checkbox label={'Development'} name={'development'} onChangeCallback={changeHandler}
                  checked={fields.development}/>
      </div>
      <div className="half-width">
        <Checkbox label={'Cloud & DevOps'} name={'devops'} onChangeCallback={changeHandler}
                  checked={fields.devops}/>
        <Checkbox label={'Quality Assurance'} name={'qa'} onChangeCallback={changeHandler}
                  checked={fields.qa}/>
      </div>
      <div className="full-width">
        <TextArea name={'message'} label={'message'}
                  placeholder={'What`s on your mind?'}
                  required={true} error={errors.message.message}
                  onChangeCallback={changeHandler}
                  value={fields.message || ''}>
        </TextArea>
      </div>
      <div className="full-width">
        <FileDrop onDrop={fileDropHandler} onRemove={fileRemoveHandler} filesList={fields.files}/>
      </div>
      <p className="disclaimer">
        I have read and am aware of my user rights in the processing of personal data as outlined in
        the <Link to="/privacy-policy" target="_blank">Privacy Policy</Link> of Codedrop.
      </p>
      <BlueBorderedButton>send</BlueBorderedButton>
    </form>
  );
}

export default ContactForm;
