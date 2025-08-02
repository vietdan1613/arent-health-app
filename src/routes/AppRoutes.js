// routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import RecordPage from '../pages/RecordPage';
import ColumnPage from '../pages/ColumnPage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/record" element={<RecordPage />} />
            <Route path="/column" element={<ColumnPage />} />
        </Routes>
    );
}
