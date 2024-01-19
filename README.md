To reproduce the the issue, open 2 cmd:
- run  `npm run watch:dll`
- run `npm run watch:user`

Now navigate to http://localhost:8085, open your console. 

Make changes to `/dll/a.js`

**Expected** Webpage is reloaded

**Actual** Webpage is not reloaded

Downgrade `html-webpack-plugin` to version 5.5.3. Try steps from above again.

**Expected** Webpage is reloaded

**Actual** Webpage is reloaded