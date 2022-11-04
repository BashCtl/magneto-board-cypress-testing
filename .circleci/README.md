 # Example of using Cypress with Typescript and integration into CircleCi

 ## Required:
 - NodeJs must be installed

## Project Installation:
 - npm install

## Run localy: 
 - npm run test

## Triger CircleCi Workflow using Postman:
    Create CircleCi token for the project.
    URL for request:
    https://circleci.com/api/v2/project/github/{github account}/{project title}/pipeline
    Add header with key "Circle-Token" with your token value
    Pass body for request:

    `{
    "branch": "master",
    "parameters": {
        "ApiTrigger": true,
        "SmokeTrigger": false,
        "browser": "chrome"
    }
    }`

    - branch - branch name
    - ApiTrigger -  run all tests if  true
    - SmokeTrigger - run smoke suite if true
    - browser - browser type

