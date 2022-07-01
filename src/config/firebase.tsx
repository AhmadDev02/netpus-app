import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD0axIGPZXf4-lpXzgHvcr2Vdwioi_Uv7Q",
    authDomain: "netpus-app.firebaseapp.com",
    projectId: "netpus-app",
    storageBucket: "netpus-app.appspot.com",
    messagingSenderId: "519005644140",
    appId: "1:519005644140:web:1d70da6c0f6fc778553f49"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;