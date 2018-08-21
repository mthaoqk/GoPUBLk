const query = process.argv[2].replace('-', '').toLowerCase();
const data = require('./whatever.json');
let result = {};
for (var i = 0; i < data.length; i += 1) {
  const item = data[i];
  if (result[item.id]) {
    continue;
  }
  if (item.tags.indexOf(query) !== -1) {
    result[item.id] = item;
    console.log('found in tags: ' + item.tags);
  } else if (item.content.indexOf(query) !== -1) {
    result[item.id] = item;
    console.log('found in content: ' + item.content);
  }
}

console.log('#########');
for (var id in result) {
  const item = result[id];
  console.log(`${item.title} - ${item.heading}`);
  console.log(`Link: ${item.heading_url}`);
  console.log();
  console.log(item.content);
  console.log('@@@@@@@@@');
}
