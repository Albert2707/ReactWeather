import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Footer from "./Components/Footer/Footer";
import Weather from "./Components/Weather/Weather";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex  justify-center  items-center bg-gradient-to-r from-sky-300 to-slate-200">
        <Weather />
        <Footer/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
