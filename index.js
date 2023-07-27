const core = require('@actions/core');
const validateJSONs = require('./validateJson')

async function run() {
  try {
    validateJSONs()
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
