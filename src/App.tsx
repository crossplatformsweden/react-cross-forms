import './App.css';

import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import * as Yup from 'yup';

import { FormField } from './components/FormField';
import { Country } from './Country';
import logo from './logo.svg';

interface IUserFields {
  phone: any;
  social: any;
  email: any;
  password: any;
  country: any;
}
const UserFieldKeys: IUserFields = {
  phone: 'phone',
  social: 'social',
  email: 'email',
  password: 'password',
  country: 'country',
};

const InitialValues: IUserFields = {
  email: '',
  password: '',
  social: '',
  phone: '',
  country: '',
};

const ValidationRules: IUserFields = {
  country: Yup.string()
    .required('Landskod krävs')
    .uppercase('Landskod i versaler')
    .length(2, 'Landskod med 2 tecken'),
  phone: Yup.string()
    .required('Telefon krävs')
    .matches(/^((((0{2}?)|(\+){1})46)|0)[\d]{9}/, 'Ogiltigt telefonnummer'),
  social: Yup.string()
    .required('Fältet krävs')
    .matches(/^(19|20)?[0-9]{6}[- ]?[0-9]{4}$/, 'Ogiltigt personnummer'),
  email: Yup.string()
    .email('Ogiltig e-postadress')
    .required('E-postadress krävs'),
  password: Yup.string()
    .min(5, 'Lösenord måste vara minst 5 tecken')
    .required('Lösenord krävs'),
};

export const App: React.FunctionComponent = () => {
  const [countries, setCountries] = useState<Country[] | undefined>(undefined);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const local = localStorage.getItem(UserFieldKeys.country);
        if (local?.length) {
          setCountries(JSON.parse(local));
        }
        const response = await fetch('https://restcountries.eu/rest/v2/all');
        if (!response || !response.ok) {
          return;
        }

        const resultText = await response.text();
        const newCountries: Country[] = JSON.parse(resultText) as Country[];
        if (newCountries) {
          localStorage.setItem(
            UserFieldKeys.country,
            JSON.stringify(newCountries)
          );
          setCountries(newCountries);
        }
      } catch (error) {
        alert('Kunde inte hämta länder');
      }
    };
    getCountries();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img title="logo" src={logo} className="App-logo" alt="logo" />

        <div className="App-form">
          <Formik
            initialValues={InitialValues}
            validateOnBlur
            validationSchema={Yup.object(ValidationRules)}
            onSubmit={(
              values,
              { setSubmitting, setErrors, setStatus, resetForm }
            ) => {
              try {
                setTimeout(() => {
                  console.log('Success');
                  if (
                    process.env.NODE_ENV ||
                    process.env.NODE_ENV === 'development'
                  ) {
                    console.log(JSON.stringify(values, null, 2));
                    alert('Tack!');
                  }
                  setSubmitting(false);
                }, 400);
                resetForm({});
                setStatus({ success: true });
              } catch (error) {
                setStatus({ success: false });
                setSubmitting(false);
                // setErrors({ submit: error.message });
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <FormField
                  name={UserFieldKeys.social}
                  placeholder="ÅÅMMDD-XXXX"
                  label="Personnummer"
                />
                <FormField
                  type="email"
                  autoComplete="username"
                  name={UserFieldKeys.email}
                  placeholder="E-post"
                />
                <FormField
                  type="phone"
                  name={UserFieldKeys.phone}
                  placeholder="Telefonnummer"
                />
                <FormField
                  type="password"
                  autoComplete="new-password"
                  name={UserFieldKeys.password}
                  placeholder="Lösenord"
                />
                <div>
                  {countries ? (
                    <FormField
                      name={UserFieldKeys.country}
                      as="select"
                      className="countries"
                    >
                      {countries.map((c) => (
                        <option
                          key={c.alpha2Code || '1'}
                          value={c.alpha2Code || ''}
                        >
                          {c.name} ({c.alpha2Code}) +{c.callingCodes}{' '}
                          {c.topLevelDomain}
                        </option>
                      ))}
                    </FormField>
                  ) : null}
                </div>
                <div className="buttons">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="success"
                  >
                    Submit
                  </Button>
                  <Button
                    type="reset"
                    variant="danger"
                    onReset={() => localStorage.clear()}
                  >
                    Rensa
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </header>
    </div>
  );
};
