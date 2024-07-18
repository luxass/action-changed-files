import { resolve } from "node:path";
import process from "node:process";
import * as core from "@actions/core";

async function run(): Promise<void> {
  const token = core.getInput("token", {
    required: true,
  });

  const cwd = core.getInput("cwd", {
    required: false,
  });

  const paths = core.getInput("paths", {
    required: true,
  });

  const debug = core.getBooleanInput("debug", {
    required: false,
  });

  if (debug) {
    core.info(`paths: ${paths}`);
  }

  const workingDirectory = resolve(
    process.env.GITHUB_WORKSPACE || process.cwd(),
    cwd,
  );

  core.debug(`working directory: ${workingDirectory}`);
}

run().catch((err) => {
  core.error(err);
  core.setFailed(err);
});
