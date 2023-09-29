// TypeScript v2.92
let imageURL = Feed.newFeedItem.EntryImageUrl;
let noImage = 'no_image_card.png';
let regex_pattern = /@/i;

var iconUrl_init = String.prototype.concat('https://avatar-resolver.vercel.app/twitter/', Feed.newFeedItem.EntryAuthor);
var iconUrl_final = iconUrl_init.replace(regex_pattern, '');
var name_init = String.prototype.concat('Punishing: Gray Raven (', Feed.newFeedItem.EntryAuthor, ')');
var text_init = String.prototype.concat('Twitter • ', Feed.newFeedItem.EntryPublished);


var body = {
  embeds: [
    {
      color: 1942002,
      author: {
        name: name_init,
        url: Feed.newFeedItem.EntryUrl,
        icon_url: iconUrl_final,
      },
      description: Feed.newFeedItem.EntryTitle,
      image: {
        url: Feed.newFeedItem.EntryImageUrl,
      },
      footer: {
        text: text_init,
        icon_url: 'https://i.imgur.com/s2qjM73.png',
      },
    },
  ],
};


if (imageURL.indexOf(noImage) !== -1) {
  MakerWebhooks.makeWebRequest.skip();
}

MakerWebhooks.makeWebRequest.setBody(JSON.stringify(body));