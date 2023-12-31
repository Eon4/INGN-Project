import "./App.css";
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import HomePage from './Pages/HomePage/homePage';
import AllPages from './Pages/AllPages/allPages';
import National from './Pages/National/national';
import International from './Pages/International/international';
import Technology from './Pages/Technology/technology';
import Sport from './Pages/Sport/sport';
import Politics from './Pages/Politics/politics';
import Society from './Pages/Society/society';
import { OneArticle } from "./Pages/ArticlePage/OneArticlePage";
import  {NotFoundPage}  from "./Pages/NotFoundPage/NotFoundPage";
import AdminPage from './Pages/AdminPage/adminPage';
import { AccessKeyProvider } from "./utils/UserContext";

const queryClient = new QueryClient();

const App = () => {
  return (
  <AccessKeyProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
             path="/"
              element={<MainLayout />}>
              <Route index element={<AllPages />} />
               <Route path="/allpages" element={<AllPages />} />
                <Route path="/national" element={<National />} />
                 <Route path="/international" element={<International />} />
                  <Route path="/technology" element={<Technology />} />
                   <Route path="/sport" element={<Sport />} />
                 <Route path="/politics" element={<Politics />} />
                 <Route path="/society" element={<Society />} />
               <Route path="/article/:id" element={<OneArticle />} />
              <Route path="/*" element={<NotFoundPage />} />
            <Route path="/adminpage" element={<AdminPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
   </AccessKeyProvider>
  );
};

export default App;


