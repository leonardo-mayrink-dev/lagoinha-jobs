import { Routes, Route } from 'react-router-dom';
import { RequestsExamples } from './pages/RequestsExamples';
import { Example } from './pages/Example';
import { Forms } from './pages/Forms';
import { Empresa } from './pages/Empresa';
import { Candidato } from './pages/Candidato';
import { Vaga } from './pages/Vaga';

export function Router() {
    return (
        <Routes>
            <Route path='/requests/' element={<RequestsExamples />}/>
            <Route path='/forms/' element={<Forms />}/>
            <Route path='/' element={<Example />}/>
            <Route path='/empresa/' element={<Empresa />}/>
            <Route path='/candidato/' element={<Candidato />}/>
            <Route path='/vaga/' element={<Vaga />}/>
        </Routes>
    )
}