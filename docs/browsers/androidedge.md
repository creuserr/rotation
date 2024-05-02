# Android on Edge
**Category:** Browser <br>
**Type:** `androidedge`

```javascript
Rotation.createAndroidEdge();
// Mozilla/3.0 (Linux; Android 11; MAG5964) AppleWebKit/456.828 (KHTML, like Gecko) Chrome/4717.7741.4978.7134 Mobile Safari/234.351 EdgA/931
```

# Structure
```
Mozilla/[1].0 (Linux; Android [2]; [3]) AppleWebKit/[4] (KHTML, like Gecko) Chrome/[5] Mobile Safari/[6] EdgA/[7]
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

<sub>[7]</sub> Edge version <br>
```javascript
randarr(4).map(_ => randint(100, 999)).join(".");
```

# Customization
```javascript
{
  mozilla: Number, // [1]
  android: Number, // [2]
  model: String, // [3]
  webkit: String, // [4]
  chromium: String, // [5]
  safari: String, // [6]
  edge: String, // [7]
}
```