let convict = require("convict");

let config = convict({
	"env": {
		"doc": "The application environment.",
		"format": ["production", "development", "test"],
		"default": "development",
		"env": "NODE_ENV"
	},
	port: {
		"doc": "The port to bind.",
		"format": "port",
		"default": 3000,
		"env": "PORT",
		"arg": "port"
	}
});

// Perform validation
config.validate({ "allowed": "strict" } );

module.exports = config;
