import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import Luzmo from '@luzmo/nodejs-sdk';

const client = new Luzmo({
  api_key: process.env.LUZMO_API_KEY,
  api_token: process.env.LUZMO_API_TOKEN,
  host: process.env.NEXT_PUBLIC_LUZMO_API_HOST,
});

const init = async () => {
  // https://developer.luzmo.com/api/searchCollection
  const manager = await client.get('collection', {
    where: {
      id: process.env.MANAGER_LUZMO_COLLECTION_ID,
    },
  });

  console.log(JSON.stringify(manager, null, 2));
};

init();

// Response
// {
//     "count": 1,
//     "rows": [
//       {
//         "id": "8fc517b8-7739-496e-9afc-3838d9025a78",
//         "name": {
//           "en": "manager"
//         },
//         "favorite": false,
//         "created_at": "2024-07-17T20:27:41.364Z",
//         "updated_at": "2024-07-17T20:41:08.786Z",
//         "deleted_at": null
//       }
//     ]
//   }
