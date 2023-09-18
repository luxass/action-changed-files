import { getBooleanInput, getInput, setFailed, info } from "@actions/core";

async function run() {
  const token = getInput("token", {
    required: true
  });

  const paths = getInput("paths", {
    required: true,
  });

  const debug = getBooleanInput("debug", {
    required: false,
  });

  if (debug) {
    info(`paths: ${paths}`);
  }

}

run().catch((err) => {
  console.error(err);
  setFailed(err);
  process.exit(1);
});
