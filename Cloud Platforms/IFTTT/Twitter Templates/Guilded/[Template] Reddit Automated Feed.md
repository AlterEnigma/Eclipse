# Reddit Feed Guide (IFTTT, Guilded)
## This is a guide on how to implement an automated Reddit feed using IFTTT and Webhooks

### IMPORTANT INFORMATION
This method relies on using IFTTT filter code, which is not available to free users (you'll need to have a Pro+ subscription in order to use filter code).

#### If
1. Create a new applet with the Reddit Trigger Module
2. Set the trigger to "New hot post in subreddit" (The trigger choice is up to you, however the new hot post in subreddit trigger is generally good)
3. Specify the subreddit you want to monitor

#### Then That
4. Select the Webhooks service
5. Select the "Make a web request" action
6. Setup the action module with all of the necessary information (Guilded webhook URL, Method set to POST, Content-type to application/json, Body content shown below).
```json
{
	"embeds": [{
		"title": "{{Title}}",
		"url": "<<<{{PostURL}}>>>",
		"description": "<<<{{Content}}>>>",
		"image": {
			"url": "{{ImageURL}}"
		},
		"footer": {
			"text": "/u/<<<{{Author}}>>> | <<<{{PostedAt}}>>>"
		}
	}]
}
```

#### When
7. Use the following filter code (this is important if you want to avoid 404 missing image placeholders)
```javascript
let imageURL = Reddit.newHotPostInSubreddit.ImageURL;
let noImage = 'no_image_card.png';

if ( imageURL.indexOf(noImage) !== -1 ) { 
  MakerWebhooks.makeWebRequest.skip('Image URL not found.');
}
```
