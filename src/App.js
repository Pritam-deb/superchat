
import './App.css';
import {auth,provider} from './firebase';
import db from './firebase';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

function App() {

  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>

      </header>
      <section>
        {user ? <ChatRoom/> : <SignIn/>}
      </section>
    </div>
  );
}

const SignIn = () => {
  const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  }

  return(
    <button onClick={signInWithGoogle} >SignIn with Google</button>
  )
}

const SignOut = () => {
  return auth.currentUser && (
    <button onClick={()=>auth.signOut()}>Sign Out</button>
  )
}

const ChatRoom = () => {
  const messagesRef = db.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, {idField: 'id'});
  return(
    <>
      <div>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      </div>
    </>
  )

}

function ChatMessage (props) {
  const {text, uid} = props.message;
  return(
    <p>{text}</p>
  )
}


export default App;
