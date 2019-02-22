"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
database_1.countDoc('collectionName1', {
    a: 1
}).then(count => {
    console.log(count);
});
