import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import '@/assets/styles/globals.css';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {GlobalProvider} from '@/context/GlobalContext';
import 'photoswipe/dist/photoswipe.css';
export const metadata={
  title:'PropertyPulse | Find The Perfect rental for the tille ',
  discription:'Find your dream rental propety',
  keywords:'rental , find rentals , find properties'
}
const MainLayout = ({children}) => {
  return (
    <GlobalProvider>
    <AuthProvider>
    <html lang='en'>
      <body>
        <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer/> 
      </body>
    </html>
    </AuthProvider> 
    </GlobalProvider>  
  );
};

export default MainLayout;   
