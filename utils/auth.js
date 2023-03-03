const withAuth = (req, res, next) => {
    if (!req.session.userId) {
      res.redirect("/login");
    } else {
      next();
    }
  };
  // sets up authentication necessary to make sure users are logged in to see db
  module.exports = withAuth;