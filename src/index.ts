import * as path from 'path';
import { PythonFunction } from '@aws-cdk/aws-lambda-python-alpha';
import { CustomResource, Duration, Stack, StackProps } from 'aws-cdk-lib';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Provider } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

export class AcceptPeeringStack extends Stack {

  constructor(scope: Construct, id: string, attachmentId: string, props: StackProps) {
    super(scope, id, props);

    new AcceptTransitPeering(this, 'acceptTransitPeering', attachmentId);
  }
}

export class AcceptTransitPeering extends Construct {
  constructor(scope: Construct, id: string, transitGatewayAttachmentId: string) {
    super(scope, id);

    const acceptTransitPeeringHandler:PythonFunction =
          new PythonFunction(this, 'AcceptTransitPeeringHandler', {
            functionName: 'accept-transit-peering-handler',
            runtime: Runtime.PYTHON_3_10,
            index: 'accept-transit-peering-handler.py',
            entry: path.join(
              __dirname,
              '../src',
            ),
            memorySize: 1024,
            timeout: Duration.seconds(240),
          });

    acceptTransitPeeringHandler.addToRolePolicy(new PolicyStatement({
      actions: [
        'ec2:AcceptTransitGatewayPeeringAttachment',
        'ec2:DescribeTransitGatewayPeeringAttachments',
      ],
      resources: ['*'],
    }));

    const provider: Provider = new Provider(
      this,
      'acceptTransitPeering-provider',
      {
        onEventHandler: acceptTransitPeeringHandler, // this lambda will be called on cfn deploy
        logRetention: RetentionDays.ONE_DAY,
        providerFunctionName: 'acceptTransitPeering-provider',
      },
    );

    new CustomResource(this, 'Resource', {
      serviceToken: provider.serviceToken,
      resourceType: 'Custom::AcceptTransitPeering',
      properties: {
        TransitGatewayAttachmentId: transitGatewayAttachmentId,
        PeerRegion: Stack.of(this).region,
      },
    });
  }
}
