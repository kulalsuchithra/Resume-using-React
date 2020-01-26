//import React from 'react';
// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// import React from 'react';
// import Child from './Child';
// import Grandchild from './Grandchild';
// class App extends React.Component{
//   render(){
//     return(
//       <div>
//       <Child></Child>
//       <Grandchild></Grandchild>
//       </div>
    
//     )
//   }
// }

// // function App(){
// //   return <h1>MicroDegree</h1>
// // }
// export default App;
import React from 'react';
import Myimage  from './Myprofile.png';
class App extends React.Component{
    render(){
      return( <div class="outer">
        <img src={Myimage}/>
        <h1>FullStackDeveloper</h1><br/>
        <b>Name:Suchithra</b><br/>
        <b>phone:8695326598</b><br/>
        <b>Email_Id:ss@gmail.com</b>

        <br/>
        
        <div class="border">
           <b>Objective:</b>
          <p>To be an enthusiastic and motivated professional, and be the part of a challenging work environment where I can use my skills towards a sense of achievement and for the growth of the organization.</p>
       <br/>
      

<div class="border1">
<b>Skills:</b><br/>

<b>TechnicalSkills:</b><br/>
<br/>
<ul>
 <li><b>operating System:</b> ubuntu,windows </li><br/>
  <li><b>programming Languages:</b> JavaScripts,Java,Python </li><br/>
 <li><b>Web Technologies:s</b> HTML,CSS </li>
</ul><br/>

<p><b>Other Skills</b><br/></p>
<ul>
<li>Positive attitude</li>
<li>Time Management</li>
<li>Teamwork</li>
<li>Leadership Quality</li>
</ul>
<br/>
</div>
</div>
      


<div class="border2">
        <b><h3>Acheievements</h3></b>
    
    <br/>
    <h1><b>Co- curricular achievements </b></h1><br/>
    <ul>
        <li>Actively organized the event 'RDBMS' as a volunteer of the event in 'Semaphore 2019'</li>
        <li>Worked as NSS volunteer and  also attended NSS Special Camps.</li>
    </ul><br/>
    <h1><b>Co- curricular achievements </b></h1><br/>
<ul>
    <li>Certificate course Diploma In Computer Application from HICE.</li>
    </ul>
<br/>
    </div>
    <div class="border3">
        <b>EDUCATIONAL QUALIFICATION</b>
        <table>
        <tr>
            <th>Degree</th>
            <th>Institution Name</th>
            <th>Percentage</th>
            <th>Year of passing</th>
        </tr>
    </table>
   
    
    <br/>

    </div>
    <div class="border4">
    <b>PERSONAL DETAILS</b></div>
    <ul>
        <li><b>DOB:</b> 14-12-1996</li>
        <li><b>Gender:</b> Female</li>
        <li><b>Mother's Name:</b> Mrs. Siddu</li>
        <li><b>Father's Name: </b>Mr. Rama Kulal</li>
        <li><b>Languages:</b>English, Kannada, Tulu</li>
    </ul>
    <br/>
    <div class="border5">
        <h1><b>DECLARATION</b></h1><br/>
        <p><i>I do here by solemnly declare that all the information furnished above is true and correct to the best of my knowledge and belief.

        </i></p>
    </div>
    </div>
    
    
    
      

      )
      
     }
   }
   export default App;
