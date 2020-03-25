import React from 'react';
/*
* ===========================================
* Functional Component using ARROW FUNCTION
* - Presentational Components so you DO NOT
*   keep any states in them
*
* - HOOKS?!?
* ===========================================
*
* */
const AboutPage = () => {
    const message = 'This is the About Page!';
  return (
      <div>
          <h1>{message}</h1>
      </div>
  );
};

export default AboutPage;

/*
* =============================================================
* Functional Component using ARROW FUNCTION and createElement()
* =============================================================
*
* */
// const AboutPage = () => {
//     const message = 'This is the About Page!';
//     return React.createElement('h1', null, 'I am generating this with createElement()');
// };

/*
* ===========================================
* Functional Component using NORMAL FUNCTION
* ===========================================
*
* */
// function AboutPage() {
//   return (
//       <div>
//           <h1>The is the About Page!</h1>
//       </div>
//   );
// }

