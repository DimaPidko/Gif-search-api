import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainPage = lazy(() => import('../pages/mainPage/MainPage.jsx'));
const Page404 = lazy(() => import('../pages/404/Page404.jsx'));
const RandomPage = lazy(() => import('../pages/randomPage/RandomPage.jsx'));
const PhrasePage = lazy(() => import('../pages/phrasePage/PhrasePage.jsx'));

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense>
                <Routes>
                    <Route
                        path="/random"
                        element={<RandomPage />}
                        exact
                    />
                    <Route
                        path="/phrase"
                        element={<PhrasePage />}
                        exact
                    />
                    <Route
                        path="/"
                        element={<MainPage />}
                        exact
                    />
                    <Route
                        path="*"
                        element={<Page404 />}
                    />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Router;
