# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

Use the following steps to setup the project on your machine:

1. Install [Docker](https://docs.docker.com/get-docker/)
2. Verify that docker was successfully installed by running `docker -v` and `docker-compose -v` in your terminal
3. In the project root, run `docker-compose up`
4. If docker is working correctly, the backend you should be running and able to connect to the `database`. To confirm this, visit [http://localhost:3000/api/ping](http://localhost:3000/api/ping) in your browser
5. To confirm if the frontend is running, visit [http://localhost:3001/register](http://localhost:3001/register) in your browser
6. To confirm that the frontend is connected to the backend, try to register on the frontend and everything should work fine.

Running into any issues? ping _@aremu-smog_ on slack
