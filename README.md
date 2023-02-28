# code-challenge

## Running the project

In order to run backend on port 3001, go to the **server** folder and run the following in the terminal:

- npm install
- npm start

In order to run frontend on port 3000, go to the **client** folder and run the following in the terminal:

- npm install
- npm start

## Testing the backend

In order to run tests, go to the **server** folder and run: npm test. I don't have any experience with writing tests in node.js, so I couldn't figure out why test are failing, but code can be seen in api.test.js within server folder.

## Implementation

In node.js backend, I separated out routes for login and encode in a way that I added additional /api route
for encode so that we can know that it is a part of the API that requires user to be authenticated and it's
not a public route like /login.

In React frontend, I separated components for form and input and created two pages Encoder and Login. I
added login-data-store to keep default login data in global storage and user's token so that it can be
called on any page.

The only thing that I didn't implement on frontend is form validation. I'm not so familiar with
Formik and useForm hook and it would take me more time to research and figure out how to
add schema with validations and then base form data upon that schema to validate every input field value.
