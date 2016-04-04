
var config = {
  development: {
    mode: 'development',
    port: 3000,
    mongo: {
      host: '127.0.0.1',
      port: 27017,
      dbname: 'beardyWebsite',
      url: 'mongodb://127.0.0.1:27017/beardyWebsite'
    }
  },
  production: {
    mode: 'production',
    port: 5000,
    mongo: {
      host: 'heroku_zbpzzzms:heroku_zbpzzzms@ds013738.mlab.com',
      port: 13738,
      dbname: 'heroku_zbpzzzms',
      url: process.env.MONGOLAB_URI
    }
  }
}
module.exports = function(mode) {
  console.log("============== ENV MODE === "+ mode)
  console.log("============== ENV MODE PROCESS === "+ process.argv[2])
  console.log("============== ENV['MONGOLAB_URI']=== "+ process.env.MONGOLAB_URI)
  return config[mode || process.argv[2] || 'development'] || config.development;
}


