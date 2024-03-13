import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../pages/mainPage/MainPage';
import Page404 from '../pages/404/Page404';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<MainPage />}
                />
                <Route
                    path="*"
                    element={<Page404 />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
