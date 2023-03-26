module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // NOTE: `expo-router/babel` is a temporary extension to `babel-preset-expo`.
      require.resolve("expo-router/babel"),
      require.resolve("react-native-paper/babel"),
      require.resolve("@babel/plugin-proposal-export-namespace-from"),
      require.resolve("react-native-reanimated/plugin"),
    ],
  };
};
