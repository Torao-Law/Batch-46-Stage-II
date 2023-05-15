// import  Header from "./components/Header"
// import Embed from "./components/Embed"
// import Event from "./components/Event"
// import Props from "./components/Props"
// import State from "./components/State"

import { useState } from "react"

// function Content(){
//   return (
//     <>
//       <h1>This is a Content</h1>
//       <button>Click Here</button>
//     </>
//   )
// }

function PrivatePage(props) {
  return (
    <>
      <h1>Welcome</h1>
      <button onClick={props.logout}>Logout</button>
    </>
  )
}

function LoginPage(props) {
  return (
    <>
      <h1>Please Signin</h1>
      <button onClick={props.login}>login</button>
    </>
  )
}


function App() {
  const [isLoggedin, setIsLoggedin] = useState(true) // false

  return (
    <>
      {/* <Content />
      <Header /> */}
      {/* <Embed /> */}
      {/* <Event /> */}

      {/* <h1>Contoh Penerapan Props</h1> */}
      {/* <Props data="BMW" price="9M" series={series}/>
      <Props data="RUBICON" price="15M" series={series}/>
      <Props data="MERCEDES" price="3M" series={series}/> */}

      {/* <State /> */}

      {
        isLoggedin ? (<PrivatePage logout={() => setIsLoggedin(!isLoggedin)} />) : (<LoginPage login={() => setIsLoggedin(!isLoggedin)} />)
      }
    </>    
  );
}

export default App;
