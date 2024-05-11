# Apple Watch
**Category:** Miscellaneous <br>
**Sub-category:** Smart Watch <br>
**Type:** `applewatch`

```javascript
Rotation.createAppleWatch();
// Mozilla/4.0 (Apple Watch 3; CPU Apple Watch WatchOS like Mac OS X; WatchApp)
```

# Structure
```
Mozilla/[1].0 (Apple Watch [2]; CPU Apple Watch WatchOS like Mac OS X; WatchApp)
```

<sub>[1]</sub> Mozilla version <br>
```javascript
randint(3, 5);
```

<sub>[2]</sub> Apple Watch version <br>
```javascript
randint(3, 5);
```

# Customization
```javascript
{
  mozilla: Number, // [1]
  version: Number // [2]
}
```