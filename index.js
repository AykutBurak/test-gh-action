const core = require('@actions/core');
const validateJSONs = require('./validateJsons')

async function run() {
  try {
    validateJSONs()
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
