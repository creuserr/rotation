# Android on Chrome
**Category:** Browser <br>
**Type:** `androidchrome`

```javascript
Rotation.createAndroidChrome();
// Mozilla/5.0 (Linux; Android 13; K) AppleWebKit/906.250 (KHTML, like Gecko) Chrome/6424.8417.353.6046 Mobile Safari/558
```

# Structure
```
Mozilla/[1].0 (Linux; Android [2]; K) AppleWebKit/[3] (KHTML, like Gecko) Chrome/[4] Mobile Safari/[5]
```

<sub>[1]</sub> Mozilla version <br>
```javascript
randint(3, 5);
```

<sub>[2]</sub> Android version <br>
```javascript
randint(10, 13);
```

<sub>[3]</sub> Webkit version <br>
```javascript
randarr(2).map(_ => randint(100, 999)).join(".");
```

<sub>[4]</sub> Chromium version <br>
```javascript
randarr(4).map(_ => randint(0, 9999)).join(".");
```

<sub>[5]</sub> Safari version <br>
```javascript
randarr(2).map(_ => randint(10, 700)).join(".");
```

# Customization
```javascript
{
  mozilla: Number, // [1]
  android: Number, // [2]
  webkit: String, // [3]
  chromium: String, // [4]
  safari: String // [5]
}
```