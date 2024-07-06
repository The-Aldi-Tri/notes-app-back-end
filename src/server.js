const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    // host: process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0",
    host: process.env.NODE_ENV !== "production" ? "127.0.0.1" : "0.0.0.0", // For docker container don't understand localhost
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
