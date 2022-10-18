const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@public": "./public",
          "@api": "./src/api",
          "@components": "./src/components",
          "@containers": "./src/containers",
          "@lib": "./src/lib",
          "@hooks": "./src/hooks",
          "@modules": "./src/modules",
          "@pages": "./src/pages",
          "@recoil": "./src/recoil",
          "@static": "./src/static",
          "@images": "./src/static/images",
        },
      },
    },
  ],
};
