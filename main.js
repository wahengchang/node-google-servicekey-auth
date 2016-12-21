var googleapis = require('googleapis');

var SERVICE_ACCOUNT_EMAIL = process.env.SERVICE_ACCOUNT_EMAIL;
var SERVICE_ACCOUNT_KEY_FILE = process.env.SERVICE_ACCOUNT_KEY_FILE;

var jwtClient = new googleapis.auth.JWT(
    SERVICE_ACCOUNT_EMAIL, // I store my stuff in an .env file so it's not in the file
    SERVICE_ACCOUNT_KEY_FILE, //wherever you can access this file
    null, ['https://www.googleapis.com/auth/analytics.readonly'] //scope
);

jwtClient.authorize(function(err, tokens) {
    if (err) {
        console.log('err: ', err);
        return;
    } else {
        console.log('tokens: ', tokens);
    }
});