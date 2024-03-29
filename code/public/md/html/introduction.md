# HTML

---

## What is HTML

- HTML stands for `Hyper Text Markup Launguage`
- HTML is the standard markup language for websites.
- HTML tells the browser how to display a website's content.

---

## HTML basics

### Example:

```html
<!doctype html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>Lorem occaecat aliqua.</p>
  </body>
</html>
```

### Example Explained

- The `<!DOCTYPE html>` declaration defines that this document is an HTML5 document
- The `<html>` element is the root element of an HTML page
- The `<head>` element contains meta information about the HTML page
- The `<title>` element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
- The `<body>` element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
- The `<h1>` element defines a large heading
- The `<p>` element defines a paragraph

The content inside the `<body>` section will be displayed in a browser. The content inside the `<title>` element will be shown in the browser's title bar or in the page's tab.

---

## What is an HTML element?

Most HTML elements are defined by a start tag, some content, and an end tag:

```html
<tagname> Content goes here </tagname>
```

The HTML element is everything from the start tag to the end tag:

```html
<h1>Hello World!</h1>
```

```html
<p>Lorem occaecat aliqua.</p>
```

Some elements do require an end tag:

```html
<br />
```
