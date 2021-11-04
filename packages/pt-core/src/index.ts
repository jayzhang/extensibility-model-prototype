import "reflect-metadata";

import { Container, Service, Inject } from "typedi";
import * as fs from "fs-extra";

const pj = JSON.parse(fs.readFileSync("./package.json", { encoding: "utf8" }));

const plugins = pj.plugins;

async function operation() {
  for (let p in plugins) {
    await require(p);
    console.log(`Plugin on board: ${Container.has(plugins[p].name)}`);
  }
  return;
}

operation().then(() => {});
