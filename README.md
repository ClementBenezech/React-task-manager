# What is this app?

A few days ago, I took a technical test with multiple tasks, and one of them was to create a very very simple Todo App component, with one input to create new tasks, a button to add them, and the ability to toggle their className when they got clicked (Active/completed). The time was very limited and i got confused as I felt I had to use class components which was not natural to me, but I got most of it, and this process is still ongoing.

Anyways, what started as "me wanting to write a clean version using hooks instead in a limited time" ended up as "Let's spend 3 days writing a complete responsive layout using a Redux store (Ok this might have been overkill for this project, but you never practice too much!)


And I was actually surprised by two things:

    For most of it, I did not have major technical difficulties.
    This was actually rather time consuming!

I mean, "it's just a simple "todo app", right?

Sure, but still, a lot of things are involved here:

    React.
    Redux for state management.
    SASS for responsive styling.
    Material UI for the datepicker (using fns-date)

It also uses quite a lot of hooks to handle renders and side effects: useRef, useState, useSelector, useDispatch, useEffect...


Of course this would have been faster if I actually thought I was going to build such an "evolved" version of my initial idea :) So there was a lot of changes in the layout as things evolved and content was added. The code has been refactored 2 times, setting out some business logic in separate JS files, breaking dow components into smaller units...

I also commented it so you can go have a look on my github repository here:

github.com/ClementBenezech/React-task-manager

And a live build here:

nice-task-tracker.netlify.app

Feel free to give me some feedback, and I'll be happy to answer any questions :)

#reactjs
#redux
#sass
#reacthooks

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
