import { Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { AcceptTransitPeering } from '../src';

describe('peering handler', () => {
  describe('Creating resource', () => {
    test('test1', () => {
      const stack = new Stack();
      new AcceptTransitPeering(stack, 'testpeering', 'transitGatewayAttachmentId');

      Template.fromStack(stack).resourceCountIs('AWS::Lambda::Function', 3);
    });
  });
});