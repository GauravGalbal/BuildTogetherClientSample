import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ContextProvider from './components/contexts/dataProvider'

import UserPage from './components/Pages/UserPages/userPage'
import HomePage from './components/Pages/HomePage/HomePage'



function App() {
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = "https://cdn.botpress.cloud/webchat/v0/inject.js"
  //   script.async = true;
  //   script.onload = () => {
  //     window.botpressWebChat.init({
  //       "botId": "798f89b4-babe-4666-b3da-2ff2dc5abfac",
  //       "hostUrl": "https://cdn.botpress.cloud/webchat/v0",
  //       "messagingUrl": "https://messaging.botpress.cloud",
  //       "clientId": "798f89b4-babe-4666-b3da-2ff2dc5abfac",
  //       "botName": "Dashboard Bot",
  //       "phoneNumber": "+91 456789",
  //       "termsConditions": "https://abcd.com/terms",
  //       "privacyPolicy": "https://abcd.com/privacy",
  //       "emailAddress": "abcd@gmail.com",
  //       "website": "abcd@gmail.com",
  //       "useSessionStorage": true,
  //       "showBotInfoPage": true,
  //       "enableConversationDeletion": true,
  //       "showPoweredBy": false
  //   });
  //     window.botpressWebChat.onEvent(() => {
  //     window.botpressWebChat.sendEvent({ type: 'show' });
  //   }, []);
  //   }

  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <ContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/user' element={<UserPage />} />
      </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
