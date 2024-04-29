# Nintendo Switch 
**Category:** Console <br>
**Type:** `nintendo`

```javascript
Rotation.createNintendo();
// Mozilla/4.0 (Nintendo Switch; WifiWebAuthApplet) AppleWebKit/777.188 (KHTML, like Gecko) NF/8 NintendoBrowser/2.1
```

# Structure
```
Mozilla/[1].0 (Nintendo Switch; WifiWebAuthApplet) AppleWebKit/[2] (KHTML, like Gecko) NF/[3] NintendoBrowser/[4]
```

<sub>[1]</sub> Mozilla version <br>
```javascript
randint(3, 5);
```

<sub>[2]</sub> Webkit version <br>
```javascript
randarr(2).map(_ => randint(100, 999)).join(".");
```

<sub>[3]</sub> Nintendo framework version <br>
```javascript
randarr(4).map(_ => randint(1, 10)).join(".");
```

<sub>[4]</sub> Nintendo browser <br>
```javascript
randarr(4).map(_ => randint(1, 10)).join(".");
```

# Customization
```javascript
{
  mozilla: Number, // [1]
  webkit: String, // [2]
  nf: String, // [3]
  browser: String // [4]
}
```