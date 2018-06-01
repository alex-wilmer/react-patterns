## Welcome to React App Patterns class!

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
