const AWS = require('aws-sdk'); // eslint-disable-line node/no-unpublished-require

module.exports.handler = async event => {
  const stepFunctions = new AWS.StepFunctions({ apiVersion: '2016-11-23' });
  const params = {
    stateMachineArn: process.env.STATE_MACHINE_ARN,
    input: JSON.stringify(event), // Step Functions takes input as a string
    name: `roll-${Date.now()}`,
  };

  try {
    await stepFunctions.startExecution(params).promise();
    return { statusCode: 200 };
  } catch (error) {
    return { ...error, statusCode: error.statusCode || 400 };
  }
};
