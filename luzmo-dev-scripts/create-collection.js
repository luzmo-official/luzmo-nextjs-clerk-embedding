import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import Luzmo from '@luzmo/nodejs-sdk';

const client = new Luzmo({
  api_key: process.env.LUZMO_API_KEY,
  api_token: process.env.LUZMO_API_TOKEN,
  host: process.env.NEXT_PUBLIC_LUZMO_API_HOST,
});

const init = async () => {
  const manager = await client.create('collection', {
    name: {
      en: 'manager',
    },
  });

  console.log(JSON(manager, null, 2));

  const support = await client.create('collection', {
    name: {
      en: 'support',
    },
  });

  console.log(JSON(support, null, 2));
};

init();
