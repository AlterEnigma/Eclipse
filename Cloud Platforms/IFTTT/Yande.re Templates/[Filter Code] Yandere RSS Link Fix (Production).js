//Code can be safely used in a production environment.
//IFTTT filter code service runs on an older version of TypeScript.
//TypeScript v2.92
let link = Feed.newFeedItem.EntryImageUrl;
let regex_pattern = /\/[A-Za-z0-9]+\/[A-Za-z0-9]+\//;

var replacement_primary = link.replace('assets', 'files');
var replacement_secondary = replacement_primary.replace('data', 'sample');
var replacement_terciary = replacement_secondary.replace('preview', '');
var replacement_quad = replacement_terciary.replace(regex_pattern, '');
var replacement_final = replacement_quad.replace('.jpg','/yande.re');