<span style="color:#89A8B2; font-weight:bold;">Prompt 1</span>

> the context is backend code, next i need to build a front-end application that integrate with the backend. Assume you are a professional React developer. please guide me through the steps and provide the code to mee the following requirements:
>
> 1.allow users to enter a plate number (input field) and select a parking strategy (dropdown menu)
> 2.after users select a parking strategy and input a plate number, the front-end should send this data to the backend to park or fetch the cars. the input field for the plate number, dropdown menu, "Park" button and "Fetch" button should be aligned horizontally.
> 3.the front end should display 3 parking lots which are aligned horizontally, each represented as a matrix with the parking lot's name below it. the first parking lots should be a 3x3 matrix, the second a 3x3 matrix, and the third a 3x3 matrix. please apply table style to each matrix, remove borders around the outside of the table if you can.
>
> 4. initially, all matrices should be an empty cell without any text.  when a car is parked, the plate number should appear in the appropriate cell, filling horizontally and moving to the next row when a row is full.
>
> 5.when a car is fetched, its plate number should be removed from the corresponding parking lot matrix.
>
> 6. use React, Javascript for implementation, and consider utilizing useContext and useReducer for effiency. Use axios for API, update App.js if necessary.
> 7. Apply nice styles to the input field, dropdown menu, buttons, parking lot tables.
> 8. the backend link is http://localhost:8080/parking
> 9. show me the file directory structure

<span style="color:#89A8B2; font-weight:bold;">Prompt 1</span>

> the context is backend code, next i need to build a front-end application that resembles the attached image. assume you are a professional React developer. please guide me through the steps and provide the code to mee the following requirements:
>
> 1.allow users to enter a plate number (input field) and select a parking strategy (dropdown menu)
> 2.after users select a parking strategy and input a plate number, the front-end should send this data to the backend to park or fetch the cars. the input field for the plate number, dropdown menu, "Park" button and "Fetch" button should be aligned horizontally.
> 3.the front end should display 3 parking lots which are aligned horizontally, each represented as a matrix with the parking lot's name below it. the first parking lots should be a 3x3 matrix, the second a 3x3 matrix, and the third a 3x3 matrix. please apply table style to each matrix, remove borders around the outside of the table if you can.
>
> 4. initially, all matrices should be an empty cell without any text.  when a car is parked, the plate number should appear in the appropriate cell, filling horizontally and moving to the next row when a row is full.
>
> 5.when a car is fetched, its plate number should be removed from the corresponding parking lot matrix.
>
> 6. use React, Javascript for implementation, and consider utilizing useContext and useReducer for effiency. Use axios for API, update App.js if necessary.
> 7. Apply nice styles to the input field, dropdown menu, buttons, parking lot tables.
> 8. the backend link is http://localhost:8080/parking
> 9. show me the file directory structure



<span style="color:#89A8B2; font-weight:bold;">Prompt 2</span>

> Please help fix below bugs:
>
> hook.js:608 An error occurred in the <ParkingProvider> component.
>
> Consider adding an error boundary to your tree to customize error handling behavior.
> Visit https://react.dev/link/error-boundaries to learn more about error boundaries.
>  Error Component Stack
>     at ParkingProvider (ParkingContext.js:7:1)
>     at App (<anonymous>)

<span style="color:#89A8B2; font-weight:bold;">Prompt 3</span>

> When a parking lot has an array of 12, it should generate a 3x4 matrix. When a parking lot has an array of 9, it should generate a 3x3 matrix.

