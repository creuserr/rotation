# PlayStation
**Category:** Console <br>
**Type:** `playstation`

```javascript
Rotation.createPlayStation();
// Mozilla/5.0 (PlayStation; PlayStation 4/97.81) AppleWebKit/991.417 (KHTML, like Gecko) Version/3.0 Safari/275.493
```

# Structure
```
Mozilla/[1].0 (PlayStation; PlayStation [2]) AppleWebKit/[3] (KHTML, like Gecko) Version/[4].0 Safari/[5]
```

<sub>[1]</sub> Mozilla version <br>
```javascript
randint(3, 5);
```

<sub>[2]</sub> PlayStation version <br>
```javascript
randint(3, 5) + "/" + randarr(2).map(_ => randint(10, 99)).join(".");
```

<sub>[3]</sub> Webkit version <br>
```javascript
randarr(2).map(_ => randint(100, 999)).join(".");
```

<sub>[4]</sub> Primary version <br>
```javascript
randint(3, 5);
```

<sub>[5]</sub> Safari version <br>
```javascript
randarr(2).map(_ => randint(10, 700)).join(".");
```

# Customization
```javascript
{
  mozilla: Number, // [1]
  playstation: String, // [2]
  webkit: String, // [3]
  version: Number, // [4]
  safari: String // [5]
}
```