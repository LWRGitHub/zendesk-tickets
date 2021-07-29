# Zendesk Tickets
This web app is designed to access Zendesk tickets through the API. this is a full stack web app that uses Pug for the front end & Node.js for that back end. Simply fill in the .env & setup instructions bellow to access your Zendesk tickets.

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/LWRGitHub/zendesk-tickets/blob/main/LICENSE)


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

***Main Page***

<img alt="Index page of the Zendesk ticket site. The image has Zendesk tickets & A title bar." src="https://raw.githubusercontent.com/LWRGitHub/zendesk-tickets/main/public/img/index-pg-top.png" />

***Footer***

<img alt="Footer of the Zendesk ticket site. This image has a footer with a copyright, it displays Zendesk tickets and navigation links to the other pages." src="https://raw.githubusercontent.com/LWRGitHub/zendesk-tickets/main/public/img/index-pg-bottom.png" />

***Friendly Error Message***

<img alt="Friendly error message that appears when failure to connect to API happens. It shows the error message where the ticket info would go, The page has a title bar and footer with a copyright." src="https://raw.githubusercontent.com/LWRGitHub/zendesk-tickets/main/public/img/friendly-err-msg.png" />


## Acknowledgements

 - [Zendesk API](https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/)

## Author

- [@LWRGitHub](https://github.com/LWRGitHub)

