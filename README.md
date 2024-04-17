# rotation
A simple mobile-based user agent generator

```
Mozilla 5.0 (Linux; Android 11 RMX137 Build/XR76373.29021.60762) AppleWebKit/514 (KHTML, like Gecko) Version/3 Chrome/LB30197.30278.30072 Mobile Safari/538
```

## Usage
```js
rotation.create()
// Returns a string
```

## Structure
```
Mozilla [1] (Linux; Android [2] [3] Build/[4]) AppleWebKit/[5] (KHTML, like Gecko) Version/[1] Chrome/[4] Mobile Safari/[5]
```

<sub>[1]</sub> Ranging 3 - 5<br>
<sub>[2]</sub> Ranging 10 - 13<br>
<sub>[3]</sub> 3 random characters and 3 random digits<br>
<sub>[4]</sub> 2 random characters and digits ranging 1 - 99,999<br>
<sub>[5]</sub> Ranging 500 - 550
