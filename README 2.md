# taipei
Hunter College Chinese Overseas Flagship Program

## Pre-reqs
- Make sure you have Docker installed on your machine.
  - https://www.docker.com/get-started (Follow the instructions for your operating system)

### Tech Stack
- Build Tools/Libraries
  - Webpack
  - Webpack Dev Server with hot-reload
  - Babel
  - Styled React Components
- Backend
  - Node
  - Express
- Frontend
  - React
  - Redux

### Training
- https://reacttraining.com/courses/
  
## Setup Development Environment
Please make sure you have Docker installed. If you do not, then please see the instruction on the Pre-reqs section.

### Building the application
To build the application, run the command:
```
docker-compose build taipei-dev
```

### Start the application
To boot up the stack, run the command:
```
docker-compose up taipei-dev
```

Once the application starts, you will be provided the port number the server is listening on. To test:
1. Open your favorite web browser.
2. Enter the URL: http://localhost:4000

## Deploying
### Install Node tools
- Install NVM
  - https://gist.github.com/d2s/372b5943bce17b964a79
- Install Node v10.15.1
  - Run the command ```nvm install v10.15.1```

### Build the application
- Run the command ```npm install```
- Run the command ```npm run build```
- Run the command ```PORT=4000 npm start```

### Apache
- Enable the modules "mod_proxy" and "mod_proxy_http" within the Apache config.
  - Uncomment the line "LoadModule proxy_module lib/httpd/modules/mod_proxy.so"
  - Uncomment the line "LoadModule proxy_http_module lib/httpd/modules/mod_proxy_http.so"
  - Add the line "ProxyPass /taiwanoverseas http://localhost:4000/taiwanoverseas"
  - Add the line "ProxyPassReverse /taiwanoverseas http://localhost:4000/taiwanoverseas"
