import "reflect-metadata";
import { Container, Service } from "typedi";

@Service("PtDPlugin")
export class PtDPlugin {
  foo() {
    console.log("barrrrrrrr");
  }
}

console.log(`PtDPlugin injected: ${Container.has("PtDPlugin")}`);
