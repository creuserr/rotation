# Google Pixel
**Category:** Mobile <br>
**Type:** `googlepixel` <br>
**Parent:** `android`

```javascript
Rotation.createGooglePixel();
// Mozilla/3.0 (Linux; Android 12; Pixel 7a Pro Build/OT1293.6987) AppleWebKit/893 (KHTML, like Gecko) Version/5.0 Chrome/5288 Mobile Safari/314
```

# Structure
```
Mozilla/[1].0 (Linux; Android [2]; Pixel [3] [4] Pro Build/[5]) AppleWebKit/[6] (KHTML, like Gecko) Version/[7].0 Chrome/[8] Mobile Safari/[9]
```

<sub>[1]</sub> Mozilla version <br>
```javascript
randint(3, 5);
```

<sub>[2]</sub> Android version <br>
```javascript
randint(10, 13);
```

<sub>[3]</sub> Google Pixel version <br>
```javascript
// "isa" is an additional model suffix.
// If the model is not a Pro version,
// there is a 50% chance that the
// model will have the suffix "a".
// (Note: "isa" is not customizable.)

`Pixel ${mod}${isa ? "a" : ""} ${ispro ? "Pro" : ""}`;
```

<sub>[4]</sub> Is Pro version? <br>
```javascript
// "ispro" is an additional model suffix.
// If the model is a Pro version,
// the "a" suffix won't appear.

rot.randint(0, 1) == 1;
```

<sub>[5]</sub> Build name <br>
```javascript
randchar(2) + randarr(2).map(_ => randint(1000, 9999)).join(".");
```

<sub>[6]</sub> Webkit version <br>
```javascript
randarr(2).map(_ => randint(100, 999)).join(".");
```

<sub>[7]</sub> Primary version <br>
```javascript
randint(3, 5);
```

<sub>[8]</sub> Chromium version <br>
```javascript
randarr(4).map(_ => randint(0, 9999)).join(".");
```

<sub>[9]</sub> Safari version <br>
```javascript
randarr(2).map(_ => randint(10, 700)).join(".");
```

# Customization
```javascript
{
  mozilla: Number, // [1]
  android: Number, // [2]
  model: String, // [3]
  ispro: Boolean, // [4]
  build: String, // [5]
  webkit: String, // [6]
  version: String, // [7]
  chromium: String, // [8]
  safari: String // [9]
}
```