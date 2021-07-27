// Internal Components
import Layout from '../components/layout';
import Navigation from '../components/navigation';

// Styles
import 'semantic-ui-css/semantic.min.css';

//Internal Styles
import '../styles/styles.scss';

//Notes content provider
import NotesContext from '../context/notesContext';

function MyApp({ Component, pageProps }) {
  return (
    <NotesContext>
      <Layout>
        <Navigation />
        <Component {...pageProps} />
      </Layout>
    </NotesContext>
  )
}

export default MyApp
