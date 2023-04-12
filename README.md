# Exercise Tracker
Exercise Tracker is an app that lets you keep track of the exercises you've done during your study.
It supports:
- Adding textbooks
- Adding chapters for each book
- Adding exercises for each chapter
- Mark exercise as done / star

It is written with the Next.js framework.
The frontend is written with React with the Chakra UI library.

User data is stored with in sqlite database and accessed using the ORM Prisma.

## Deployment
To run locally, execute the following command, then open http://localhost:3030 in your browser.
```
docker build -t exercise-tracker .
docker run -dp 3000:3000 exercise-tracker
```