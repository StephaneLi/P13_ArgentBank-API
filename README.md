# ARGENTBANK : P13 - Openclassrooms
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).  
![made-with-node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![made-with-react](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=FFFFFF) ![made-with-sass](	https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) 
![GitHub repo size](https://img.shields.io/github/repo-size/StephaneLi/StephaneLieumont_11_10032022)
![GitHub jest](https://img.shields.io/badge/coverage-72%25-yellow)  

## Project
The project concerns a new start-up bank, Argent Bank, which is trying to break into the sector and which needs help to set up its application

## Deliverables
[DEMO WITH MOCK API](https://oc.sli-3d.fr/P13_ArgentBank/) [Warning!! the data is not persistent because the API is not deployed]  
[SWAGGER API](https://github.com/StephaneLi/StephaneLieumont_13_28042022/blob/master/docs/swagger-transaction.yml)   
[REACT APP](https://github.com/StephaneLi/StephaneLieumont_13_28042022/tree/master/react_app)   

## Argent Bank FULL STACK
The compose docker file allows you to create a stack with the API and the frontend. The `.env.sample` file should be used as a basis for adding environment variables to an `.env` file at the root of the project.

## Argent Bank FRONT  

#### ENVIRONMENT

The `.env.sample` file should be used as a basis for adding environment variables to an `.env` file at the root of the project.  

| VARIABLE | REQUIRED | DEFAULT | DESCRIPTION 
|:-------:|:------:|:----:|:---
| REACT_APP_API_HOST | YES | `http://localhost:3000/` | example : 'http://localhost:3001/api/v1'
| REACT_APP_DEPLOY_MOCK | NO | `false` | usefull for demo example without api deployement

#### Available Scripts  
##### `npm start`
In the project directory, you can run:
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

##### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!  
Don't forget to add .env file with variables needed   

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `npm run test`
run units test Jest application

##### `npm run coverage`
see test coverage of application

##### `npm run deploy`
Deploy website on github page  
Don't forget to add .env file with variables needed   


## Argent Bank API

This codebase contains the code needed to run the backend for Argent Bank.

#### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

#### Instructions

1. Fork this repo
1. Clone the repo onto your computer
1. Open a terminal window in the cloned project
1. Run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

#### Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

##### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

##### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

### API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs

## Design Assets

Static HTML and CSS has been created for most of the site and is located in: `/designs`.

For some of the dynamic features, like toggling user editing, there is a mock-up for it in `/designs/wireframes/edit-user-name.png`.

And for the API model that you will be proposing for transactitons, the wireframe can be found in `/designs/wireframes/transactions.png`.
