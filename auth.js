const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const passport = require('passport');

passport.use(new JWTstrategy({
    //secret we used to sign our JWT
    secretOrKey : 'secret',
    jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken()
}, (token, done) => {
    try {
        //Pass the user details to the next middleware
        return done(null, token);
    } catch (error) {
        done(error);
    }
}));