# Kindle Fire
**Category:** Tablet <br>
**Type:** `amazonkindle`

```javascript
Rotation.createAmazonKindle();
// Mozilla/4.0 (Linux; Android 10; KFISBE) AppleWebKit/219 (KHTML, like Gecko) Chrome/9057.6430 Safari/556
```

# Structure
```
Mozilla/[1].0 (Linux; Android [2]; KF[3]) AppleWebKit/[4] (KHTML, like Gecko) Chrome/[5] Safari/[6]
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
randchar(4);
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
  android: Number, // [2]
  webkit: String, // [3]
  chromium: String, // [4]
  safari: String // [5]
}
```