var assert = require('assert');
var userMatching = require('./user-matching');
var rewire = require("rewire");
var userMatchingPrivateAPI = rewire("./user-matching");


var  users = [
    {id:1,interests:'["Hadoop", "Big Data", "HBase", "Java", "Spark", "Storm", "Cassandra"]'},
    {id:2,interests:'["NoSQL", "MongoDB", "Cassandra", "HBase", "Postgres"]'},
    {id:3,interests:'["statistics", "regression", "probability"]'},
    {id:4,interests:'["Python", "scikit-learn", "scipy", "numpy", "statsmodels", "pandas"]'},
    {id:5,interests:'["machine learning", "regression", "decision trees", "libsvm"]'},
    {id:6,interests:'["Python", "R", "Java", "C++", "Haskell", "programming languages"]'},
    {id:7,interests:'["regression", "statistics", "probability", "mathematics", "theory"]'},
    {id:8,interests:'["machine learning", "scikit-learn", "Mahout", "neural networks"]'},
    {id:9,interests:'["neural networks", "deep learning", "Big Data", "artificial intelligence"]'},
    {id:10,interests:'["Hadoop", "Java", "MapReduce", "Big Data"]'},
    {id:11,interests:'["statistics", "R", "statsmodels"]'},
    {id:12,interests:'["C++", "deep learning", "artificial intelligence", "probability"]'},
    {id:13,interests:'["pandas", "R", "Python"]'},
    {id:14,interests:'["databases", "HBase", "Postgres", "MySQL", "MongoDB"]'},
    {id:15,interests:'["libsvm", "regression", "support vector machines"]'}
  ];


describe('Returns most frequent to least frequent element in an array', function() {
  var someArray = ["apples","oranges","oranges","oranges","bananas","bananas","oranges"];
  Array.prototype.byCount = userMatchingPrivateAPI.__get__("Array.prototype.byCount");
  it('Works so well', function(){
    assert.deepEqual(someArray.byCount(), [ 'oranges', 'bananas', 'apples' ]); 
  });
});


describe('Returns the interests given a user id', function() {

  it('Returns the correct set of interests for id:3', function(){
    assert.deepEqual(userMatching.interests_by_user_id(3, users), ["statistics", "regression", "probability"]);
  });

  it('Returns an empty array if no user found for id', function() {
    assert.deepEqual(userMatching.interests_by_user_id(-12, users), []);
  });
});

describe('Returns user ids that are interested by a given topic', function() {
  it('Returns the correct set of ids for interest in "Big Data"', function() {
    assert.deepEqual(userMatching.user_ids_by_interest("Big Data", users), [1, 9, 10]);
  });

  it('Returns an empty array if no user found for topic', function() {
    assert.deepEqual(userMatching.user_ids_by_interest("Electronics", users),[]); 
  });

});


describe('Returns the user who has the most interests in common than the given user', function() {
  var expectedResult = {id:3,interests:'["statistics", "regression", "probability"]'};
  var aUser = {id:7,interests:'["regression","statistics", "probability", "mathematics", "theory"]'};
  it('Returns the correct set of user for id:7', function(){
    assert.deepEqual(userMatching.most_common_interests_with(aUser, users), expectedResult);
  });
});


