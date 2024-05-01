# iPhone
**Category:** Mobile <br>
**Type:** `iphone`

```javascript
Rotation.createIphone();
// Mozilla/5.0 (iPhone; U; CPU iphone OS12_1 like Mac OS X) AppleWebKit/490.472 (KHTML, like Gecko) Version/5.0 FxiOs/245.108 Mobile Safari/40.393
```

# Structure
```
Mozilla/[1].0 (iPhone[2]; U; CPU iphone OS[3] like Mac OS X) AppleWebKit/[4] (KHTML, like Gecko) Version/[5].0 [6] Mobile Safari/[7]
```

<sub>[1]</sub> Mozilla version <br>
```javascript
randint(3, 5);
```

<sub>[2]</sub> iPhone version <br>
```javascript
randint(0, 1) == 1 ? randint(10, 15) : null;
```

<sub>[3]</sub> iPhone OS version <br>
```javascript
randint(10, 15) + "_" + randint(0, 9);
```

<sub>[4]</sub> Webkit version <br>
```javascript
randarr(2).map(_ => randint(100, 999)).join(".");
```

<sub>[5]</sub> Primary version <br>
```javascript
randint(3, 5);
```

<sub>[6]</sub> Browser OS version<br>
```javascript
//            chromium  firefox
const platf = ["CriOS", "FxiOS"];

platf[randint(0, platf.length - 1)] + "/" + randarr(2).map(_ => randint(0, 999)).join(".");
```

<sub>[7]</sub> Safari version <br>
```javascript
randarr(2).map(_ => randint(10, 700)).join(".");
```

# Customization
```javascript
{
  mozilla: Number, // [1]
  ipversion: Number, // [2]
  cpu: String, // [3]
  webkit: String, // [4]
  version: Number, // [5]
  os: String, // [6]
  safari: String // [7]
}
```