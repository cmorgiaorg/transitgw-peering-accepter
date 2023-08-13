const { awscdk } = require('projen');

const cdkVersion = '2.91.0';
const projectName = 'newtgw';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Claudio Morgia',
  authorAddress: 'cmorgia@amazon.ch',
  cdkVersion: cdkVersion,
  defaultReleaseBranch: 'main',
  name: projectName,
  repositoryUrl: `https://github.com/cmorgia/${projectName}.git`,
  publishToPypi: {
    distName: projectName,
    module: projectName,
  },
  publishToNuget: {
    dotNetNamespace: 'ch.amazon.cmorgia',
    packageId: 'newtgw',
  },
  publishToMaven: {
    javaPackage: 'io.github.cmorgia',
    mavenArtifactId: 'io.github.cmorgia',
    mavenGroupId: 'io.github.cmorgia',
  },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();