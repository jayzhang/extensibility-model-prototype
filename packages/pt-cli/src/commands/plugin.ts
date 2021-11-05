import { Command, flags } from "@oclif/command";
import { getConfig } from "../util/rc";
import { operation } from "pt-core";

export default class Plugin extends Command {
  static description = "Plugin operations";

  static examples = [
    `$ pt-cli plugin --list
`,
  ];

  static flags = {
    list: flags.boolean({ char: "l" }),
  };

  async run() {
    const { args, flags } = this.parse(Plugin);
    if (flags.list) {
      const path = await getConfig("pluginPath");
      const name = await getConfig("pluginName");
      await operation(path, name);
    }
  }
}
