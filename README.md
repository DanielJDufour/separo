# separo
> A Smarter String Split.  Preserve Separator and more!

# why separo?
Separo is Spanish for "I separate".

# background
[String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) is great for the most common cases, but not all cases.  For example, when you are splitting a string by a space, you will sometimes want to keep the space attached to the words.  This is especially important for compression where you might compress a word differently depending on whether it is preceeded or not by a space.

# install
```bash
npm install -S separo
```

# usage
```js
import separo from 'separo';

const str = "The dog runs.";
separo(str, " ");
// result is ["The", "dog", "runs"]

separo(str, " ", { keepSep: true });
// result is ["The", " ", "dog", " ", "runs"]

separo(str, " ", { attachSep: true });
// result is ["The", " dog", " runs"]

separo(str, [" ", "."], { keepSep: true });
// result is ["The", " ", "dog", " ", "runs", "."]
```
