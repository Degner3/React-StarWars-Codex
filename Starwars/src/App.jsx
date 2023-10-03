import './App.css'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from './Layouts/MainLayout';
import { MainPage } from './Pages/MainPage/MainPage';
import { Characters } from './Pages/CharactersPage/Characters';
import { CharacterDetailsPage } from './Pages/CharacterDetailsPage/CharacterDetailsPage';


// Din app skal kunne hente og liste alle Star Wars film
// Den skal indeholde en modal der viser detaljer om filmen når man klikker på den
// Der skal fremgå en footer med navnene på dem der har lavet den.

// Bonus:
// Din app skal have en søger der kan filtrere dataen
// Din app skal kunne vise en anden side, hvor alle karakterer fra Star Wars er representeret. Når man klikker på en karakter kan man læse mere om personen.

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<MainPage/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/character/:id" element={<CharacterDetailsPage/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
