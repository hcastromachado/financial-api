function transactionDate() {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds() +
    ":" +
    today.getMilliseconds();
  var transactionDate = date + " " + time;
  return transactionDate.toString();
}

module.exports = {
  transactionDate,
};
