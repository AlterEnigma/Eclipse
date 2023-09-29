# Yande.re RSS Feed Guide (IFTTT, Guilded)
## This is a guide on how to implement an automated RSS feed using IFTTT and Webhooks

### IMPORTANT INFORMATION
This method relies on using IFTTT filter code, which is not available to free users (you'll need to have a Pro+ subscription in order to use filter code).

#### If
1. Create a new applet with the RSS Trigger Module
2. Set the trigger to "New feed item"
3. Specify the Yande.re tags you wish to use https://yande.re/post/atom?tags= {Your Tags Go Here}

#### Then That
4. Select the Webhooks service
5. Select the "Make a web request" action
6. Setup the action module with all of the necessary information (Guilded webhook URL, Method set to POST, Content-type to application/json, you can leave the body blank, as this part will be modified by the filter code).

#### When
7. Use the following filter code 
```javascript
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
      author: {
        name: '{Name goes here}',
        url: '{URL goes here}',
        icon_url:
          '{URL goes here}',
      },
      title: Feed.newFeedItem.EntryTitle,
      url: Feed.newFeedItem.EntryUrl,
      image: {
        url: replacement_final,
      },
      footer: {
        text: String.prototype.concat(Feed.newFeedItem.EntryPublished, " | ", Feed.newFeedItem.EntryAuthor),
      }
    }
  ]
};

MakerWebhooks.makeWebRequest.setBody(JSON.stringify(body));
```
