var _ = require("underscore");

function interests_by_user_id(id, users) {

  userForId = users.filter(function(user) {
      return (user.id == id)
  });

  if(userForId.length == 1) {
     return (JSON.parse(userForId[0].interests));
  } else {
    return ([]);
  }
}

function user_ids_by_interest(topic, users) {
  return(
    _.map(
      _.filter(users, function(user) {
        return _.contains(JSON.parse(user.interests), topic)
      })
   , function(entry) {return entry.id;}));
}

exports.interests_by_user_id = interests_by_user_id;
exports.user_ids_by_interest = user_ids_by_interest;
