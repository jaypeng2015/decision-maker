import { APIGatewayProxyEventV2, APIGatewayProxyHandlerV2, APIGatewayProxyResultV2 } from 'aws-lambda';
import { StepFunctions } from 'aws-sdk';
import _ from 'lodash';

const DEFAULT_STATUS_CODE = 400;

export const handler: APIGatewayProxyHandlerV2 = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyResultV2> => {
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
    return {
      statusCode: _.toInteger(_.get(error, 'statusCode', DEFAULT_STATUS_CODE)),
      body: _.toString(_.get(error, 'message')),
    };
  }
};
