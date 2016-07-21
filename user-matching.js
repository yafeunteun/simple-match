var _ = require("underscore");

// returns most frequent to least frequent
Array.prototype.byCount= function(){
    var itm, a= [], L= this.length, o= {};
    for(var i= 0; i<L; i++){
        itm= this[i];
        if(!itm) continue;
        if(o[itm]== undefined) o[itm]= 1;
        else ++o[itm];
    }
    for(var p in o) a[a.length]= p;
    return a.sort(function(a, b){
        return o[b]-o[a];
    });
}


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

function most_common_interests_with(user, users) {
  interests = JSON.parse(user.interests) // get user interests
  // get the user ids that shares interests with our user (one id means that
  // the user associated with the id shares one interest with our user
  // if an id appears more thant one time, that means that the corresponding user
  // shares more thant just an interest with our user).
  interested_user_id = _.flatten(_.map(interests, function(interest) {
    return (user_ids_by_interest(interest, users)); 
  }));

  // Removes current user id
  interested_user_id = _.filter(interested_user_id, function(id) {
    return id != user.id;
  });

  mostCommonInterestsUser = _.filter(users, function(user) {return user.id == interested_user_id.byCount()[0];});

  return mostCommonInterestsUser[0];

}

exports.interests_by_user_id = interests_by_user_id;
exports.user_ids_by_interest = user_ids_by_interest;
exports.most_common_interests_with = most_common_interests_with;
