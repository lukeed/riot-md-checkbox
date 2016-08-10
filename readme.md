# riot-md-checkbox

> Material Design animated Checkbox input for [Riot.js](https://github.com/riot/riot)

![md-checkbox](https://github.com/lukeed/md-checkbox/blob/master/demo.gif)

## Instal

```bash
bower install --save riot-md-checkbox
```

## Usage

```html
<md-checkbox
  label="Checkbox Label 1" input="group[]" check="true">
</md-checkbox>

<md-checkbox
  label="Checkbox Label 2" input="group[]" text="Additional display text.">
</md-checkbox>

<md-checkbox
  label="Checkbox Label 3" input="group[]" value="Custom 'on' value">
</md-checkbox>
```


## Options

#### input

> Type: `string` <br>
> Default: `null` <br>
> Required: `false`

Serves as both the `id` and `name` attributes of your `<input />` element.

#### check

> Type: `string` <br>
> Default: `null` <br>
> Required: `false`

Sets the `checked` attribute. Passing **any** string will be handled as `true`!

#### value

> Type: `string` <br>
> Default: `1` <br>
> Required: `false`

The `value` of the input when checked.

#### label

> Type: `string` <br>
> Default: `null` <br>
> Required: `false`

The main label / text for your input.

#### text

> Type: `string` <br>
> Default: `null` <br>
> Required: `false`

Additional text to display; appears within a `<small>` element.

#### ontoggle

> Type: `function` <br>
> Default: `null` <br>
> Required: `false`

An additional callback when toggling a checkbox, regardless of `checked` status.

## License

MIT © [Luke Edwards](https://lukeed.com)
