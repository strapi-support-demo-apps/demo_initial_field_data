# 🚀 Populating Fields with Initial Data

This example shows you how you can populate your fields with initial data before you create the data. We are utilizing injection zones in this example. Please review the injection zone documentation for your Strapi version. Note: the injection zone in this example does not have to be visibly rendered. I did so only for the sake of the demo.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### Where to look

There are several parts of this project that you can skip to, to see the injection zone codebase.

- Look at the plugins directly. The plugin I created for this example is called field-populate.
- Inside the plugin `field-populate` directory, there is a file `./admin/src/components/CustomButton` that shows you how I achieved this.

  - The rationale is me using the `useCMEditViewDataManager` a hook in Strapi that allows you to read (and in this case interact) with the context of the edit view page. You can read more about it here: https://docs-v4.strapi.io/dev-docs/api/plugins/admin-panel-api#injection-zones-api

  - In the `CustomButton.js` file (the file name doesn't mean anything), I use the `useEffect` hook to perform an operation once when the component loads.

  - This operation is setting a 0.5 second timer using `setTimeout` and then invoking the `onChange` function of the edit view context and passing in a rudimentary 'event' object that contains the minimum data needed to achieve this.

  - The 'event' in this case needs a `target` as the minimum field. The target `name` is the name of the property you want to change as defined in your schema file. The value is the value you want to set.

- You can play around with the duration of the timer, and infact the implementation as a whole. The example serves to show what you can achieve with a bit of quick hacking in Strapi.
