exports.config = {
  modules: ['copy'],
  watch: {
    throttle:5,
    usePolling:false
  },
  logger: {
    growl: {
      enabled: false
    }
  }
};