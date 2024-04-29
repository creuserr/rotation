# Google Bot
**Category:** Bot <br>
**Type:** `googlebot`

```javascript
Rotation.createGoogleBot();
// Mozilla/5.0 AppleWebKit/935.291 (KHTML, like Gecko; compatible; Googlebot/9.4; +http://www.google.com/bot.html) Chrome/5875.7469 Safari/168
```

# Structure
```
Mozilla/[1].0 AppleWebKit/[2] (KHTML, like Gecko; compatible; Googlebot/[3]; +[4]) Chrome/[5] Safari/[6]
```

<sub>[1]</sub> Mozilla version <br>
```javascript
randint(3, 5);
```

<sub>[2]</sub> Webkit version <br>
```javascript
randarr(2).map(_ => randint(100, 999)).join(".");
```

<sub>[3]</sub> Google bot version <br>
```javascript
randarr(2).map(_ => randint(1, 9)).join(".");
```

<sub>[4]</sub> Bot origin <br>
```javascript
"http://www.google.com/bot.html"
```

<sub>[5]</sub> Chromium version <br>
```javascript
randarr(4).map(_ => randint(0, 9999)).join(".");
```

<sub>[6]</sub> Safari version <br>
```javascript
randarr(2).map(_ => randint(10, 700)).join(".");
```

# Customization
```javascript
{
  mozilla: Number, // [1]
  webkit: String, // [2]
  bot: String, // [3]
  url: String, // [4]
  chromium: String, // [5]
  safari: String // [6]
}
```