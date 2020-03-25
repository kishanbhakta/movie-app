import React from 'react';

class AboutPage extends React.Component {
    render() {
        return (
            <h1>Hello I am a Class Component in AboutPage</h1>
        );
    }
}

export default AboutPage;



/*
* USE BELOW FOR :
* - SMALLER COMPONENTS
* - REUSABLE COMPONENTS
* - PRESENTATIONAL COMPONENTS, partially right due to HOOKS and specify STATE
*
* ===========================================
* Functional Component using ARROW FUNCTION
* - Presentational Components so you DO NOT
*   keep any states in them
*
* - HOOKS?!?
* ===========================================
*
* */
// const AboutPage = () => {
//     const message = 'This is the About Page!';
//   return (
//       <div>
//           <h1>{message}</h1>
//       </div>
//   );
// };


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

