
# React-Typescript-Cheatsheet ♥️
This is the cheasheet I made for myself. Sorry if the code is dirty. You can browse for files in the `src/component/` directory to see examples.

## Quick Example

```tsx
//Action - Hooks UseReducer Section
type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' } | { type: 'RESET' }

//Initial Reducer - Hooks UseReducer Section
const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case 'DECREMENT': {
            return {
                ...state,
                count: state.count - 1
            }
        }
        case 'RESET': {
            return {
                ...state,
                count: 0,
            }
        }
        default: throw new Error()
    }
}

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
