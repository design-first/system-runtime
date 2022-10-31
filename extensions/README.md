## System Runtime Extensions

You can extend System Runtime core system by composing other systems at runtime. In that case, these systems are called **extensions**.

To add an extension, just install it at runtime.

#### Install an extension client-side

Just add a link tag in your HTML to install and start your extension:

```html
<!-- install your extension -->
<link rel="system" type="application/json" href="storage.json" />
```

#### Install an extension server-side

Just call _install_ API to install and start your extension:

```js
// install your extensions
runtime.install('storage.json')
```
