var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = db.model('User');


var authorize = function(email, password, done) {

  User.find({ where: { email: email }, attributes: ['id', 'name', 'email', 'password', 'salt']}).complete(function(err, user){
    if (err) { 
      done(err); 
    }
    else if (!user) {
      done(null, false, { msg: 'Invalid username.' });
    }
    else if (!user.verifyPassword(password)) {
      done(null, false, { msg: 'Incorrect password.' });
    }
    else{

      // editable copy of user
      user = JSON.parse(JSON.stringify(user));

      // prevent exposure of password and salt 
      // ideally this should be excluded using attributes option in query
      // but that prevents verifyPassword() from working since salt and password aren't defined
      // we don't really need to do this here, just when user is passed back to client
      // better to be safe though
      // TODO: find better solution to this
      delete user.password;
      delete user.salt;

      done(null, user);
    }
  
  });
};

passport.use(new LocalStrategy({usernameField: 'email'}, authorize));

