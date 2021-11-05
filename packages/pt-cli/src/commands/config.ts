import { Command, flags } from "@oclif/command";
import { syncRc } from "../util/rc";

export default class Config extends Command {
  static description = "Configurations for pt-cli";

  static examples = [
    `$ pt-cli config --global pluginPath yourpath
`,
  ];

  static flags = {
    global: flags.boolean({ char: "g" }),
  };

  static args = [
    {
      name: "key",
      required: true,
      description: "config key",
    },
    {
      name: "value",
      required: true,
      description: "config value",
    },
  ];

  async run() {
    const { args, flags } = this.parse(Config);
    await syncRc(args.key, args.value);
  }
}
