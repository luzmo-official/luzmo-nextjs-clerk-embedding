import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import Luzmo from '@luzmo/nodejs-sdk';

const client = new Luzmo({
  api_key: process.env.LUZMO_API_KEY,
  api_token: process.env.LUZMO_API_TOKEN,
  host: process.env.NEXT_PUBLIC_LUZMO_API_HOST,
});

const init = async () => {
  const manager = await client.associate('securable', 'manager dashboard id', {
    role: 'Collections',
    id: process.env.MANAGER_LUZMO_COLLECTION_ID,
  });

  console.log(JSON(manager, null, 2));

  const support = await client.associate('securable', 'support dashboard id', {
    role: 'Collections',
    id: process.env.SUPPORT_LUZMO_COLLECTION_ID,
  });

  console.log(JSON.stringify(support, null, 2));
};

init();
