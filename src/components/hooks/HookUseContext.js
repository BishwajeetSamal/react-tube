// import React from "react";
// import { UserContext, UserChannel } from "../../App";
// function HookUseContext() {
//   return (
//     <div>
//       <UserContext.Consumer>
//         {(user) => {
//           return (
//             <UserChannel.Consumer>
//               {(channel) => {
//                 return (
//                   <div>
//                     User Context Value {user}, channel context value {channel}
//                   </div>
//                 );
//               }}
//             </UserChannel.Consumer>
//           );
//         }}
//       </UserContext.Consumer>
//     </div>
//   );
// }

// export default HookUseContext;
//--------------------------------------================================----------------------------------------------------------
// Above the code is to consume the value of create Conetxt. Now we are applying it for using useState()
//The Provider is same but conume code is helped by useContext() Hook.
//*********=======================================================================================================**********
import React, { useContext } from "react";
import { UserContext, UserChannel } from "../../App";
function HookUseContext() {
  const user = useContext(UserContext);
  const channel = useContext(UserChannel);
  return (
    <div>
      {user} ---- {channel}
    </div>
  );
}

export default HookUseContext;
