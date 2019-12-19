
# React-Typescript-Cheatsheet ♥️
Ini adalah cheasheet yg saya buat untuk diri saya sendiri. Sorry jika dirty code. Kamu bisa browse the file in directory[src/components/] untuk melihat example penggunaan cheatsheet.

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
