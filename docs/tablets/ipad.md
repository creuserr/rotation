# iPad
**Category:** Tablet <br>
**Type:** `ipad`

```javascript
Rotation.createIpad();
// Mozilla/5.0 (Macintosh; Intel Mac OS X 15_1) AppleWebKit/930 (KHTML, like Gecko) Version/94.0 Safari/554
```

# Structure
```
Mozilla/[1].0 (Macintosh; Intel Mac OS X [2]) AppleWebKit/[3] (KHTML, like Gecko) Version/[4].0 Safari/[5]
```

<sub>[1]</sub> Mozilla version <br>
```javascript
randint(3, 5);
```

<sub>[2]</sub> OS X version <br>
```javascript
randint(10, 15) + "_" + randint(0, 9);
```

<sub>[3]</sub> Webkit version <br>
```javascript
randarr(2).map(_ => randint(100, 999)).join(".");
```

<sub>[4]</sub> Primary version <br>
```javascript
randint(10, 99);
```

<sub>[5]</sub> Safari version <br>
```javascript
randarr(2).map(_ => randint(10, 700)).join(".");
```

# Customization
```javascript
{
  mozilla: Number, // [1]
  os: String, // [2]
  webkit: String, // [3]
  version: Number, // [4]
  safari: String // [5]
}
```