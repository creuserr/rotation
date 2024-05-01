> [!WARNING]
> This documentation is under construction. Please refer to `/v1/` for the stable version.

# rotation
`rotation` is a diverse user-agent generator library written in javascript.

```
Bots:
  BaiduSpider        - Mozilla/4.0 (compatible; Baiduspider-render/2.9; +http://www.baidu.com/search/spider.html)
  BingBot            - Mozilla/4.0 (compatible; bingbot/8.7; +http://www.bing.com/bingbot.htm)
  GoogleBot          - Mozilla/5.0 AppleWebKit/935.291 (KHTML, like Gecko; compatible; Googlebot/9.4; +http://www.google.com/bot.html) Chrome/5875.7469 Safari/168
```
```
Consoles:
  Nintendo Switch    - Mozilla/4.0 (Nintendo Switch; WifiWebAuthApplet) AppleWebKit/777.188 (KHTML, like Gecko) NF/8 NintendoBrowser/2.1
  PlayStation        - Mozilla/5.0 (PlayStation; PlayStation 4/97.81) AppleWebKit/991.417 (KHTML, like Gecko) Version/3.0 Safari/275.493
  Xbox One           - Mozilla/3.0 (Windows NT 10.0; Win32; x64; Xbox; Xbox One) AppleWebKit/192.798 (KHTML, like Gecko) Chrome/2195.43 Safari/126.191 Edge/245
```
```
Desktops:
  Chrome OS          - Mozilla/4.0 (X11; CrOS x64 777) AppleWebKit/517 (KHTML, like Gecko) Chrome/2986.447.7684.4969 Safari/475
  Windows            - Mozilla/4.0 (Windows NT 8.0; Win32; x32) AppleWebKit/669 (KHTML, like Gecko) Chrome/3168.7177 Safari/369.85
  Mac on Safari      - Mozilla/5.0 (Macintosh; Intel Mac OS X 12_6) AppleWebKit/379 (KHTML, like Gecko) Version/67.67 Safari/269
```
```
Mobile:
  iPhone             - Mozilla/5.0 (iPhone; U; CPU iphone OS12_1 like Mac OS X) AppleWebKit/490.472 (KHTML, like Gecko) Version/5.0 FxiOs/245.108 Mobile Safari/40.393
  Microsoft Lumia    - Mozilla/3.0 (Windows Phone 13.0; Android 10; Microsoft; RM-3163) AppleWebKit/608 (KHTML, like Gecko) Chrome/5456.9510.1025.7793 Mobile Safari/480 Edge/914.277
  Samsung            - Mozilla/4.0 (Linux; Android 11; SM-Z911I Build/OI9061) AppleWebKit/508 (KHTML, like Gecko) Version/5.0 Chrome/9590.3002.5264.4919 Mobile Safari/125
  Google Pixel       - Mozilla/3.0 (Linux; Android 12; Pixel 7a Pro Build/OT1293.6987) AppleWebKit/893 (KHTML, like Gecko) Version/5.0 Chrome/5288 Mobile Safari/314
  Motorola           - Mozilla/4.0 (Linux; Android 13; moto g stylus 5g Build/OZ1319) AppleWebKit/636.244 (KHTML, like Gecko) Version/3.0 Chrome/3796.5424 Mobile Safari/583.377
  Android            - Mozilla/4.0 (Linux; Android 10; XBP2422 Build/DV8750) AppleWebKit/188 (KHTML, like Gecko) Version/3.0 Chrome/8998 Mobile Safari/296
```
```
Browsers:
  Android on Edge    - Mozilla/3 (Linux; Android 11; MAG5964) AppleWebKit/456.828 (KHTML, like Gecko) Chrome/4717.7741.4978.7134 Mobile Safari/234.351 EdgA/931
  Android on Firefox - Mozilla/4.0 (Android 12; Mobile; rv:27.0) Gecko/550239 Firefox/40.0
  Android on Opera   - Opera/80 (Android; Opera Mini/34; U; en) Presto/303.238 Version/10
  Android on Chrome  - Mozilla/5.0 (Linux; Android 13; K) AppleWebKit906.250 (KHTML, like Gecko) Chrome/6424.8417.353.6046 Mobile Safari/558
```
```
Tablets:
  Kindle Fire        - Mozilla/4.0 (Linux; Android 10; KFISBE) AppleWebKit/219 (KHTML, like Gecko) Chrome/9057.6430 Safari/556
  iPad               - Mozilla/5.0 (Macintosh; Intel Mac OS X 15_1) AppleWebKit/930 (KHTML, like Gecko) Version/94.0 Safari/554
```
```
Others:
  Apple Watch        - Mozilla/4.0 (Apple Watch3; CPU Apple Watch WatchOS like Mac OS X; WatchApp)
  Apple TV           - Mozilla/3.0 (AppleTV10; CPU OS 10.4 like Mac OS X; en-US)
```

