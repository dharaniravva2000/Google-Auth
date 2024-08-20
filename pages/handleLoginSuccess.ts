import { type CredentialResponse } from "vue3-google-signin";

// handle success event
export const handleLoginSuccess = async (response: CredentialResponse) => {
const { credential } = response;
let user;
if (credential) {
user = await useFetch("/api/google-login", {
method: "POST",
body: {
token: credential,
},
});
}

console.log("Access Token", credential);
};
