const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });
const Luzmo = require('@luzmo/nodejs-sdk');

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

  console.log(await manager);

  const support = await client.create('collection', {
    name: {
      en: 'support',
    },
  });

  console.log(await support);
};

init();
