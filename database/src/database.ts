import { Db } from 'wx-server-sdk/node_modules/tcb-admin-node/src/database/db';

type CollectionName = 'collectionName1' | 'collectionName2';

const db: Db = wx.cloud.database();

export function countDoc(collection: CollectionName, condition: {}) {
  return db
    .collection(collection)
    .where(condition)
    .count()
    .then((res) => {
      const { total } = res;
      if (typeof total === 'number') {
        return total;
      } else {
        return -1;
      }
    });
}
