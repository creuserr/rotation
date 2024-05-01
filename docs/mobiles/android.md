# Android
**Category:** Mobile <br>
**Type:** `android` <br>
**Children:** `samsung`, `googlepixel`, `motorola`

```javascript
Rotation.createAndroid();
// Mozilla/4.0 (Linux; Android 10; XBP2422 Build/DV8750) AppleWebKit/188 (KHTML, like Gecko) Version/3.0 Chrome/8998 Mobile Safari/296
```

# Structure
```
Mozilla/[1].0 (Linux; Android [2]; [3] Build/[4]) AppleWebKit/[5] (KHTML, like Gecko) Version/[6].0 Chrome/[7] Mobile Safari/[8]
```

<sub>[1]</sub> Mozilla version <br>
```javascript
randint(3, 5);
```

<sub>[2]</sub> Android version <br>
```javascript
randint(10, 13);
```

<sub>[3]</sub> Model name <br>
```javascript
randchar(3) + randint(1000, 9999);
```

<sub>[4]</sub> Build name <br>
```javascript
randchar(2) + randarr(2).map(_ => randint(1000, 9999)).join(".");
```

<sub>[5]</sub> Webkit version <br>
```javascript
randarr(2).map(_ => randint(100, 999)).join(".");
```

<sub>[6]</sub> Primary version <br>
```javascript
randint(3, 5);
```

<sub>[7]</sub> Chromium version <br>
```javascript
randarr(4).map(_ => randint(0, 9999)).join(".");
```

<sub>[8]</sub> Safari version <br>
```javascript
randarr(2).map(_ => randint(10, 700)).join(".");
```

# Customization
```javascript
{
  mozilla: Number, // [1]
  android: Number, // [2]
  model: String, // [3]
  build: String, // [4]
  webkit: String, // [5]
  version: String, // [6]
  chromium: String, // [7]
  safari: String // [8]
}
```