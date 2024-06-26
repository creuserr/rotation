# Windows
**Category:** Desktop <br>
**Type:** `windows`

```javascript
Rotation.createWindows();
// Mozilla/4.0 (Windows NT 8.0; Win32; x32) AppleWebKit/669 (KHTML, like Gecko) Chrome/3168.7177 Safari/369.85
```

# Structure
```
Mozilla/[1].0 (Windows NT [2].0; [3]; [4]) AppleWebKit/[5] (KHTML, like Gecko) Chrome/[6] Safari/[7]
```

<sub>[1]</sub> Mozilla version <br>
```javascript
randint(3, 5);
```

<sub>[2]</sub> Windows NT version <br>
```javascript
rot.randint(7, 12);
```

<sub>[3]</sub> Windows OS <br>
```javascript
["Win32", "Win64"];
```

<sub>[4]</sub> Architecture <br>
```javascript
["x32", "x64"];
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

# Customization
```javascript
{
  mozilla: Number, // [1]
  windows: Number, // [2]
  version: String, // [3]
  os: String, // [4]
  webkit: String, // [5]
  chromium: String, // [6]
  safari: String // [7]
}
```