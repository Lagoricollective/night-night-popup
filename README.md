# Night Night Popup

A gentle late-night overlay that lets a website "go to sleep" after a chosen hour.

Originally made for Lagori Collective as a small temporal design experiment: a website does not need to behave like it is endlessly available. It can have rhythms, pauses, and a sense of care.

## What it does

By default, the popup appears between **11:00 PM and 6:00 AM**, based on the visitor's local time.

It includes:

- full-screen night overlay
- animated star field
- resting message
- skip button
- one-dismissal-per-session/day behaviour
- responsive layout

## Files

```text
night-night-popup/
├── index.html
├── night-night.css
├── night-night.js
└── README.md
```

## How to use

Add the CSS in your site head:

```html
<link rel="stylesheet" href="night-night.css">
```

Add the HTML block before the closing `</body>` tag:

```html
<div id="nn-overlay" class="nn-hidden">
  <div class="nn-stars" id="nn-stars"></div>

  <div class="nn-content">
    <div class="nn-text-block">
      <div class="nn-texture-strip"></div>

      <div class="nn-text-inner">
        <h1 class="nn-heading">It's late. There is value in stopping and resting.</h1>
        <p class="nn-body">Nothing here is worth losing sleep over. Go to sleep.</p>
        <p class="nn-wake">Back at 6:00 AM.</p>

        <button class="nn-skip-btn" onclick="nnDismiss()">
          I'll rest later. Take me in →
        </button>
      </div>
    </div>
  </div>
</div>
```

Add the script before the closing `</body>` tag:

```html
<script src="night-night.js"></script>
```

## Change the sleeping hours

Open `night-night.js` and edit:

```js
var SHOW_FROM = 23;
var SHOW_UNTIL = 6;
```

The time uses a 24-hour clock.

For example:

```js
var SHOW_FROM = 22; // 10 PM
var SHOW_UNTIL = 7; // 7 AM
```

## Squarespace

For Squarespace, you can usually add this in:

- Design → Custom CSS for the CSS
- Settings → Advanced → Code Injection for the HTML and JavaScript

If the popup should only appear on one page, add the HTML and JavaScript to that page's code injection instead.

## Customisation

You can change:

- the background colour in `#nn-overlay`
- the red accent in `.nn-texture-strip` and `.nn-custom-text`
- the main message in the HTML
- the number of stars in `night-night.js`

## Credit

Originally created for Lagori Collective.
Feel free to adapt, remix, and use it on your own website.
