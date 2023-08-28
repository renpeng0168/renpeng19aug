const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console()
  ]
});

module.exports.handler = async (event) => {
  logger.info('Function invoked', { event });
  
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Your function executed successfully!",
        access_key: process.env.ACCESS_KEY
      },
      null,
      2
    ),
  };
  
  logger.info('Function response', { response });
  
  return response;
};
