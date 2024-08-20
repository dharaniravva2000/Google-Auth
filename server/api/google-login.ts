import{OAuth2Client} from "google-auth-library";

//Get Config Runtime Variables
const config = useRuntimeConfig();
//create google client
const googleClientId= config.googleClientId;

const client = new OAuth2Client(googleClientId);

//API event Handler
export default defineEventHandler(async(event) => {
    const body = await readBody(event);
    const token=  body.token;

    if(!token){
        throw createError({
            statusCode: 400,
            statusMessage: 'No token or invalid token provided',
        })

        }


    

    const user = verify(token).catch(console.error);

    return user;
  });

  /**
   * @desc verifies Json web token and return user data if the token is valid
   * @param token Json Web token from google
   * @returns
   */

async function verify(token: string) {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: googleClientId,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  return payload;
  //const userid = payload['sub'];
  // If the request specified a Google Workspace domain:
  // const domain = payload['hd'];
}
  