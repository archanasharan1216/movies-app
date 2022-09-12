import HeaderForm from './components/Header/HeaderForm';
import Movies from './components/Movies';
import Footer from './components/Footer/Footer';
import styled from 'styled-components';
import {ErrorBoundary} from 'react-error-boundary'

const AppControl = styled.div `
    height: 100vh;
`;
type Props = {
    error: Error
}

const ErrorFallBack:React.FunctionComponent<Props> = (props) => {
    return (
        <div role="alert">
          <p>Something went wrong:</p>
          <pre>{props.error.message}</pre>
        </div>
      )
}

const App: React.FunctionComponent = () => {
    return (
        <AppControl>
            <HeaderForm />
            <ErrorBoundary FallbackComponent= {ErrorFallBack}>
                <Movies />
            </ErrorBoundary>
            
            <Footer />
        </AppControl>
    );
};

export default App;