# Eurail Challenge (Contact List 📞)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\

# Available Scripts
###
### `Development`
In the project directory, you can run:
```shell
 yarn start 
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
### `Test`
```
yarn test
```

Launches the test runner in the interactive watch mode.\
All tests cases made with [jest](https://jestjs.io/), [react-testing-library](https://testing-library.com/) and [msw](https://mswjs.io/).
### `Build`
```
yarn build
```
### `Production`
You can run project after build on production mode with this command:
```
npx serve build/
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
### `Deploy`
```
yarn deploy
```
Deploy the project on GitHub by running this command. This feature is implemented using [Github page](https://pages.github.com/).\
See the live version of production in this [Link](https://husseinakbari.github.io/eurail-challenge/)
### `Eject`
```
yarn eject
```
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.



### `Docker`
You can also run this project on a docker container.\
#### 1- build docker image:
```
docker build . -t eurail-challenge
```
#### 2- run the docker image
```
docker run -p 3000:80 -d eurail-challenge
```
#### 3- You can see the `eurail-challenge` in production mode at [http://localhost:3000](http://localhost:3000)

<br>
<br>

## Contribute 🧩

Want to contribute? I would really appreciate a hand with the development to add more features in this app.
Feel free to Fork, edit, then pull!
