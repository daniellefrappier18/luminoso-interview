# Term counting: a coding challenge

In order to get a quick overview of what a text document is about, we'd like
you to write a small webapp where a user can paste some English text, and
then see a table of the most common words in the file.

## What are we looking for?

This exercise is our chance to get a look at your coding style -- to make
sure that you can produce code that the rest of the team will be happy
working with and maintaining. With this in mind, please approach the
exercise as if you're demonstrating how you'd contribute to a larger
system, not just writing a one-off script to get the job done.

When we evaluate your code sample, we'll consider questions like:

- Does the output match what we asked for?
- Is the code simple, readable, and well documented?
- Will the design be easy to update and maintain?
- Are there automated tests that verify correct behavior?

## Details

We've provided the skeleton of a React app. This skeleton includes some HTML
and CSS to lay out a basic user interface, but doesn't yet have any code to do
the actual term counting. Please clone a copy of this repository to build off
of.

A user should be able to paste some text into the textarea, press a button, and
be shown a table of the most common words and their frequencies, like this:

| Word  | Frequency |
| :---- | --------: |
| hello |       327 |
| hi    |        42 |
| howdy |        17 |

When displaying results as JSON, _all_ words and their frequencies should be
shown.

We know time is limited, and the goal of this exercise is to show us the
quality of your work. We'd much rather see a simple version of your
solution cleanly implemented than a more feature-rich version with no
tests, no documentation, and a poor design. Therefore, you should feel
free to make any simplifying assumptions necessary to get a basic version
of the application up and running; for example, you don't need to treat
"thing" and "things" as the same word. If you have time and are so
inclined, feel free to elaborate further from there.

Document your design and your decisions (within the code and/or in a separate
file) including how to run your program and your tests. Explain any fixes or
enhancements you'd like to make to the application if you had more time.

If you want a file to test with, we recommend using a plain text
formatted e-book from [Project Gutenberg](https://www.gutenberg.org/).

## Working with the code

We've placed most of our code in `src/App.js`, and a skeleton of a test file is
located in `src/App.test.js`.

To get started making changes, you should be able to clone the repository
locally. To download all required dependencies, run `npm install` or
`yarn install`. Once dependencies are installed, start the development server
by running `npm start` or `yarn start`. This should open the webapp in the
browser.

To run tests, run `npm test` or `yarn test`.

## Submitting your code

When your code is ready, create an archive of your work and email it to
`hiring@luminoso.com`. What you send us should include:

- Any necessary instructions on how to run your code (if they differ from
  what's already in this README)
- The code itself, along with any other files required for it to run (note that
  you should _not_ include your `node_modules` directory).
- Automated tests
- The version of Node you used when working on it (the output of
  `node --version` -- e.g., "v14.15.4")

Please send it only to us, and don't make your code publicly available.

We review code samples anonymously, so please DO NOT PUT YOUR NAME in any of
your files or filenames.
