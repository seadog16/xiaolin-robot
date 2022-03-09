import {Suspense} from 'react';
import {useRoutes} from 'react-router-dom';
import routes from '@/router';

function App() {
    const router = useRoutes(routes);
    return (
    <Suspense fallback={<></>}>
        {router}
    </Suspense>
  )
}

export default App
