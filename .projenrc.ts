import { awscdk } from 'projen';

const cdkVersion = '2.183.0';
const projectName = 'transitgw-peering-accepter';
const keywords = projectName.split('-');
keywords.push('cdk', 'typescript', 'aws');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Claudio Morgia',
  authorAddress: '214524+cmorgia@users.noreply.github.com',
  cdkVersion: cdkVersion,
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.5.0',
  name: projectName,
  keywords: keywords,
  projenrcTs: true,
  repositoryUrl: `https://github.com/cmorgiaorg/${projectName}.git`,
  publishToPypi: {
    distName: projectName,
    module: projectName,
  },
  publishToNuget: {
    dotNetNamespace: 'com.github.cmorgia',
    packageId: projectName,
  },
  // publishToMaven: {
  //   javaPackage: 'io.github.cmorgia.newtgw',
  //   mavenArtifactId: projectName,
  //   mavenGroupId: 'io.github.cmorgia',
  //   //mavenEndpoint: 'https://s01.oss.sonatype.org',
  // },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
