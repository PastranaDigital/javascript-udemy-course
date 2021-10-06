# Structure

-   Like a house, software needs a structure: the way we ORGANIZE OUR CODE

# Maintainability

-   A project is never done! We need to be able to easily CHANGE IT IN THE FUTURE

# Expandability

-   We also need to be able to easily ADD NEW FEATURES

The perfect architecture is one that allows for all 3 of these

# Components of any Architecture

-   Business Logic
    -   Code that solves the actual business problem
    -   Directly related to what business does and what it needs
    -   EX: sending messages, storing transactions, calculating taxes...
-   State
    -   Essentially stores all the data about the application
    -   Should be the "single source of truth'
    -   UI should be kept in sync with the state
    -   State libraries exist if needed (Redux...)
-   HTTP Library
    -   Responsible for making and receiving AJAX requests (fetch function)
    -   Optional but almost always necessary in real-world apps
-   Application Logic (Router)
    -   Code that is only concerned about the implementation of the application itself
    -   Handles navigation and UI events
-   Presentation Logic (UI Layer)
    -   Code that is concerned about the visible part of the application
    -   Essentially displays application state

# The Model-View-Controller (MVC) Architecture

[ WEB ] <=> MODEL | CONTROLLER | VIEW => [ USER ]

## Model

-   Business Logic
-   State
-   HTTP Library

## Controller

-   Application Logic
    -   creates the bridge between MODEL and VIEW (which don't know about one another)
    -   Only part that does functions and imports
    -   Handles UI events and dispatches tasks to MODEL and VIEW

## View

-   Presentation Logic

## Example Order of Events

0. USER - enters search query
1. CONTROLLER - a function is called
2. VIEW & MODEL - a function is called
3. MODEL - data flows to WEB and back
4. CONTROLLER then VIEW - data is updated
5. USER - data is presented

# Publisher - Subscriber Pattern

-   Events should be handled in the CONTROLLER (otherwise we would have application logic in the view)
-   Events should be listened for in the VIEW (otherwise we would need DOM elements in the controller)
-   Publisher = code that knows when to react
-   Subscriber = code that wants to react
