import { Routes, Route } from 'react-router-dom';
import { RequestsExamples } from './pages/RequestsExamples';
import { Example } from './pages/Example';
import { Forms } from './pages/Forms';

export function Router() {
    return (
        <Routes>
            <Route path='/requests/' element={<RequestsExamples />}/>
            <Route path='/forms/' element={<Forms />}/>
            <Route path='/' element={<Example />}/>
        </Routes>
    )
}