const coolfunction = ((req, res, next) => {
  res.json('Nathaniel Gardner');
});
const coolperson = ((req, res, next) => {
  res.json('Andrew Gardner');
});
module.exports = {coolfunction, coolperson}