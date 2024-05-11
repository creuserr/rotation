# Android on Opera
**Category:** Browser <br>
**Type:** `androidopera`

```javascript
Rotation.createAndroidOpera();
// Opera/80 (Android; Opera Mini/34; U; en) Presto/303.238 Version/10
```

# Structure
```
Opera/[1] (Android; Opera Mini/[2]; U; en) Presto/[3] Version/[4]
```

<sub>[1]</sub> Opera version <br>
```javascript
randarr(4).map(_ => andint(10, 99)).join(".");
```

<sub>[2]</sub> Opera Mini version <br>
```javascript
randarr(4).map(_ => randint(10, 99)).join(".");
```

<sub>[3]</sub> Presto version <br>
```javascript
randarr(4).map(_ => randint(100, 999)).join(".");
```

<sub>[4]</sub> Primary version <br>
```javascript
randint(7, 12);
```

# Customization
```javascript
{
  opera: Number, // [1]
  opver: Number, // [2]
  presto: Number, // [3]
  version: Number // [4]
}
```