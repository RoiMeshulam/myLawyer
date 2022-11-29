import React from 'react';
import logo from '../pic/logo.PNG'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Lawyerlogo() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" class="responsive"/>;
}

export default Lawyerlogo;