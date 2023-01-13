const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./router.js'];

const doc = {
  info: {
    version: "1.0.0",
    title: "My API",
    description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
  },
  host: "localhost:5000",
  basePath: "/",
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [{
    "name": "Endpoints",
    "description": "User and Product endpoints"
  }],
  securityDefinitions: {
    api_key: {
      type: "apiKey",
      name: "api_key",
      in: "header"
    },
    petstore_auth: {
      type: "oauth2",
      authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
      flow: "implicit",
      scopes: {
        read_pets: "read your pets",
        write_pets: "modify pets in your account"
      }
    }
  },
  definitions: {
    Event: {
      id: 1,
      title: "Evento",
      description: "Tralala",
      date: "2023-03-12",
      local: "Test Stadium",
      price: 200,
      address: "Rua do Teste"
    }
  }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./app')
});