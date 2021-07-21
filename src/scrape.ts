import { PythonShell } from 'python-shell';

const scrape: () => Promise<string[]> = async (): Promise<string[]> => {
  try {
    //検索結果をPythonでスクレイピング
    const resp: unknown = await new Promise((resolve, reject): void => {
      PythonShell.run('python/search.py', null, (err, data): void => {
        if (err) return reject(err);
        return resolve(data);
      });
    });
    const result: string[] = ((await resp) as string[])
      .reverse()
      .map((i): string => {
        return i.substring(0, i.indexOf(' '));
      });
    return result;
  } catch {
    throw new Error();
  }
};

export = scrape;
