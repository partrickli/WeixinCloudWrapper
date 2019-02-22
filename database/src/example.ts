import { countDoc } from './database';

countDoc('collectionName1', {
    a: 1
}).then(count => {
    console.log(count)
})
