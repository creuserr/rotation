# Microsoft Lumia
**Category:** Mobile <br>
**Type:** `mslumia`

```javascript
Rotation.createMSLumia();
// Mozilla/3.0 (Windows Phone 13.0; Android 10; Microsoft; RM-3163) AppleWebKit/608 (KHTML, like Gecko) Chrome/5456.9510.1025.7793 Mobile Safari/480 Edge/914.277
```

# Structure
```
Mozilla/[1].0 (Windows Phone [2].0; Android [3]; Microsoft; [4]) AppleWebKit/[5] (KHTML, like Gecko) Chrome/[6] Mobile Safari/[7] Edge/[8]
```

<sub>[1]</sub> Mozilla version <br>
```javascript
randint(3, 5);
```

<sub>[2]</sub> Windows version <br>
```javascript
randint(10, 15);
```

<sub>[3]</sub> Android version <br>
```javascript
randint(10, 13);
```

<sub>[4]</sub> Model name <br>
```javascript
randchar(2) + "-" + randint(1000, 9999);
```

<sub>[5]</sub> Webkit version <br>
```javascript
randarr(2).map(_ => randint(100, 999)).join(".");
```

<sub>[6]</sub> Chromium version <br>
```javascript
randarr(4).map(_ => randint(0, 9999)).join(".");
```

<sub>[7]</sub> Safari version <br>
```javascript
randarr(2).map(_ => randint(10, 700)).join(".");
```

<sub>[8]</sub> Edge version <br>
```javascript
randarr(4).map(_ => randint(100, 999)).join(".");
```

# Customization
```javascript
{
  mozilla: Number, // [1]
  windows: Number, // [2]
  android: Number, // [3]
  model: String, // [4]
  webkit: String, // [5]
  chromium: String, // [6]
  safari: String, // [7]
  edge: String // [8]
}
```