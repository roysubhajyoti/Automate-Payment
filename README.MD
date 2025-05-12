### Automate - Payment with Cypress:

#### Framework : Cypress

## Setup Steps :

#### Steps to install Cypress:

- create a folder `makdir folder_name`
- `cd folder_name`
- `npm init`
- `npm i cypress --save-dev`

#### To run cypress app :

- Enter `npx cypress open ` in terminal
- Cypress app will be open , for the first time you have to accept the configuration.
- Accept and continue.
- Choose a browser

- Create a config.js file in root folder

```
module.exports = {
  email: "YOUR_email@gmail.com",
  password: "emailPass",
};
```

### Now you can go to the Cypress App and execute the file one by one:

Steps :

- login credentials will be automated .
- OTP will be sent to your Phone.
- At this moment automation is paused.
- Enter OTP click on the resume button on the `top right` side of side bar .
- Next processes will be automated.
- When proceed to pay is engaged, sometimes there is a modal popup I have handle that manually.
- At this moment the process will be paused so please click on `No Thanks`
- And again click on the resume button .

- Remaining process is automated.

#### Some note :

- product that are being search may be the product that would be added to the cart
- Failed payment simulation has been done.
- Success Payment Simulation could not be tested as OTP limit crossed

Thank you !!
