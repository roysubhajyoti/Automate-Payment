### Automate - Payment with Cypress:

#### Framework : Cypress

#### Steps to install Cypress:

- create a folder
- `cd folder_name`
- `npm init`
- `npm i cypress --save-dev`

#### To run cypress app :

- Enter `npx cypress open ` in terminal
- Cypress app will be open , for the first time you have to accept the configuration.
- Accept and continue.
- Choose a browser

### Click on the specific file which you want to run in cypress App

## Steps :

- Create a config.js file in root folder

```
module.exports = {
  email: "YOUR_email@gmail.com",
  password: "emailPass",
};
```

- Now you can go to the Cypress App and execute the file one by one

#### Some important note :

- product that are being search may be the product that would be added to the cart
