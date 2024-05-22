# HTML Tips

## type=number or inputmode=numeric for type number

```html

<!-- Don't use input type="number" for critial numeric fields such as credit cards
postal code etc....-->
<label>
Postal code:
<input type="number" />
</label>

<!-- Recommended way is to use the inputmode="numeric" -->
<label>
Postal code:
<input inputmode="numeric" pattern="[0-9]*" />
</label>
```