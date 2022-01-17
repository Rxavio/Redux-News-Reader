import './App.css';
import ArticlePreviews from '../features/articlePreviews/ArticlePreviews';
import CurrentArticle from '../features/currentArticle/CurrentArticle';

function App() {
  return (
    <div className='App'>
      <header className='App-header' />
      <main>
        <div className='current-article'>
          <CurrentArticle /> 
        </div>
        <ArticlePreviews />
      </main>
    </div>
  );
}

export default App;
