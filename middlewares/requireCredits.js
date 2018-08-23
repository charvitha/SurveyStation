module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({
      error:
        'Please reload your credits, there are not enough to send out the survey!'
    });
  }

  next();
};
