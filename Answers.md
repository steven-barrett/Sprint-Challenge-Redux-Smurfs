1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects?
    Array.concat(), array.filter() and array.map()...since they create a new array they don't mutate the original

     Which method do we use to create a new object while extending the properties of another object?
        the obj.create() would do that or we could use the spread operator ...

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Reducers specify how the application's state changes in response to actions sent to the store.  Actions are payloads of information that send data from your app to your store. They are the only source of information for the store.  The Store is the object that brings the reducer and actions together

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    Your application state is global, and your component state is local. Redux uses the store to hold application state. That means any component, anywhere in the app can access it so long as they hook into it.
    Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.

    If you need multiple components to see your some information you should use application state, otherwise if only one component needs to the info component state is fine

4.  What is middleware?
    middleware gives you access to req and res in the apps request-> response cycle, its a great way to run code on each request, or on each request for a certain route, and to take action on request or response data

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
    
6.  Which `react-redux` method links up our `components` with our `redux store`?
    connect
