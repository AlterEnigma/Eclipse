// TypeScript v2.92
let originalString = Youtube.newVideoByChannel.Title;
//This part is necessary in order to fix some HTML to plain text formatting issues
let decodedString = originalString.replace(/&quot;|&lt;|&gt;|&amp;|&#39;/g, function(match) {
  switch (match) {
    case '&quot;': return '"';
    case '&lt;': return '<';
    case '&gt;': return '>';
    case '&amp;': return '&';
    case '&#39;': return "'";
    default: return match;
  }
});


var body = {
  embeds: [
    {
      color: 16711680,
      author: {
        name: Youtube.newVideoByChannel.ChannelName,
        url: 'https://wutheringwaves.kurogame.com/en/',
        icon_url: String.prototype.concat(
          'https://avatar-resolver.vercel.app/youtube-avatar/q?url=',
          Youtube.newVideoByChannel.Url
        ),
      },
      title: decodedString,
      url: Youtube.newVideoByChannel.Url,
      description: Youtube.newVideoByChannel.Description,
      image: {
        url: String.prototype.concat(
          'https://avatar-resolver.vercel.app/youtube-thumbnail/q?url=',
          Youtube.newVideoByChannel.Url
        ),
      },
      footer: {
        text: String.prototype.concat(
          'Youtube • ',
          Youtube.newVideoByChannel.PublishedAt
        ),
        icon_url: 'https://i.imgur.com/0Ap4FTE.png',
      },
    },
  ],
};

MakerWebhooks.makeWebRequest.setBody(JSON.stringify(body));