## Welcome to React App Patterns class!

### Table of Contents

* [Step 0: Fork This Repository](#step-0-fork-this-repository)
* [Step 1: Use `create-react-app` to scaffold our UI](#step-1-use-create-react-app-to-scaffold-our-ui)
* [Step 2: Web "Pages"](#step-2-web-pages)

#### Step 0: Fork This Repository

When the photocopy is finished, clone it to your desktop and `cd` into it:

```
git clone <your_fork>
cd react-patterns
```

This folder will act as the "wrapping" folder for our application, meaning it is not the root of our "React App", it is the root of the entire application.

#### Step 1: Use `create-react-app` to scaffold our UI

As of May.31 / 2018, `create-react-app` is version `1.5.2`. You can use `npm view create-react-app` to check which versions are available.

```
# note: npx, not npm.
# If this command doesn't work you need to update your version of npm
npx create-react-app ui
```

Make sure everything installed correctly:

```
cd ui
npm start
# or yarn start.. your terminal should let you know what it used to install
```

This will start a dev server that hosts a web page (probably on `http://localhost:3000`) that looks something like this:

![cra](https://i.imgur.com/Vz81WKC.png)

That's great, but we're going to make our own app. **Nuke the `src` folder's contents!**

```
rm -rf src/*
```

Your running web page should be borked now, with a similar error:

![borked](https://i.imgur.com/agZl7d6.png)

#### Step 2: Web "Pages"

At some point in the future we will have "an app", that "does a thing". Until then, we can take advantage of NodeJS's ability to load JavaScript files at runtime, paired with CRA's webpack config to develop "components" or "pages". Once we have something worth deploying we can point our build script to the "root folder" which loads the code we want.

Let's start by reviving our index file:

```
touch src/index.js
```

Creating this file _should_ clear the web page error and leave us with a blank slate to build our application on. For instance, we can store the current URL and print it on the screen:

```
let { pathname } = window.location;
document.body.innerHTML = pathname;
```

We can use the `pathname` to dynamically `require` another JavaScript file:

```
require(`.${pathname}`)
```

Now if we create a file called `Hello.js` with the following contents:

```
let title = document.createElement('h1')
title.innerHTML = 'Hello world!'
document.body.appendChild(title)
```

..and visit http://localhost:3000/Hello we should see:

![hello](https://i.imgur.com/LvEScxi.png)
