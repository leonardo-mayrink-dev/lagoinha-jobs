import { Routes, Route } from 'react-router-dom';
import { RequestsExamples } from './pages/RequestsExamples';
import { Example } from './pages/Example';
import { Forms } from './pages/Forms';
import { Empresa } from './pages/Empresa';
import { BusinessPanel } from './pages/BusinessPanel';

export function Router() {
    return (
        <Routes>
            <Route path='/requests/' element={<RequestsExamples />}/>
            <Route path='/forms/' element={<Forms />}/>
            <Route path='/example' element={<Example />}/>
            <Route path='/' element={<BusinessPanel />}/>
            <Route path='/empresa/' element={<Empresa />}/>
            <Route path='/painelnegocios/' element={<BusinessPanel />}/>
        </Routes>
    )
}