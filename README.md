
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

1.  **RETURN**

    You recive a JSON including:

    ```json
    {
          message: bool,
          vacation: vacationName
    }
    ```
