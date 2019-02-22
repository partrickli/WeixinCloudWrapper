"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = wx.cloud.database();
function countDoc(collection, condition) {
    return db
        .collection(collection)
        .where(condition)
        .count()
        .then((res) => {
        const { total } = res;
        if (typeof total === 'number') {
            return total;
        }
        else {
            return -1;
        }
    });
}
exports.countDoc = countDoc;
