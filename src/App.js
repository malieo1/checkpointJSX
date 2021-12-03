import React from 'react' ;
import './App.css'; 
import image from './ImageInSrc.jpg' ; 




class App extends React.Component {
 
 
 render() {
    
  return (
   <div>
     <div style={{ border: "solid 1px black", maxWidth: "130vw" }}>
       <h1 className="title_red">Your name here</h1>
        <br />
         <img src= {image} className="center" />
          <br />
         <img src="/ImageInPublic.jpg" alt="im about to cry"  />
      </div>
         <video width={320} height={240} controls>
           <source src="https://youtu.be/XEi___sWv98" type="video/mp4" />
           </video>

    </div>

    );
  }
}

export default App ;
