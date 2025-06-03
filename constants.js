const env = import.meta.env;    // Loading variables from .env file.



export const API_KEY = env.VITE_apiKey;
export const AUTHDOMAIN = env.VITE_authDomain;
export const PROJECTID = env.VITE_projectId;
export const STORAGE_BUCKET = env.VITE_storageBucket;
export const MESSAGING_SENDER_ID = env.VITE_messagingSenderId;
export const APP_ID = env.VITE_appId;
export const MEASUREMENT_ID = env.VITE_measurementId