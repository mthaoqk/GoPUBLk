
const query = process.argv[2].replace('-', '').toLowerCase();
// load up the database generated by routes/index.js, save the output from it to a file called projects.json
const data = require('./projects.json');
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


for (var id in result) {
  const item = result[id];
  console.log(`${item.title} - ${item.heading}`);
  console.log(`Link: ${item.heading_url}`);
  console.log();
  console.log(item.content);

}
module.exports = router;