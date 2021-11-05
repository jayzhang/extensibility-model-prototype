import "reflect-metadata";

import { Container } from "typedi";
import * as fs from "fs-extra";
import * as path from "path";

const util = require("util");
const exec = util.promisify(require("child_process").exec);

interface plugin {
  foo: () => void;
}

export async function operation(pluginPath?: string, pluginName?: string) {
  const pj = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "package.json"), {
      encoding: "utf8",
    })
  );

  const plugins = pj.plugins;

  for (let p in plugins) {
    await require(p);
    console.log(
      `Buildin Plugin ${plugins[p].name}: ${Container.has(plugins[p].name)}`
    );
    const service = Container.get(plugins[p].name) as plugin;
    service.foo();
  }

  if (pluginPath && pluginName) {
    const { stdout, stderr } = await exec(`npm i ${pluginPath}`);
    console.log(stdout);
    console.log(stderr);

    await require(pluginPath);
    console.log(`Dynamic Plugin ${pluginName}: ${Container.has(pluginName)}`);
    const service = Container.get(pluginName) as plugin;
    service.foo();
  }
}
