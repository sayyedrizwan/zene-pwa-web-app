import { getToken } from "firebase/messaging";
import { firebaseMessaging } from "./firebase";

// export const getToken = (setTokenFound) => {
//     return getToken(messaging, { vapidKey: 'BIwL93F9wFcoIVTYnGhs7iMackQlDbFYKEVbrtCSxRQljWLNFoVQbMOHccBGOG9HZbE7AhZuvBHdgUIu31GBG9M' }).then((currentToken) => {
//         if (currentToken) {
//             console.log('current token for client: ', currentToken);
//             setTokenFound(true);
//             // Track the token -> client mapping, by sending to backend server
//             // show on the UI that permission is secured
//         } else {
//             console.log('No registration token available. Request permission to generate one.');
//             setTokenFound(false);
//             // shows on the UI that permission is required 
//         }
//     }).catch((err: Error) => {
//         console.log('An error occurred while retrieving token. ', err);
//         // catch error while creating client token
//     });
// }

export async function getFCMToken() {
   const t = await getToken(firebaseMessaging!, { vapidKey: 'BIwL93F9wFcoIVTYnGhs7iMackQlDbFYKEVbrtCSxRQljWLNFoVQbMOHccBGOG9HZbE7AhZuvBHdgUIu31GBG9M' })
   console.log(t)
}