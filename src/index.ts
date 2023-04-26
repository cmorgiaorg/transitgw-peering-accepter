import * as path from 'path';
import { CustomResource, Duration, Stack } from 'aws-cdk-lib';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Provider } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

export class AcceptTransitPeering extends Construct {
  constructor(scope: Construct, id: string, transitGatewayAttachmentId: string) {
    super(scope, id);

    const acceptTransitPeeringHandler:Function =
          new Function(this, 'AcceptTransitPeeringHandler', {
            functionName: 'accept-transit-peering-handler',
            runtime: Runtime.PYTHON_3_10,
            code: Code.fromAsset(path.join(__dirname, '../src')),
            handler: 'accept-transit-peering-handler.handler',
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
