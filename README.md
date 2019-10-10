
<h1 align="center">
  IoT @ Home 🏡 Vacations 🏝
</h1>

Small Lambdafunction to check if the current day is during a german school-vacation.

## 🚀 Quick start

1.  **How to configure**

    You can add a SEVER-VAR named: ```STATE``` to call the integrated Vacation API from: https://www.ferien-api.de
    Value could be any of: https://de.wikipedia.org/wiki/ISO_3166-2:DE without: ```"DE-"```.
    So
    ```STATE = NW```
    It also check if there is any other "holiday" - from: https://ipty.de/feiertag/
    and merged these two values to: ```isFree``` as a boolean.

1.  **RETURN**

    You recive a JSON including:

    ```json
    {
        weekend: bool,
        vacation: bool,
        freeday: bool,
        isFree: bool
    }
    ```
![](https://media.giphy.com/media/xTiTny5Iu35uW0Jl9C/giphy.gif)
