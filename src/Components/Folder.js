import React, { useState } from 'react';

export default function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  if(explorer.isFolder) {
  return (
    <div>
      <span onClick={() => setExpand(!expand)}>
        {explorer.name}
        <br/>
        </span>
        <div style = {{
          display: expand ? "block" :"none",
          paddingLeft: "15px",
          cursor:"pointer"
        }}>
          {
            explorer.items.map(item => {
              return <Folder explorer={item} style={{
           }} />
            })
          }
        </div>
    </div>
  )
} else {
 return  <span>{explorer.name}
 <br/>
 </span>
}
}
