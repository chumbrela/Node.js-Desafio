import * as dotenv from "dotenv";

export const loadConfig = () => {
  dotenv.config();
  const selectedEnv = process.env.NODE_ENV || "development";
  console.log(`Environment loaded: ${selectedEnv}`);
};
