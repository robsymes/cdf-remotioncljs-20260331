/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import { Config } from "@remotion/cli/config";
import { enableTailwind } from '@remotion/tailwind-v4';

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.overrideWebpackConfig(enableTailwind);

// remotion.config.ts
// import { Config } from 'remotion';

// Config.Puppeteer.setChromiumHeadlessMode(true);
// Config.Puppeteer.setChromiumDisableWebSecurity(true);
// Essential for some CI environments
// Config.Puppeteer.addPuppeteerArgument('--no-sandbox');
// Config.Puppeteer.addPuppeteerArgument('--disable-setuid-sandbox');

// Config.setChromiumHeadlessMode(true);
// Config.setChromiumDisableWebSecurity(true);
// Essential for some CI environments
// Config.addPuppeteerArgument('--no-sandbox');
// Config.addPuppeteerArgument('--disable-setuid-sandbox');
// import { Config } from '@remotion/cli';

// Old: Config.Puppeteer.addPuppeteerArgument()
// New: Config.addPuppeteerArgument()

// Config.addPuppeteerArgument('--no-sandbox');
// Config.addPuppeteerArgument('--disable-setuid-sandbox');
// Config.setChromiumDisableWebSecurity(true);

// If you need headless mode specifically:
// Config.setHeadless(true); 

// Add each flag individually
Config.addPuppeteerArgument('--no-sandbox');
Config.addPuppeteerArgument('--disable-setuid-sandbox');
Config.setChromiumDisableWebSecurity(true);

// Recommended for CI to avoid timeouts
Config.setTimeoutInMilliseconds(120000);
