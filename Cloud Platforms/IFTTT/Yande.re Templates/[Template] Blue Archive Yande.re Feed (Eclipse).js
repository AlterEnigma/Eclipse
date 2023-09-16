// TypeScript v2.92
let link = Feed.newFeedItem.EntryImageUrl;
let regex_pattern = /\/[A-Za-z0-9]+\/[A-Za-z0-9]+\//;
var replacement_primary = link.replace('assets', 'files');
var replacement_secondary = replacement_primary.replace('data', 'sample');
var replacement_terciary = replacement_secondary.replace('preview', '');
var replacement_quad = replacement_terciary.replace(regex_pattern, '');
var replacement_final = replacement_quad.replace('.jpg','/yande.re');
var body = {
  embeds: [
    {
      color: 14837107,
      author: {
        name: 'Azur Lane',
        url: 'https://azurlane.yo-star.com',
        icon_url:
          'https://pbs.twimg.com/profile_images/1651413354660130817/K9iOcejt_400x400.jpg',
      },
      title: Feed.newFeedItem.EntryTitle,
      url: Feed.newFeedItem.EntryUrl,
      image: {
        url: replacement_final,
      },
      footer: {
        text: String.prototype.concat("Yande.re • ", Feed.newFeedItem.EntryPublished, " • ", Feed.newFeedItem.EntryAuthor),
        icon_url: 'https://cdn.myanimelist.net/images/characters/8/269729.jpg',
      }
    }
  ]
};
MakerWebhooks.makeWebRequest.setBody(JSON.stringify(body));