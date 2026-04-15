import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const ToursPage = lazy(() => import('./pages/ToursPage'));
const TourPage = lazy(() => import('./pages/TourPage'));
const ReviewsPage = lazy(() => import('./pages/ReviewsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="tours" element={<ToursPage />} />
            <Route path="tours/:slug" element={<TourPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
