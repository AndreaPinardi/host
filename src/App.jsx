import React, { lazy, Suspense } from 'react';

const RemoteComponent = lazy(() =>
  import("remote/nextjs-remote-page").catch(() => {
    return { default: () => <>NextJs remote unavailable!</> };
  })
);

function App() {
  
  return (
   <>
    <Suspense fallback={null}>
      <RemoteComponent />
    </Suspense>
   </> 
  )
}

export default App;