# Installation

For server-side installation, download `rotation.js` from [here](https://github.com/creuserr/rotation/blob/main/dist/rotation.js) and import it into your Node.js file.

```javascript
const rotation = require("./rotation.js");
```

For client-side installation, import `rotation.min.js` using the CDN:

```html
<script src="https://cdn.jsdelivr.net/gh/creuserr/rotation/dist/rotation.min.js"></script>
```

# Usage
When creating a user agent, it will produce an object.

```javascript
Rotation.createAndroid();
{
  type: "android",
  useragent: "Mozilla/4.0 (Linux; Android 10; XBP2422 Build/DV8750) AppleWebKit/188 (KHTML, like Gecko) Version/3.0 Chrome/8998 Mobile Safari/296"
}
```

Every user agent generator can be customized by passing an object as an argument.

```javascript
Rotation.createAndroid({
  webkit: "123.456.789"
  // AppleWebKit/123.456.789
});
{
  type: "android",
  useragent: "Mozilla/5.0 (Linux; Android 11; SSP1494 Build/QO8622) AppleWebKit/123.456.789 (KHTML, like Gecko) Version/3.0 Chrome/6613 Mobile Safari/693"
}
```

`rotation` contains user agent generator, randomizers, and some small tools. Take a look at the list below for more information:

## User Agents

Bots:
- [Baidu Spider](https://github.com/creuserr/rotation/tree/main/docs/bots/baiduspider.md)
- [Bing Bot](https://github.com/creuserr/rotation/tree/main/docs/bots/bingbot.md)
- [Google Bot](https://github.com/creuserr/rotation/tree/main/docs/bots/googlebot.md)

Consoles:
- [PlayStation](https://github.com/creuserr/rotation/tree/main/docs/consoles/playstation.md)
- [Xbox One](https://github.com/creuserr/rotation/tree/main/docs/consoles/xboxone.md)
- [Nintendo](https://github.com/creuserr/rotation/tree/main/docs/consoles/nintendo.md)

Desktops:
- [Chrome OS](https://github.com/creuserr/rotation/tree/main/docs/desktops/chromeos.md)
- [Windows](https://github.com/creuserr/rotation/tree/main/docs/desktops/windows.md)
- [Mac on Safari](https://github.com/creuserr/rotation/tree/main/docs/desktops/macsafari.md)

Mobile:
- [iPhone](https://github.com/creuserr/rotation/tree/main/docs/mobiles/iphone.md)
- Microsoft Lumia
- Samsung
- Google Pixel
- Motorola
- Android

Browsers:
- Android on Edge
- Android on Firefox
- Android on Opera
- Android on Chrome

Tablets:
- Kindle Fire
- iPad

Others:
- Apple Watch
- Apple TV

## Tools

Randomizers:
- Random Mobile
- Random Android
- Random Browser
- Random Desktop
- Random Apple
- Random Console
- Random Bot
- Random (all user agent)

Generators:
- Random Integer
- Random Array
- Random Characters
- Character Set
