import {configDotenv} from "dotenv";
configDotenv()

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb+srv://mariosalazar10utn:1001590650ANDmar10@cluster0.iftvxqz.mongodb.net/mariosalazar";
export const TOKEN_SECRET = process.env.SECRET_KEY;


export const FRONTEND_URL =
    process.env.NODE_ENV_TEST === 'development'
        ? process.env.FRONTEND_URL_DEVELOPMENT
        : process.env.FRONTEND_URL_PRODUCTION;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
export const TWITTER_CLIENT_ID = process.env.TWITTER_CLIENT_ID
export const TWITTER_CLIENT_SECRET = process.env.TWITTER_CLIENT_SECRET
export const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID
export const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_CLIENT_SECRET