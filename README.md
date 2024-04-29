> [!NOTE]
> `rotation` will be revised soon. For more information, take a look at [Project Qualify](https://github.com/creuserr/creblog/blob/main/project-qualify.md).
>
> *Stamped at April 29, 2024*

# rotation
A simple mobile-based user agent generator

```
Mozilla 5.0 (Linux; Android 11 RMX137 Build/XR76373.29021.60762) AppleWebKit/514 (KHTML, like Gecko) Version/3 Chrome/LB30197.30278.30072 Mobile Safari/538
Mozilla 5.0 (Linux; Android 10 LBM835 Build/WS82869.19545.1689) AppleWebKit/526 (KHTML, like Gecko) Version/5 Chrome/XX14250.61032.6663 Mobile Safari/524
Mozilla 5.0 (Linux; Android 10 JZD231 Build/KX10327.83089.35678) AppleWebKit/511 (KHTML, like Gecko) Version/4 Chrome/LL41684.61195.82050 Mobile Safari/518
Mozilla 5.0 (Linux; Android 12 WXD353 Build/MP1397.53778.88478) AppleWebKit/508 (KHTML, like Gecko) Version/4 Chrome/JP42224.68505.77252 Mobile Safari/525
Mozilla 4.0 (Linux; Android 12 DKG515 Build/YV68604.63623.77150) AppleWebKit/515 (KHTML, like Gecko) Version/3 Chrome/CK57037.89185.80204 Mobile Safari/503
Mozilla 5.0 (Linux; Android 13 PQU711 Build/RE27246.35476.99476) AppleWebKit/535 (KHTML, like Gecko) Version/5 Chrome/WS95151.22474.67729 Mobile Safari/525
Mozilla 4.0 (Linux; Android 11 LMF782 Build/PE10630.61793.96082) AppleWebKit/504 (KHTML, like Gecko) Version/4 Chrome/GA54566.45987.15493 Mobile Safari/510
Mozilla 3.0 (Linux; Android 10 EME796 Build/MQ70915.22892.43126) AppleWebKit/514 (KHTML, like Gecko) Version/4 Chrome/RU73290.21407.57968 Mobile Safari/500
```

## Usage
```javascript
// In javascript
rotation.create()
```

```python
# In python
Rotation().create()
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
