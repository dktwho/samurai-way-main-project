import React, {ComponentType, Suspense} from 'react';

export function withSuspense(Component: ComponentType) {
    return (props: any) => {
        return <Suspense fallback={<div>Loading...</div>}><Component {...props}/></Suspense>
    }
}

