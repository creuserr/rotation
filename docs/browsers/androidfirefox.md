# Android on Firefox
**Category:** Browser <br>
**Type:** `androidfirefox`

```javascript
Rotation.createAndroidFirefox();
// Mozilla/4.0 (Android 12; Mobile; rv:27.0) Gecko/550239 Firefox/40.0
```

# Structure
```
Mozilla/[1].0 (Android [2]; Mobile; rv:[3].0) Gecko/[4] Firefox/[5].0
```

<sub>[1]</sub> Mozilla version <br>
```javascript
randint(3, 5);
```

<sub>[2]</sub> Android version <br>
```javascript
randint(10, 13);
```

<sub>[3]</sub> RV version <br>
```javascript
randint(10, 99);
```

<sub>[4]</sub> Gecko version <br>
```javascript
randint(100000, 999999);
```

<sub>[5]</sub> Firefox version <br>
```javascript
randint(10, 99);
```

# Customizationh
```javascript
{
  mozilla: Number, // [1]
  android: Number, // [2]
  rv: Number, // [3]
  gecko: String, // [4]
  firefox: Number // [5]
}
```