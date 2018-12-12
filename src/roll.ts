import { APIGatewayEvent, APIGatewayProxyHandler } from 'aws-lambda';
import { StepFunctions } from 'aws-sdk';

const DEFAULT_STATUS_CODE = 400;

export const handler: APIGatewayProxyHandler = async (event: APIGatewayEvent) => {
  const stepFunctions = new StepFunctions({ apiVersion: '2016-11-23' });
  const params = {
    input: JSON.stringify(event), // Step Functions takes input as a string
    name: `roll-${Date.now()}`,
    stateMachineArn: process.env.STATE_MACHINE_ARN || '',
  };

  try {
    await stepFunctions.startExecution(params).promise();
    return { statusCode: 200 };
  } catch (error) {
    return { ...error, statusCode: error.statusCode || DEFAULT_STATUS_CODE };
  }
};
