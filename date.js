module.exports.getDay = function () {
  let today = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let day = today.toLocaleDateString("hi-IN", options);
  return day;
};

module.exports.getDay1 = function () {
    let today = new Date();
    let options = {
      weekday: "long",
      month: "long",
      day: "numeric",
    };
    let day = today.toLocaleDateString("hi-IN", options);
    return day;
  };
  