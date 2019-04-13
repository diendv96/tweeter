This project was bootstrapped with [Create React Index](https://github.com/facebook/create-react-app).

## Set up Fake Api server
### `npm install -g json-server`
### `cd server`
### `json-server --watch db.json -d -p 3001`

## Available Scripts

In the project directory, you can run:

### `npm start`

## Or use Docker
### `docker build . -t tweeter:1.0`
### `docker run -p 8080:80 tweeter:1.0`