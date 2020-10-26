## The GraphQL Guide React Native app

- Entry point: [App.js](https://github.com/GraphQLGuide/guide-react-native/blob/master/App.js)
- Two screens, each with a GraphQL query:
  - [src/HomeScreen.js](https://github.com/GraphQLGuide/guide-react-native/blob/master/src/HomeScreen.js)
  - [src/ChapterScreen.js](https://github.com/GraphQLGuide/guide-react-native/blob/master/src/ChapterScreen.js)

This example app is built, tutorial-style, in the React Native chapter of [The GraphQL Guide](https://graphql.guide/). Here are the tutorial steps:

- [Starting branch: 0](https://github.com/GraphQLGuide/guide-react-native/tree/0) app skeleton
- [Step 1: 0...1](https://github.com/GraphQLGuide/guide-react-native/compare/0...1) adding Apollo Client and first query
- [Step 2: 1...2](https://github.com/GraphQLGuide/guide-react-native/compare/1...2) adding second screen and query
- [Step 3: 2...3](https://github.com/GraphQLGuide/guide-react-native/compare/2...3) persisting the cache

### Running the app

```sh
git clone https://github.com/GraphQLGuide/guide-react-native.git
cd guide-react-native/
npm install
npm start
```

This will start the Expo bundler, and you can open the app on Android, iOS, or web.

![App running on iOS device](https://res.cloudinary.com/graphql/image/upload/v1601574720/guide/expo-home-screen.png)
