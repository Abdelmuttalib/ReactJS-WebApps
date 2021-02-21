import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';



const App = () => {
    return (
        <ChatEngine 
        height='100vh'
        projectID='5c9af468-0c1f-49ce-9e3b-fa9d50830f09'
        userName='abdelmuttalib'
        userSecret='4231'
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;