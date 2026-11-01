# Lab 1: Node.js and Express server

**Name:** BACHU PRANAV SAI · **Registration number:** 252U1R9015 · **Section:** CSE - GEN-AI(304)

**Live link:** PASTE PUBLIC URL HERE (or explain why it could not be deployed and add Postman screenshots)

## How to run

```bash
npm install
npm start            # Express server on http://localhost:3000
npm run start:http   # plain http module server (Part 1)
```

Environment variables: none required. `PORT` is optional (defaults to 3000).

## Endpoints

| Method | Path     | Description                          | Status |
| ------ | -------- | ------------------------------------ | ------ |
| GET    | `/`      | Welcome text                         | 200    |
| GET    | `/about` | JSON with name and section           | 200    |
| GET    | `/time`  | Current date and time                | 200    |
| GET    | any other| "404 - Route not found" message      | 404    |

## Screenshots

![Home route](screenshots/home.png)
![About route](screenshots/about.png)
![Time route](screenshots/time.png)
![404 route](screenshots/not-found.png)

## Notes

Problems faced and how I solved them: WRITE HERE.
