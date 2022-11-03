# Favs Api

## Assesment Backend MIR Favs app Andres Berrio
[FAVS API ](https://github.com/andrewsolutions81/favs-backend-andres-b2)

Favs is a new company that aims to provide a better way to organize your favorite things: music, clothes, courses, etc., all in one place.

Clone the repository
open the command prompt / cmdr / or powr shell and type ```npm run dev```
in your browser after http://localhost:8080 use the routes for using Favs api


| Route | HTTP Verb  | Middleware | Description |
| ----- | ---------- | ---------- | ----------- |
| /api/favs | GET | isAuthenticated() | Get all list of favorites |
| /api/favs | POST | isAuthenticated() | Creates a new list of favorites |
| /api/favs/:id | DELETE | isAuthenticated() | 	Deletes a list of favorites |
| /auth/local/login | POST | isAuthenticated() | 	Login user by email/password |

