import * as core from '#core/core';
import cron = require('node-cron');

//一定間隔で実行
const schedule: (interval: string) => void = (interval: string): void => {
  console.log('Start server version...');
  cron.schedule(interval, async (): Promise<void> => {
    await core();
  });
};

export = schedule;
