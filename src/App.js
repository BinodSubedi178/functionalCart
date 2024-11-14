import { Header, Footer } from "./components";
import AllRoutes from "./routes/AllRoutes";
function App() {
  return (
    <main className="min-h-screen mt-28 ">
      <Header />
      <AllRoutes />
      <Footer />
    </main>
  );
}

export default App;
