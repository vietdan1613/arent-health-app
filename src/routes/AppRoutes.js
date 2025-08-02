// routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import TopPage from '../pages/TopPage';
import MyRecord from '../pages/MyRecord';
import ColumnPage from '../pages/ColumnPage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="/my-record" element={<MyRecord />} />
            <Route path="/column" element={<ColumnPage />} />
        </Routes>
    );
}
