# Tools

## Randomization

`ignore` argument can be either a string or array of string. To ignore a method, add its type name in this argument. *(optional)*

`config` is the customization of a method. *(optional)*

### Random Mobile

```javascript
Rotation.randomMobile(ignore, config);

/* METHODS:
    Rotation.createSamsung,
    Rotation.createGooglePixel,
    Rotation.createMotorola,
    Rotation.createAndroid,
    Rotation.createIphone
*/
```

### Random Android

```javascript
Rotation.randomAndroid(ignore, config);

/* METHODS:
    Rotation.createMSLumia,
    Rotation.createSamsung,
    Rotation.createGooglePixel,
    Rotation.createMotorola,
    Rotation.createAndroid
*/
```

### Random Browser

```javascript
Rotation.randomBrowser(ignore, config);

/* METHODS:
    Rotation.createAndroidEdge,
    Rotation.createAndroidFirefox,
    Rotation.createAndroidChrome,
    Rotation.createAndroidOpera
*/
```

### Random Desktop

```javascript
Rotation.randomDesktop(ignore, config);

/* METHODS:
    Rotation.createWindows,
    Rotation.createChromeOS,
    Rotation.createMacSafari,
    Rotation.createIpad,
    Rotation.createAmazonKindle
*/
```

### Random Apple

```javascript
Rotation.randomApple(ignore, config);

/* METHODS:
    Rotation.createIphone,
    Rotation.createIpad,
    Rotation.createAppleWatch,
    Rotation.createAppleTV
*/
```

### Random Console

```javascript
Rotation.randomConsole(ignore, config);

/* METHODS:
    Rotation.createPlayStation,
    Rotation.createXboxOne,
    Rotation.createNintendo
*/
```

### Random Bot

```javascript
Rotation.randomBot(ignore, config);

/* METHODS:
    Rotation.createGoogleBot,
    Rotation.createBingBot,
    Rotation.createBaiduSpider
*/
```

### Random

```javascript
Rotation.random(ignore, config);

/* METHODS:
    Rotation.createBaiduSpider,
    Rotation.createBingBot,
    Rotation.createGoogleBot,
    Rotation.createNintendo,
    Rotation.createPlayStation,
    Rotation.createXboxOne,
    Rotation.createIphone,
    Rotation.createIpad,
    Rotation.createAppleWatch,
    Rotation.createAppleTV,
    Rotation.createMSLumia,
    Rotation.createChromeOS,
    Rotation.createMacSafari,
    Rotation.createAmazonKindle,
    Rotation.createSamsung,
    Rotation.createGooglePixel,
    Rotation.createMotorola,
    Rotation.createAndroid,
    Rotation.createAndroidEdge,
    Rotation.createAndroidFirefox,
    Rotation.createAndroidOperaMini,
    Rotation.createAndroidChrome,
    Rotation.createAndroidOpera
*/
```

## Generators

### Random Integer

```javascript
Rotation.randint(min, max);
```

### Random Array

```javascript
// generates a random 0s array
// with ranging size of 1 to max
Rotation.randarr(max);
```

### Random Characters

```javascript
// generates a random uppercase characters
Rotation.randchar(size);
```

### Character Set

```javascript
Rotation.charset; // Array String
// a 5x repeated set of alphabetical letters
```