'use strict';

module.exports = {
    db: process.env.MONGOHQ_URL || null,
    app: {
        name: "RIFF"
    },
    facebook: {
        clientID: "1470094243205738",
        clientSecret: "891b20d6d28ec27800752c73b9fc9abb",
        callbackURL: "http://krakenapp.herokuapp.com/auth/facebook/callback"
    },
    twitter: {
        clientID: "CONSUMER_KEY",
        clientSecret: "CONSUMER_SECRET",
        callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/github/callback"
    },
    google: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/google/callback"
    }
}