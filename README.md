# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Advice Generator Desktop](./design/desktop-design.jpg)

### Links

- Solution URL: [Source Code](https://github.com/devrayat000/advice-generator)
- Live Site URL: [Love Demo](https://adwizer.netlify.app/)

## My process

### Built with

- [SvelteKit](https://kit.svelte.dev/) - JS Framework
- [TailwindCSS](https://tailwindcss.com/) - For styles

### What I learned

Though this project was easy, I learned a small but powerful feature of __SvelteKit__ which is invalidating the _load function_.

First, I implemented the load function and returned a _dependency array_:

```ts
export const load: Load = async ({ fetch }) => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();

    return {
        props: {
            advice: data
        },
        cache: {
            maxage: 30 // 1 minute
        },
        dependencies: ['advice']
    };
};
```

Then, I _invalidate_ the load function every time the user clicks a button:

```ts
function fetchNewAdvice() {
    return invalidate('advice');
}
```

## Author

- Website - [Zul Ikram Musaddik Rayat](https://devrayat.me/)
- Frontend Mentor - [@devrayat000](https://www.frontendmentor.io/profile/devrayat000)
- Twitter - [@MusaddikRayat](https://www.twitter.com/MusaddikRayat)
