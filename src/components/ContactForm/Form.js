import './contact-form.scss';
import { useState, useEffect } from 'react';
import { TextInput, TextArea, Checkbox, FileDrop } from '../Inputs';
import CDSelect from '../Inputs/Select/Select';
import { Link } from 'react-router-dom';
import { BlueBorderedButton } from '../Buttons';
import { validateEmail, validateRequired } from '../../utils/validate';
import { Spinner, StatusHint } from '../Misc';
import { CSSTransition } from 'react-transition-group';

const companyTypes = [
  {value: 'startup-early', label: 'Startup - Early Stage'},
  {value: 'startup-late', label: 'Startup - Late Stage'},
  {value: 'sm-md-business', label: 'Small or Medium-sized Business'},
  {value: 'enterprise', label: 'Enterprise'},
  {value: 'non-profit', label: 'Non-profit'},
  {value: 'other', label: 'Other'}
];

const initialFieldsState = {
  name: undefined,
  email: undefined,
  companyName: undefined,
  companyType: undefined,
  message: undefined,
  consulting: false,
  design: false,
  development: false,
  devops: false,
  qa: false
};

function ContactForm() {
  const [processing, setProcessing] = useState(false);
  const [postError, setPostError] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [fields, setFields] = useState(initialFieldsState);
  const [files, setFiles] = useState([]);

  const submitHandler = e => {
    e.preventDefault();
    if (isFormValid()) {
      setProcessing(true);
      sendForm();
    } else {
      setErrors({
        name: validateRequired(fields.name),
        email: validateEmail(fields.email),
        message: validateRequired(fields.message)
      });
    }
  };

  const sendForm = () => {
    let formData = new FormData();
    // append inputs data
    Object.keys(fields).forEach(key => {
      if (fields[key]) {
        formData.append(key, fields[key]);
      }
    });
    // append files
    files
      .filter(file => {
        return !file.hasOwnProperty('errors');
      })
      .forEach(file => {
        formData.append('file', file.name);
      });

    fetch('https://httpbin.org/posasdt', {
      method: 'POST',
      body: formData
    })
      .then((data) => {
        if (data.ok === true) {
          // todo: redirect to success page
          alert('ok')
        } else {
          setPostError(true);
        }
      })
      .catch((e) => {
        setPostError(true);
        throw e;
      })
      .finally(() => {
        setProcessing(false);
      });
  };

  const isFormValid = () => {
    let result = true;
    for (const key of Object.keys(errors)) {
      if (typeof errors[key].valid === 'undefined' || errors[key].valid === false) {
        result = false;
      }
    }
    return result;
  };

  useEffect(() => {
    let currentCheck = {
      name: fields.name !== undefined || errors.name ? validateRequired(fields.name) : '',
      email: fields.email !== undefined || errors.email ? validateEmail(fields.email) : '',
      message: fields.message !== undefined || errors.message ? validateRequired(fields.message) : ''
    };
    setErrors(currentCheck);
  }, [fields.name, fields.email, fields.message]);

  const changeHandler = e => {
    setFields((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
      };
    });
  };
  // todo: Attach unique files only
  const fileDropHandler = selectedFiles => {
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const fileRemoveHandler = (fileToRemove, e) => {
    e.stopPropagation();
    setFiles((prevFiles) => {
      return prevFiles.filter(file => {
        if (file.errors) {
          return file.file.name !== fileToRemove;
        } else {
          return file.name !== fileToRemove;
        }
      });
    });
  };

  const changeCompanyTypeHandler = type => {
    setFields((prevState) => {
      return {
        ...prevState,
        companyType: type.value
      };
    });
  };

  return (
    <form className={`contact-form ${processing ? 'disabled' : ''}`} onSubmit={submitHandler}>
      <CSSTransition in={processing} timeout={200}>
        <div className="overlay">
          <Spinner/>
        </div>
      </CSSTransition>
      {postError &&
        <div className="full-width status">
          <StatusHint type={'error'}>Something went wrong. Please, try again.</StatusHint>
        </div>
      }
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
        <CDSelect name={'company-type'}
                  label={'Company type'}
                  options={companyTypes}
                  isSearchable={false}
                  maxMenuHeight={400}
                  placeholder={'Pick One...'}
                  onChange={changeCompanyTypeHandler}/>
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
        <FileDrop onDrop={fileDropHandler} onRemove={fileRemoveHandler} filesList={files}/>
      </div>
      <p className="disclaimer">
        By ticking the checkboxes and confirming with “Get Started” you agree with processing your
        personal data for the purpose of entering a pre-contractual relationship. For more
        information on how we are committed to protect and respect your privacy, please check
        our <Link to="/privacy-policy" target="_blank">Privacy Policy</Link> of Codedrop.
      </p>
      <BlueBorderedButton processing={processing} onClick={submitHandler}>
        Get Started
      </BlueBorderedButton>
    </form>
  );
}

export default ContactForm;
