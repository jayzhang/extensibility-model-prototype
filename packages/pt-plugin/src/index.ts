import "reflect-metadata";
import { Container, Service } from "typedi";

@Service("PtPlugin")
export class PtPlugin {
  foo() {
    console.log("bar");
  }
}

console.log(`PtPlugin injected: ${Container.has("PtPlugin")}`);
