import { StackContext, NextjsSite } from "@serverless-stack/resources";

export function MyStack({ stack }: StackContext) {
  const site = new NextjsSite(stack, "Site",{
    path: "frontend",

  })
  stack.addOutputs({
    URL: site.url
  });
}
