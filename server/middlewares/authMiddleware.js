module.exports = {
   usersOnly: (req, res, next) => {
      if (!req.session.user) {
         return res.status(401).json({message: 'Please log in.'})
      }
      next();
   }
}