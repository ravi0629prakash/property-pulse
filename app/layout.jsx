import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import '@/assets/styles/globals.css';
import AuthProvider from '@/components/AuthProvider';

export const metadata={
  title:'PropertyPulse | Find The Perfect rental for the tille ',
  discription:'Find your dream rental propety',
  keywords:'rental , find rentals , find properties'
}
const MainLayout = ({children}) => {
  return (
    <AuthProvider>
    <html lang='en'>
      <body>
        <Navbar />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
    </AuthProvider>   
  );
};

export default MainLayout;   
