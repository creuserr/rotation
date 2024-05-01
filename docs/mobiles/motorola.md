# Motorola
**Category:** Mobile <br>
**Type:** `motorola` <br>
**Parent:** `android`

```javascript
Rotation.createMotorola();
// Mozilla/4.0 (Linux; Android 13; moto g stylus 5g Build/OZ1319) AppleWebKit/636.244 (KHTML, like Gecko) Version/3.0 Chrome/3796.5424 Mobile Safari/583.377
```

# Structure
```
Mozilla/[1].0 (Linux; Android [2]; [3] Build/[4]) AppleWebKit/[5] (KHTML, like Gecko) Version/[6].0 Chrome/[7] Mobile Safari/[8]
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
// There is a 50% chance
// that a year stamp (2010-2024)
// will appear.
// (Note: year stamp is not customizable.)

const model = ["moto g pure", "moto g stylus", "moto g stylus 5g", "moto g 5g", "moto g power"];
const year = randint(0, 1) == 1 ? randint(2010, 2024) : null;

// Even if the model is provided,
// the year stamp will appear nevertheless.

(customModel || model[randint(0, model.length - 1)]) + (year ? ` (${year})` : "");
```

<sub>[4]</sub> Build name <br>
```javascript
randchar(2) + randarr(2).map(_ => randint(1000, 9999)).join(".");
```

<sub>[5]</sub> Webkit version <br>
```javascript
randarr(2).map(_ => randint(100, 999)).join(".");
```

<sub>[6]</sub> Primary version <br>
```javascript
randint(3, 5);
```

<sub>[7]</sub> Chromium version <br>
```javascript
randarr(4).map(_ => randint(0, 9999)).join(".");
```

<sub>[8]</sub> Safari version <br>
```javascript
randarr(2).map(_ => randint(10, 700)).join(".");
```

# Customization
```javascript
{
  mozilla: Number, // [1]
  android: Number, // [2]
  model: String, // [3]
  build: String, // [4]
  webkit: String, // [5]
  version: String, // [6]
  chromium: String, // [7]
  safari: String // [8]
}
```