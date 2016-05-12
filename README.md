# Beer Bonuses

Installation:

```
createdb beer-bonuses
npm install
copy .env.example > .env
knex migrate:latest
```

# Create Angular App

- cdn angular + router
- ng-app / module
- two routes
- html5mode
- express wildcard route
- home controller / template
    - show the current user's name
- signup controller / template
    - form / on submit
    - http call
        - handdles success
            - store token
            - redirect to home page
        - handles errors
            - show errors

