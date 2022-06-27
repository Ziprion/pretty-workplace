import axios from 'axios';
import fs from 'fs';

import { PATH_TO_FAVICONS } from '../constants/index.js';

export const downloadIcon = async (url) => {
  const { hostname, protocol } = new URL(url);

  try {
    if (fs.existsSync(`assets/${PATH_TO_FAVICONS}${hostname}.ico`)) {
      return `${PATH_TO_FAVICONS}${hostname}.ico`;
    }

    const { data } = await axios({
      method: 'get',
      url: `${protocol}//${hostname}/favicon.ico`,
      responseType: 'stream',
    });

    await data.pipe(fs.createWriteStream(`assets/${PATH_TO_FAVICONS}${hostname}.ico`));

    return `${PATH_TO_FAVICONS}${hostname}.ico`;
  } catch (e) {
    return `${PATH_TO_FAVICONS}fallback-icon.ico`;
  }
};
