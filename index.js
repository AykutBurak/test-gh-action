const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    await exec.exec('python3', ['./validate/validate_json.py']);
    await exec.exec('python3', ['./validate/validate_csv.py']);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
