# UFC Fighters API and React client

School project API built using Express.

## Requirements
```
Node.js
npm
```
# Server
## Set up
```
git clone https://github.com/ThaDDDen/expressFighterApi.git
cd server
npm install
```
## Build and run
```
tsc
npm run start
```

## Endpoints

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `GET`    | `/api/fighters/`                         | Retrieve all fighters.                   |
| `GET`    | `/api/fighters/ozE7-fSeahDRHg-uOea0f`    | Retrieve fighter with id "ozE7-fSeahDRHg-uOea0f". |
| `PUT`    | `/api/fighters/ozE7-fSeahDRHg-uOea0f`    | Update fighter with id "ozE7-fSeahDRHg-uOea0f". |
| `POST`   | `/api/fighters/`                         | Add new fighter.                         |
| `DELETE` | `/api/fighters/ozE7-fSeahDRHg-uOea0f`    | Delete fighter with id "ozE7-fSeahDRHg-uOea0f". |

# Client
## Set up
```
cd client
npm install
```
## Run
```
npm start
```

## Krav för godkänt:
- [x] - Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs)
- [x] - Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http)
- [x] - Datan som API:et hanterar sparas lokalt i serverfilen
- [x] - APIét ska svara med 404 om datan saknas.
- [x] - Git & GitHub har använts
- [x] - Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [x] - Uppgiften lämnas in i tid!

## Krav för väl godkänt:
- [x] - Alla punkter för godkänt är uppfyllda
- [x] - All data skall vara sparad i en JSON-fil istället för i serverfilen
- [x] - Datan i JSON-filen skall uppdateras då något läggs till, uppdateras eller tas bort
- [x] - Ett klient-gränssnitt skall byggas för att anropa API:ets alla olika endpoints och
presentera datan, redigeringsformulär skall fyllas i med befintlig information.
- [x] - Ytterligare en GET endpoint skall läggas till där det går att hämta ett specifikt objekt
