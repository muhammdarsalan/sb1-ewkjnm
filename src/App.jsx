import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import { QueryClient, QueryClientProvider } from 'react-query';
import useAuth from './hooks/useAuth';
import withErrorBoundary from './components/ErrorBoundary';

// Components
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';
import NewsletterPopup from './components/NewsletterPopup';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';

// Pages
import Home from './pages/Home';
import Collections from './pages/Collections';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Register from './pages/Register';

const queryClient = new QueryClient();

function App() {
  const { checkAuth, isLoading } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-white">
            <TopBar />
            <Navbar />
            <React.Suspense fallback={<LoadingSpinner />}>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/collections" element={<Collections />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Routes>
              </AnimatePresence>
            </React.Suspense>
            <Footer />
            <LiveChat />
            <NewsletterPopup />
            <Toaster 
              position="top-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: '#333',
                  color: '#fff',
                },
                success: {
                  iconTheme: {
                    primary: '#5BA8A0',
                    secondary: '#fff',
                  },
                },
              }} 
            />
          </div>
        </Router>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default withErrorBoundary(App);