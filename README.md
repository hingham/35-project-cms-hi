## CMS - React-Redux API Front-End

### Author: Student/Group Name

### Description: 
* React-Redux App
* Shows all records in a API based on user selected route
* Uses react form to dynamically create a form using api shemas
* Allows users to read, create, update and delete records from database

### Links and Resources
* [repo](https://github.com/hingham/35-project-cms-hi)
* [travis](http://xyz.com)
* [front-end](http://cms-api-lab-hi.s3-website-us-west-2.amazonaws.com/)

### Modules
#### `actions.js` 
#### `cms.js`
#### `models.js`
#### `record.js`
#### `records.js`
#### `reducers.js`


###### Usage Notes
* Forms allow for crud opperation on a data base
* schemas: players, teams, categories, and products
* Update, Add, Delete, and Read records indata base

### Setup
#### `.env` requirements
* View package.json for all depencencies
* `npm run build` to ready app for deployment

#### Running the app
* `npm start`
* Endpoint: `/`
  * Returns form that renders saved records corresponding to selected route
  * Shows form that allows user to add or update selected record from database
  * Form rendered based on schema stored in API

#### Tests
* `npm run tests`

#### UML
![image](./assets/uml.JPG)
