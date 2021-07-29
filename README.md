# Zendesk Tickets 
This web app is designed to access Zendesk tickets through the API.


## Tech Used
- JavaScript
- Node.js
- Pug
- Express
- Bootstrap
- dotenv
- request
- Mocha
- Chai
- sinon


## Install, Setup, Test & Run

### Install/Setup
```
git clone https://github.com/LWRGitHub/zendesk-tickets.git
cd zendesk-tickets
npm install
mv .env.example .env
```
***Make sure to setup your .env file***

**.env Example:**

```
EMAIL="exampleemail@email.com"
PASSWORD="password"
ZENDESK_DOMAIN="zccstudents"
```

### Test

```
npm run test
```

### Run @ localhost:3000

```
nodemon
```

## IMG