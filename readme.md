## App creation

You need to have npm installed

```
$ npm install express-generator -g
$ express beardy-website --git -c sass
```

Then install dependencies:

```
$ cd beardy-website
$ npm install
$ git init
```

 run the app with this command:

```
$ DEBUG=myapp:* npm start
```

## Deploying to heroku

Add file Procfile, containing `web: npm start`

Add heroku support
```
$ heroku create beardy-website