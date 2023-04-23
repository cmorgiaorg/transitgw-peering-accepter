const { awscdk } = require('projen');

const cdkVersion = '2.76.0';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Claudio Morgia',
  authorAddress: 'cmorgia@amazon.ch',
  cdkVersion: cdkVersion,
  defaultReleaseBranch: 'main',
  name: 'newtgw',
  repositoryUrl: 'https://github.com/cmorgia/newtgw.git',
  deps: [
    `@aws-cdk/aws-lambda-python-alpha@${cdkVersion}-alpha.0`,
  ],
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();