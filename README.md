## Directly Testing Methods Defined on React Components

A common pattern when testing component methods using the AirBnB enzyme library is to figure out what event triggers the method through normal usage of the component, and simulate that event to indirectly trigger it.

While this is a valuable test to ensure your component behaves as expected, it can become tedious and difficult to configure a component in just the right way to fully exercise a complex method in this indirect way.

I recently learned about the enzyme `wrapper.instance()` method, which returns the component instance inside of the wrapper. Getting access to this instance allows you to directly invoke component methods, instead of resorting to event simulation to indirectly trigger them.

This also allows you to spy on component methods using `jest.spyOn()`, which can be useful to ensure complex interactions between private methods occur as expected.

This repository contains a sample component `Home.js` with a method `incrementCounter()` that I exercise both indirectly and directly in the file `Home.test.js`.


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
