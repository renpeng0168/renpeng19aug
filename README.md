# renpeng312
Brief
The objective of this assignment is to set up a continuous integration and continuous deployment (CI/CD) pipeline for a Node.js application that is deployed on a serverless platform.

documentation: 
# Create a code repository for the application on a version control system such as Git: use Git asversion control system to keep track of changes to the code. To create a new Git repository, navigate to your project directory in the command line and run git init. This will initialize a new Git repository in your project directory.

# Create a new Node.js application using the Express framework: 
## First, install Node.js and the Express framework on local machine. Then, initialize it as a Node.js project by running npm init in the command line. After that, create a new file called index.js where we can write the code for your Express application.

# Set up automatic testing for the application using a testing framework such as Jest 
## choose to use Jest as testing framework. To set up automatic testing, need to install the testing framework by running npm install --save-dev jest (for Jest) in the command line. Then,create a new test files: index.test.js. Configure package.json file to run tests automatically by adding a test script.


# Set up a CI/CD pipeline using Github Action, create a new file called .github/workflows/main.yml in the project directory. This file contain instructions for building and testing your code whenever changes are pushed to the code repository.

# Configure the pipeline to automatically build and test the code whenever changes are pushed to the code repository: add steps for building and testing your code. like steps that runs npm install to install dependencies and another step that runs npm test to run your tests.

# Deploy the application to a serverless platform: AWS Lambda

# Configure the pipeline to automatically deploy the code to the serverless platform whenever changes are pushed to the code repository and all tests pass. set up the githup secrect to include necessary aws credential. and make sure the workflow perssion is enabled for action.
