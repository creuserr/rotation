# Apple TV
**Category:** Miscellaneous <br>
**Sub-category:** Smart TV <br>
**Type:** `appletv`

```javascript
Rotation.createAppleTV();
// Mozilla/3.0 (AppleTV10; CPU OS 10.4 like Mac OS X; en-US)
```

# Structure
```
Mozilla/[1].0 (AppleTV[2]; CPU OS [3] like Mac OS X; [4])
```

<sub>[1]</sub> Mozilla version <br>
```javascript
randint(3, 5);
```

<sub>[2]</sub> Apple TV version <br>
```javascript
tv = randint(7, 12);
```

<sub>[3]</sub> OS version <br>
```javascript
tv + "." + randint(0, 9);
```

<sub>[4]</sub> Language <br>
```javascript
"en-US";
```

# Customization
```javascript
{
  mozilla: Number, // [1]
  version: Number, // [2]
  os: String, // [3]
  language: String // [4]
}
```