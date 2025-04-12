import chalk from "chalk";

export function InfoLog(message: string, data: Record<string, any> | any[]) {
  const timestamp = new Date().toISOString();
  console.log(chalk.red("----------------------------------------"));
  console.log(chalk.cyan.bold(`📋 [${message}] - ${timestamp}`));
  console.log(chalk.gray("----------------------------------------"));

  if (Array.isArray(data)) {
    data.forEach((item, index) => {
      console.log(`Item ${index}:`, item);
    });
  } else {
    for (const [key, value] of Object.entries(data)) {
      console.log(`${chalk.green(key)}: ${chalk.yellow(value)}`);
    }
  }

  console.log(chalk.red("----------------------------------------"));
}
