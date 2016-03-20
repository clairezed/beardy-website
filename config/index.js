// DEV :  mongodb://127.0.0.1:27017/beardyWebsite
// PROD : mongodb://<dbuser>:<dbpassword>@ds013738.mlab.com:13738/heroku_zbpzzzms
          // mongodb://heroku_zbpzzzms:heroku_zbpzzzms@ds013738.mlab.com:13738/heroku_zbpzzzms
          // mongodb://heroku_zbpzzzms:urqbl8rp5ialabnfae7487p0o@ds013738.mongolab.com:13738/heroku_zbpzzzms
//        mongodb://example:example@ds053312.mongolab.com:53312/todolist"


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
  // staging: {
  //   mode: 'staging',
  //   port: 4000,
  //   mongo: {
  //     host: 'heroku_zbpzzzms:heroku_zbpzzzms@ds013738.mlab.com',
  //     port: 13738,
  //     dbname: 'heroku_zbpzzzms',
  //     url: ENV['MONGOLAB_URI']
  //   }
  // },
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


