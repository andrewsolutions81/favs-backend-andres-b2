# Assesment Backend MIR Favs app Andres Berrio
## Questions
### 1 Indicate which are the parts of the following url: https://backend.mega-app.com.co:8080/api/articles/search?docid=1020&hl=en#dayone

https://backend.mega-app.com.co:8080/ = url to a point on internet in port 8080
api/articles/search = route
?docid=1020&hl=en#dayone = query

### 2 Define what is a Web API, Restful and what are the statusCode 200-, 400-, 500-

An API stands for  Aplication Programming interface it defines the rules that you must follow to communicate with other software systems.

Restful that is a software architecture that imposes conditions on how an API should work.

The response status  works as response of HTTP
200 is successfull responses
400 Client error responses
500 Server error responses


### 3 When we talk about CRUD, what does it mean?

Crud stands for
Create -> POST
Read -> GET
Update  -> PUT
Delete  -> DELETE





## steps
- ```npm init -y```
- ```npm i nodemon morgan dotenv -D```

- cambiar en el package json main por src/server.js y hacer un script "dev" : "nodemon src/server.js"

```npm i express mongoose cors bcryptjs jsonwebtoken```

