import React from 'react';

const MustContainItem = (props) => {

  // data is an object we passed down, the key is the rule parameters, the balue is a boolean for meeting the reqs
  const { data } = props;

  // label is equal to the text for that specific rule, the key in the key-value pair
  const label = data[0];

  // meets req is the boolean value, the value in the value pair we passed down
  const meetsReq = data[1];

  // so first array is 'at least 12 characters' at the [0] spot and [1] is the boolean for if it meets requirements or not


  const setClass = () => {

    const classArr = ['must-line'];

    if (meetsReq) {
      // if we meet the requirement push the below as a class name onto the LI element
      classArr.push('alexTest');
      // this can be whatever class name you want

      const alexTest = document.getElementsByClassName('alexTest');

      //need a FOR loop to set style because getElementsbyClassName returns an array
      // and you need to set the index or it will not work at all

      for (let i = 0; i < alexTest.length; i++) {
        alexTest[i].style.color = 'green';
      }
    }
    // this just appends the class names
    return classArr.join(' ');
  }

  return (
    <div>
      <li className={setClass()}>{label}</li>
    </div>
  );

}

export default MustContainItem;