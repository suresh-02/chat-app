import {PrettyChatWindow} from 'react-chat-engine-pretty'



const ChatsPage = (props) => {

   
    return <div style={{height:'100vh'}}>
       <PrettyChatWindow
       projectId='adcde8b9-9adb-4825-a1b2-a69162f4b6d5 '
       username={props.user.username}
       secret={props.user.secret}
       style={{height:'100%'}}
       />
    </div>;
  };
  export default ChatsPage;

