module.exports = function (webpackEnv) {
  // ...
  return {
   // ...
    resolve: {
      // ...
      fallback: {
        // 👇️👇️👇️ add this 👇️👇️👇️
        "timers": false
      }
    }
  }
}
