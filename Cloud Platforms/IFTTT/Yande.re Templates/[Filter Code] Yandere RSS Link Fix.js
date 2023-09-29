//ES6 Only - Certain functions are not supported on older versions.
//This code is for testing purposes only.
//Certain newer functions are not supported on TypeScript v2.92(IFTTT)
const link = Feed.newFeedItem.EntryImageURL;

const replacements = [
  ['assets', 'files'],
  ['data', 'sample'],
  ['preview', ''],
  [/\/[A-Za-z0-9]+\/[A-Za-z0-9]+\//, ''],
  ['.jpg', '/yande.re'],
];

let transformedLink = link;
for (const [find, replace] of replacements) {
  transformedLink = transformedLink.replace(find, replace);
}

console.log(transformedLink);