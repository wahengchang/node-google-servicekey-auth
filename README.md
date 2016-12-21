#node-google-servicekey-auth

####It is a template of walkthrough on performing server-side authentication with the Google Analytics API and Node.js. 

##process.env.SERVICE_ACCOUNT_EMAIL

##process.env.SERVICE_ACCOUNT_KEY_FILE

## Run
```
$ export SERVICE_ACCOUNT_EMAIL='abc@abc.iam.com'
$ export SERVICE_ACCOUNT_KEY_FILE='./path/of/abc.pem'

$ node main.js
tokens:  { access_token: 'YOUR_ACCESS_TOKEN',
            token_type: 'Bearer',
            expiry_date: '2482307641003',
            refresh_token: 'jwt-placeholder' }

```
