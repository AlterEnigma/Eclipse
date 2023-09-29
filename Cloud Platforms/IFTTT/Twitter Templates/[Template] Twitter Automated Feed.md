# Twitter Feed Guide (IFTTT, Discord)
## This is a guide on how to implement an automated Twitter feed using IFTTT and Webhooks

### IMPORTANT INFORMATION
This method relies on using IFTTT filter code, which is not available to free users (you'll need to have a Pro+ subscription in order to use filter code).

#### If
1. Create a new applet with the Twitter Trigger Module
2. Set the trigger to "New tweet by a specific user" (The trigger choice is up to you)
3. Specify the user you want to monitor

#### Then That
4. Select the Webhooks service
5. Select the "Make a web request" action
6. Setup the action module with all of the necessary information (Discord webhook URL, Method set to POST, Content-type to application/json, Body content can be left blank as it will be overriden by the filter code).

#### When
7. Use the following filter code (this is important if you want to avoid broken embeds)
```javascript
let link = Twitter.newTweetByUser.LinkToTweet;

var replacement = link.replace('twitter', 'fxtwitter');

var body = {
  avatar_url: String.prototype.concat('https://avatar.glue-bot.xyz/twitter/', Twitter.newTweetByUser.UserName),
  content: replacement
};

MakerWebhooks.makeWebRequest.setBody(JSON.stringify(body));
```
