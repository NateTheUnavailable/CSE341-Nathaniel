const coolfunction = ((req, res, next) => {
  res.json('awesome person');
});
const coolperson = ((req, res, next) => {
  res.json('me');
});
module.exports = {coolfunction, coolperson}