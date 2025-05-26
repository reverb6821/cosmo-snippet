# JavaScript & TypeScript Snippets 🚀

This is a collection of useful and most common **JavaScript**, **TypeScript**, **React**, **tanstack/react-query** and **zustand** snippets for Visual Studio Code. These snippets speed up my regular development by providing quick access to commonly used functions and structures.

## 🛠️ Installation
To use these snippets in **VS Code**:
1. Open the **Command Palette** (`Ctrl + Shift + P`).
2. Type `"Preferences: Configure User Snippets"`.
3. Select `"New Global Snippets File"`, or choose an existing snippet file.
4. Copy and paste the snippets below into the `.json` file.
Alternative, you can

## 🚀 Usage
Simply type the prefix in VS Code, press Tab, and the snippet will expand!

## 🔹 Available Snippets

### **Console Methods**
- `clg` → `console.log('data')`
- `cer` → `console.error('data')`
- `cwarn` → `console.warn('data')`
- `cinfo` → `console.info('data')`
- `ctab` → `console.table('data')`

### **Functions & Interfaces**
- `fn` → **Function Declaration**  
    ```ts
    function functionName(parameters) {
        // function body
    }
    ```
- `interface` → **TypeScript Interface**  
    ```ts
    interface InterfaceName { property: type; }
    ```
- `arrow` → **Arrow Function**  
    ```ts
    const functionName = (parameters) => {
        // function body
    };
    ```

### **Loops & Array Methods**
- `forloop` → `for (let i = 0; i < array.length; i++) { }`
- `map` → `array.map(item => { })`
- `filter` → `array.filter(item => { })`
- `reduce` → `array.reduce((acc, item) => { }, initialValue)`
- `find` → `array.find(item => { })`
- `includes` → `array.includes(value)`
- `push` → `array.push(item)`
- `pop` → `array.pop()`
- `shift` → `array.shift()`
- `unshift` → `array.unshift(item)`
- `slice` → `array.slice(start, end)`
- `splice` → `array.splice(start, deleteCount, item)`
- `sort` → `array.sort((a, b) => a - b)`
- `reverse` → `array.reverse()`

### **Object Methods**
- `keys` → `Object.keys(obj)`
- `values` → `Object.values(obj)`
- `entries` → `Object.entries(obj)`
- `assign` → `Object.assign(target, source)`
- `spread` → `{ ...obj, newProperty: value }`
- `destruct` → `const { key1, key2 } = obj;`
- `obj` → `const obj = { key: value };`

### **Asynchronous Code**
- `asyncfn` → **Async Function**
    ```js
    async function functionName(parameters) {
        try {
            await task();
        } catch (error) {
            console.error(error);
        }
    }
    ```
- `promise` → **Promise with .then/.catch**
    ```js
    new Promise((resolve, reject) => {
        // task
    })
    .then(result => console.log(result))
    .catch(error => console.error(error));
    ```
### **React Hooks**

- `usestate` → **useState Hook**
  ```tsx
  const [state, setState] = useState(initialValue)
  ```
- `useeffect` → **useEffect Hook**
  ```tsx
    useEffect(() => {
    // side effects
    }, [dependencies])
  ```
- `usememo` → **useMemo Hook**
  ```tsx
   const memoizedValue = useMemo(() => computeExpensiveValue, [dependencies])
  ```
- `useref` → **useRef Hook**
  ```tsx
  const refElement = useRef(null);
  ```
- `usecallback` → **useCallback Hook**
  ```tsx
  const memoizedCallback = useCallback((args) => {
  // function body
  }, [dependencies]);
  ```
- `usereducer` → **useReducer Hook**
  ```tsx
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  ```
### **React Function Components**
- `fnc` → **Function Component with TypeScript Interface**
  ```tsx
    import React from 'react';

    interface Props {
    exampleProp?: string;
    }

    function MyComponent({ exampleProp }: Props): JSX.Element {
    return (
        <div>
        {/* Your component code here */}
        </div>
    );
    }

    export default MyComponent;
  ```
- `fnc-query` → **Function Component with Interface and React Query**
  ```tsx
   import React from 'react';
    import { useQuery } from '@tanstack/react-query';

    interface Props {
    exampleProp?: string;
    }

    function MyComponent({ exampleProp }: Props): JSX.Element {
    const { data, error, isLoading } = useQuery({
        queryKey: ['yourQueryKey'],
        queryFn: async () => {
        const res = await fetch('/api/endpoint');
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
        },
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error as Error).message}</div>;

    return (
        <div>
        {/* Render fetched data here */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
    }

    export default MyComponent;
  ```
