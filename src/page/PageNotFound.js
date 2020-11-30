import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';

function PageNotFound() {
  return (
    <div className="page page_not_found">
      <Header />
        <h1>404 Page Not Found</h1>
      <Footer />   
    </div>
  );
}

export default PageNotFound;