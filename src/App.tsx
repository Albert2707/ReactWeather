import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Footer from "./Components/Footer/Footer";
import Weather from "./Components/Weather/Weather";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col  justify-between items-center pt-10 md:pt-0  md:items-center bg-gradient-to-r from-sky-300 to-slate-200">
        <div className="m-auto">
          <Weather />
        </div>
        <div className="flex w-full items-end">
          <Footer />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
