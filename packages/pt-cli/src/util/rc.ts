import * as fs from "fs-extra";
import * as os from "os";
import * as path from "path";

const configPath = path.join(os.homedir(), ".ptrc");

export async function syncRc(key: string, value: string): Promise<void> {
  await fs.ensureFile(configPath);
  let rawData = await fs.readFile(configPath, "utf8");
  let jData: { [key: string]: string } = {};
  try {
    jData = JSON.parse(rawData);
  } catch {}
  jData[key] = value;
  await fs.writeFile(configPath, JSON.stringify(jData, null, 2));
}

export async function getConfig(key: string): Promise<string> {
  await fs.ensureFile(configPath);
  let rawData = await fs.readFile(configPath, "utf8");
  let jData: { [key: string]: string } = {};
  try {
    jData = JSON.parse(rawData);
  } catch {}
  return jData[key];
}
