import "./App.css";
import SignUpScreenpatient from "./screens/sign-up-patient/SignUpScreenpatient";
// import { useState } from "react";

import "./counterButton.css";

// import Dashboard from './screens/dashboard-admin/Dashboard'
// import DeleteAdmin from './screens/delete-admin/DeleteAdmin'
// import LoginScreen from './screens/login-screen/LoginScreen'
// import SignUpScreen from './screens/sign-up-admin/SignUpScreen'
// import ChatPage from './screens/chat-screen/ChatPage'

// const Counter = () => {
//   const [currentCounterValue, setCurrentCounterValue] = useState(1000);

//   const incrementCounter = () => {
//     setCurrentCounterValue(currentCounterValue + 1);
//   };

//   const decrementCounter = () => {
//     if (currentCounterValue > 1000) {
//       setCurrentCounterValue(currentCounterValue - 1);
//     } else {
//       window.alert("Can not decrement counter below 1000");
//     }
//   };

//   return (
//     <div>
//       <h2>Counter value: {currentCounterValue}</h2>
//       <div className="button-container">
//         <button className="button-increment" onClick={incrementCounter}>
//           Increment
//         </button>
//         <button className="button-decrement" onClick={decrementCounter}>
//           Decrement
//         </button>
//       </div>
//     </div>
//   );
// };

function App() {
  return (
    <>
      {/* <Counter /> */}
      <SignUpScreenpatient />
      {/* <Dashboard />
      <LoginScreen />
      <SignUpScreen />
      <DeleteAdmin />
      <ChatPage /> */}
    </>
  );
}

export default App;
