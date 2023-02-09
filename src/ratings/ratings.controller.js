const ratings = require("../data/ratings-data");

function list(req, res, next) {
  res.json({ data: ratings });
}

function ratingExists(req, res, next) {
  const { ratingId } = req.params;
  const foundRating = ratings.find((rating) => Number(ratingId) === rating.id);
  if (foundRating) {
    res.locals.rating = foundRating;
    return next();
  } else {
    next({
      status: 404,
      message: `Rating id not found: ${req.params.ratingId}`,
    });
  }
}

function read(req, res, next) {
  res.json({ data: res.locals.rating });
}

module.exports = {
  list,
  read: [ratingExists, read],
};
