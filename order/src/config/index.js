module.exports = {
  PORT: process.env.PORT,
  DB_URL: `mongodb://${process.env.MONGO_HOST}:27017/shopping_app_order`,
  APP_SECRET: process.env.APP_SECRET,
  MESSAGE_BROKER_URL: `amqp://${process.env.MQ_HOST || 'localhost'}:5672`,
  EXCHANGE_NAME: "ONLINE_SHOPPING",
  USER_BINDING_KEY: "USER_SERVICE",
  ORDER_BINDING_KEY: "ORDER_SERVICE",
  QUEUE_NAME: "ORDER_QUEUE",
  NODE_ENV: process.env.NODE_ENV
};
