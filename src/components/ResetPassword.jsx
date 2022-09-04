import React, { useState } from 'react';
import MustContainItem from './MustContainItem';

const ResetPassword = () => {
  const styles =  {
    requirements: {
      backgroundColor: '#eee',
      float: 'right',
      padding: '12px',
    },
    requirementsHeading: {
      fontWeight: 'bold',
      fontSize: ' 1.2rem',
    },
  }

  const [ firstPasswordField, setPasswordField ] = useState('');

  // booleans for password validation
  const [ containsMinChar, setContainsMinChar ] = useState(false);
  const [ containsUppercase, setContainsUppercase ] = useState(false);
  const [ containsLowercase, setContainsLowercase ] = useState(false);
  const [ containsNumber, setContainsNumber ] = useState(false);
  const [ containsSymbol, setContainsSymbol ] = useState(false);
  const [ notEmpty, setNotEmpty ] = useState(false);

  // set if all validations have been met
  const [ allValid, setAllValid ] = useState(false);

  // labels and state boolean corresponding to each validation rule

  const mustContainData = [
    ['At least 12 characters', containsMinChar],
    ['Must contain a lower case letter', containsLowercase],
    ['Must contain a upper case letter', containsUppercase],
    ['Must contain a number', containsNumber],
    ['Must contain a symbol', containsSymbol],
    ['Must not be empty', notEmpty],
  ]

  const handleChange = (event) => {
    const firstPasswordFieldNoSpacesValue = event.target.value.trim();
    setPasswordField(firstPasswordFieldNoSpacesValue);
  }

  const handleValidation = (event) => {
    const firstPasswordFieldNoSpacesValue = event.target.value.trim();
    const firstPasswordFieldLength = firstPasswordFieldNoSpacesValue.length;
    const uppercaseRegEx = /(?=.*?[A-Z])/;
    const lowercaseRegEx = /(?=.*?[a-z])/;
    const digitsRegEx = /(?=.*?[0-9])/;
    const specialSymbolRegEx = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegEx = /.{12,}/;

    // below will test the above regular expressions and create a variable for it
    // we will then check that variable and if passes, set state of that rule to that var

    const uppercaseFirstPassword = uppercaseRegEx.test(firstPasswordFieldNoSpacesValue);
    const lowercaseFirstPassword = lowercaseRegEx.test(firstPasswordFieldNoSpacesValue);
    const digitsFirstPassword = digitsRegEx.test(firstPasswordFieldNoSpacesValue);
    const specialSymbolFirstPassword = specialSymbolRegEx.test(firstPasswordFieldNoSpacesValue);
    const minLengthFirstPassword = minLengthRegEx.test(firstPasswordFieldNoSpacesValue);

    // has the minimum characters
    if (minLengthFirstPassword) {
      setContainsMinChar(true);
    } else {
      setContainsMinChar(false);
    }

    // has lowercase characters
    if (lowercaseFirstPassword) {
      setContainsLowercase(true);
    } else {
      setContainsLowercase(false);
    }

    // has uppercase characters
    if (uppercaseFirstPassword) {
      setContainsUppercase(true);
    } else {
      setContainsUppercase(false);
    }

    // has a number
    if (digitsFirstPassword) {
      setContainsNumber(true);
    } else {
      setContainsNumber(false);
    }

    // has symbol
    if (specialSymbolFirstPassword) {
      setContainsSymbol(true);
    } else {
      setContainsSymbol(false);
    }

    // not empty
    if (firstPasswordFieldLength > 0) {
      setNotEmpty(true);
    } else {
      setNotEmpty(false);
    }

    // set if all validations have passed
    if (containsMinChar && containsLowercase && containsUppercase && containsNumber && containsSymbol && notEmpty) {
      setAllValid(true);
    } else {
      setAllValid(false);
    }
  }

  return (
    <div>
      <p>Type password:</p>
      <input
        type="text"
        name="password"
        label="Alex"
        onChange={handleChange}
        onKeyUp={handleValidation} 
        value={firstPasswordField}
      />
      <div style={styles.requirements}>
        <p style={styles.requirementsHeading}>Password Requirements</p>
        {mustContainData.map(data => <MustContainItem key={data} data={data} /> )}
      </div>
    </div>
  )
}

export default ResetPassword;