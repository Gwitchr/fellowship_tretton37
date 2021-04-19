# Tretton37

The app is bootstrapped with nextjs, it has two routes that serve as an internal API, bundled within the same project:

`api/team_scrap` and `api/team`

the first actually has a scrapping function based on `cheerio`
But it actually brings a lot less info than the working api

It's built with `tailwindcss` and is written in `TypeScript`, although some places could use better types

some characteristics and thoughts:

- As a failover an images is get from unsplash to fill any missing picture
- SearchBar has a function that searches in all available fields of the object
- Descriptions are truncated at around 80 characters to try and respect full words, implementation of a drawer with the full text should be easy
- All app state lives at the top element
- No other libraries were used for state management (this of course do to time constraints)
- I believe it to be quite responsive, although I didn't check very large screen sizes 🙈
- Filtering is probably not as optimised as it should be
- The Nextjs Image component is a wild beast that I am yet to master
- The filter function has a small debuonce to allow the user to stop typing before search begins
- The tailwind config also not very familiar with it, the bundle could be smaller by configuring the purge property


#### Published at
[heroku](https://tretton-users.herokuapp.com)
