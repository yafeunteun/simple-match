function interests_by_user_id(id, users) {

  userForId = users.filter(function(user) {
      return (user.id == id)
  });

  if(userForId.length == 1) {
     return (userForId[0].interests);
  } else {
    return ([]);
  }
}


exports.interests_by_user_id = interests_by_user_id;
