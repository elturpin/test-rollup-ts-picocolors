# Problem

The build made by rollup will fail because it won't parse typescript

# The fix

In the [`rollup.config.js`](rollup.config.js) file, you can switch the "plugins" option to includes src for the TS rollup plugin.

However, I think it should not be necessary.
