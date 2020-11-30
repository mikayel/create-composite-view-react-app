import { useMemo, Suspense , lazy} from 'react';
import { Router } from "@reach/router";
import Loading from "./component/Loading";
import './App.css';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Router>
          <PageWrapper path="/" page={'one'}/>
          <PageWrapper path=":page/*" />
          <PageWrapper path=":page/:subPage/*" />
        </Router>
      </Suspense>
    </div>
  );
}

function PageWrapper(props) {
  let PageComponent = useMemo(() => {
    let fileUri = props.uri;
    if (props.uri === "/") {
      fileUri = "/" + props.page;
    }
    return lazy(() => import(`./page${fileUri}`).catch(function(reason) {
        console.error(reason);
        return import('./page/PageNotFound');
      })
    );
  }, [props.uri, props.page]);
  
  return <PageComponent {...props} />
}

export default App;