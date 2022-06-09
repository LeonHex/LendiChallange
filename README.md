## Info

./services is the backend API
./app is a frontend app

## How to run this

First you want to start the API

cd ./services && yarn && yarn start

Then you want to start the app

cd ./app && yarn && yarn start

## The test

You'll start with the app not showing any data

### Task 1: Populate the site with brokers and appointments

### Task 2: Add logic for colapsing/expanding broker appointments

### Task 3: Show appointment details on right hand side when clicking on an appointment

### Task 4: Show appointment details on top navigation when clicking on an appointment

### Task 5: Modify the appointments API to sort by date in a descending order then by broker id in ascending order

### Optional task: complete unit test in ./app/src/components/AppointmentSelect/Broker

Leon's note:
I spent 1 hour to complete this challenge with all tasks completed.

The shared appt info is passed by props drill. The reason I chose to implement it this way is because this is a very easy app with only a bit of information that needs to be shared. The rendering tree is simple with only 2 layers as well.
If, in the future, this rendering tree become bigger and bigger, or the information that needs to be shared increases, we can use redux, final-form, etc state management tools to rewrite this part.

I didn't do any error handling for now and I assume the error handling should be a standard feature across the whole site.

The unit tests could be enhanced by passing some invalid props to the component and check if the component could still work with incorrect props(at least not throwing js errors and break the page).

With Task 5, I assume the sorting feature is done case by case, not to implement both sorting logic at the same time?

Some of the variables are not declared strictly with a type/interface. This could be enhanced for code quality purpose.
