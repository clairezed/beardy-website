// DEV :  mongodb://127.0.0.1:27017/beardyWebsite
// PROD : mongodb://<dbuser>:<dbpassword>@ds013738.mlab.com:13738/heroku_zbpzzzms
//        mongodb://example:example@ds053312.mongolab.com:53312/todolist"


var config = {
  development: {
    mode: 'development',
    port: 3000,
    mongo: {
      host: '127.0.0.1',
      port: 27017,
      dbname: 'beardyWebsite'
    }
  },
  staging: {
    mode: 'staging',
    port: 4000,
    mongo: {
      host: 'heroku_zbpzzzms:heroku_zbpzzzms@ds013738.mlab.com',
      port: 13738,
      dbname: 'heroku_zbpzzzms'
    }
  },
  production: {
    mode: 'production',
    port: 5000,
    mongo: {
      host: 'heroku_zbpzzzms:heroku_zbpzzzms@ds013738.mlab.com',
      port: 13738,
      dbname: 'heroku_zbpzzzms'
    }
  }
}
module.exports = function(mode) {
  console.log("============== ENV MODE === "+ mode)
  console.log("============== ENV MODE PROCESS === "+ process.argv[2])
  return config[mode || process.argv[2] || 'development'] || config.development;
}


