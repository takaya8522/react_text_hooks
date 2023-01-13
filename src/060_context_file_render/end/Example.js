// POINT 発展 Contextとレンダリングの関係
import "./Example.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

const Example = () => {

  // console.log('example')
  
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default Example;
