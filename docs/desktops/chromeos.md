# Chrome OS
**Category:** Desktop <br>
**Type:** `chromeos`

```javascript
Rotation.createChromeOS();
// Mozilla/4.0 (X11; CrOS x64 777) AppleWebKit/517 (KHTML, like Gecko) Chrome/2986.447.7684.4969 Safari/475
```

# Structure
```
Mozilla/[1].0 (X11; CrOS [2] [3]) AppleWebKit/[4] (KHTML, like Gecko) Chrome/[5] Safari/[6]
```

<sub>[1]</sub> Mozilla version <br>
```javascript
randint(3, 5);
```

<sub>[2]</sub> Architecture <br>
```javascript
["x32", "x64"];
```

<sub>[3]</sub> OS Version <br>
```javascript
randarr(2).map(_ => randint(100, 999)).join(".");
```

<sub>[4]</sub> Webkit version <br>
```javascript
randarr(2).map(_ => randint(100, 999)).join(".");
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
  os: String, // [2]
  version: String, // [3]
  webkit: String, // [4]
  chromium: String, // [5]
  safari: String // [6]
}
```