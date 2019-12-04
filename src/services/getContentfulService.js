const contentful = require("contentful");
const SPACE_ID = "xd8y5qe1attb";
const ACCESS_TOKEN = "saJqB-lLlWNKxG6Em7kui82HU1C92JD457qIWSaTNTU";

class getContentfulService {
  export default getClient {
           const client = contentful.createClient({
           // This is the space ID. A space is like a project folder in Contentful terms
           space: SPACE_ID,
           // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
           accessToken: ACCESS_TOKEN
           });
           // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
           return client;
  }
}
