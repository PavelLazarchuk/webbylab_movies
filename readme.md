# Available Scripts

In the project directory, you can run:

- `npm start`
  Runs the app in the development mode.\
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `npm run build`
  Builds the app for production to the `build` folder.

- `docker-compose up --build -d`
  Builds and runs a docker image of the application.

## RUNNING THE APPLICATION

Run the following commands to run the app:

- `git clone https://github.com/PavelLazarchuk/webbylab_movies.git`
- `cd webbylab_movies`
- `docker-compose up --build -d`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## RUNNING DOKER IMAGE

Run the following commands to run the docker image:

- `docker pull pavellazarchuk/movies`
- `docker run --name movies-client -p 3000:3000 -d pavellazarchuk/movies`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
