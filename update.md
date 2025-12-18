## callouts

- The two columns are wrapped in a main that is nested in the body. The columns have padding around them of 96. The left column is sticky.

The default landing page is actually the user's about page. So what we'll do is actually move our about content to this page. Each subpage keeps the site layout. So as you click on an item in the left-hand column, you're presented with new content in the right. It's important that this feels nice and smooth. There's no jittering in terms of the visuals. It doesn't reload. When I click on the different items on the left-hand panel, there's no stuttering or anything; it's very smooth, and it appears that this left-hand navigation doesn't actually re-render.

As for the current models that we're using, we will still leverage them but we'll approach adding them in a different way.

Some additional things:

- The sidebar, each item has a little bit rounded. They have a hover effect and they seem to have padding top and bottom of 0.5rem.
- The left-hand column is separated into work and side projects on mobile. Once it reaches a break point of roughly 1024 width, it collapses so that the side menu is now a mobile menu.
- In the top left-hand side of the screen, there is now a menu button that is hoverable and you can click. When you click it, it shows an overlay which drastically darkens the background, and then that side menu is now visible in the middle of the screen but takes up much more width and it's using the same styles of the side panel.
- The close button, which takes place over the kebab expand menu button, is in the exact same position, so it feels like a bit of a toggle. There's actually a nice animation with that.

Looking at my existing site, I want to keep everything from the colors and the typography and the content, but what I want to change is our layout, which is going to be a big deal. So, what we're going to do is we're going to rethink how we show the subpages on this site. Essentially, what it's going to be is every subpage will be luki.design/thesubpagename. Whatever our solution is, it should be really fast. I don't want anything that's kind of rendering takes ages to render, I don't want any jitteriness. Like I was saying before, the side menu appears like it doesn't re-render at all, however the content in the body does.

So, what we'll do is we will move the about content into our luki.design, and then we will try and get the layout down so that way we'll come up with a side menu. The way that we'll do that is we will put the hero stuff in the side menu with some social links, and then we will hide the selected work tiles for now and we'll just have them as list items in the left-hand menu. What we'll do is we'll just get the layout to start, and then we'll figure out where different content will go.
