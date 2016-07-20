# simple-match

Simple Match is a simple microservice.
It exposes an API that allows to find users that match another user profile based on his interests (and maybe other criterias later on)

It works as a container which runs a server.
Example : 

curl -H "Content-Type: application/json" -X POST -d '{"id":"43", "interests":"["hadoop", "machine learning", "emacs"]"}' http://localhost:3000/api/i