- `fnc-mutation` → **Function Component with Interface and useMutation**
  ```tsx
    import React from 'react';
    import { useMutation } from '@tanstack/react-query';

    interface Props {
    exampleProp?: string;
    }

    interface Payload {
    key: string;
    }

    function MyComponent({ exampleProp }: Props): JSX.Element {
    const mutation = useMutation({
        mutationFn: async (newData: Payload) => {
        const res = await fetch('/api/endpoint', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData),
        });
        if (!res.ok) throw new Error('Failed to submit');
        return res.json();
        },
        onSuccess: (data) => {
        console.log('Success:', data);
        },
        onError: (error) => {
        console.error('Error:', error);
        },
    });

    const handleSubmit = () => {
        mutation.mutate({ key: 'value' });
    };

    return (
        <div>
        <button onClick={handleSubmit} disabled={mutation.isPending}>
            {mutation.isPending ? 'Sending...' : 'Submit'}
        </button>
        {mutation.isError && <div>Error: {(mutation.error as Error).message}</div>}
        {mutation.isSuccess && <div>Success!</div>}
        </div>
    );
    }

    export default MyComponent;
  ```
- `fc` → **Function Component with Interface and useMutation**
  ```tsx
    import React from 'react';
   

    function MyComponent({ exampleProp }: Props): JSX.Element {
   

    return (
        <div>

        </div>
    );
    }

    export default MyComponent;
  ```
- `fc-query` → **Functional Component with Interface and React Query**
  ```tsx
  import React, { FC } from 'react';
    import { useQuery } from '@tanstack/react-query';

    interface ComponentNameProps {
    exampleProp?: string;
    }

    const ComponentName: FC<ComponentNameProps> = ({ exampleProp }) => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['yourQueryKey'],
        queryFn: async () => {
        const res = await fetch('/api/endpoint');
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
        },
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error as Error).message}</div>;

    return <div><pre>{JSON.stringify(data, null, 2)}</pre></div>;
    };

    export default ComponentName;
  ```
- `fc-mutation` → **Functional Component with Interface and useMutation**
  ```tsx
    import React, { FC } from 'react';
    import { useMutation } from '@tanstack/react-query';

    interface ComponentNameProps {
    exampleProp?: string;
    }

    const ComponentName: FC<ComponentNameProps> = ({ exampleProp }) => {
    const mutation = useMutation({
        mutationFn: async (newData) => {
        const res = await fetch('/api/endpoint', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData),
        });
        if (!res.ok) throw new Error('Failed to submit');
        return res.json();
        },
        onSuccess: (data) => console.log('Success:', data),
        onError: (error) => console.error('Error:', error),
    });

    const handleSubmit = () => mutation.mutate({ key: 'value' });

    return (
        <div>
        <button onClick={handleSubmit} disabled={mutation.isPending}>
            {mutation.isPending ? 'Sending...' : 'Submit'}
        </button>
        {mutation.isError && <div>Error: {(mutation.error as Error).message}</div>}
        {mutation.isSuccess && <div>Success!</div>}
        </div>
    );
    };

    export default ComponentName;
  ```
### **Zustand**
- `zustandStoreTS` → **Zustand Store**
  ```ts
    import { create } from 'zustand';

    interface StoreState {
    count: number;
    setCount: (value: number) => void;
    }

    const useStore = create<StoreState>((set) => ({
    count: 0,
    setCount: (value) => set({ count: value }),
    }));

    export default useStore;
  ```
- `zustandStoreTS` → **Persistent Zustand Store**
  ```ts
    import { persist, createJSONStorage } from 'zustand/middleware';
    import { create } from 'zustand';

    interface StoreState {
    count: number;
    setCount: (value: number) => void;
    }

    const useStore = create<StoreState>()(
    persist(
        (set) => ({
        count: 0,
        setCount: (value) => set({ count: value }),
        }),
        {
        name: 'my-store',
        storage: createJSONStorage(() => localStorage),
        }
    )
    );

    export default useStore;
  ```
### **Unit Testing with React Testing Library & Vitest**
- `unittest` → **Basic Unit Test for a Component**
  ```ts
    import { render, screen } from '@testing-library/react';
    import { describe, it, expect } from 'vitest';
    import ComponentName from './ComponentName';

    describe('ComponentName', () => {
    it('renders correctly', () => {
        render(<ComponentName />);
        expect(screen.getByText('ExpectedText')).toBeInTheDocument();
    });
    });
  ```