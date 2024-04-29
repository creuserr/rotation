# Bing Bot
**Category:** Bot <br>
**Type:** `bingbot`

```javascript
Rotation.createBingBot();
// Mozilla/4.0 (compatible; bingbot/8.7; +http://www.bing.com/bingbot.htm)
```

# Structure
```
Mozilla/[1] (compatible; bingbot/[2]; +[3])
```

<sub>[1]</sub> Mozilla version <br>
```javascript
randint(3, 5);
```

<sub>[2]</sub> Bing bot version <br>
```javascript
randarr(2).map(_ => randint(1, 9)).join(".");
```

<sub>[3]</sub> Bot origin <br>
```javascript
"http://www.bing.com/bingbot.htm"
```

# Customization
```javascript
{
  mozilla: Number, // [1]
  bot: String, // [2]
  url: String // [3]
}
```