import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function Test() {
    const [data, setdata] = useState()
    const fetchdata = async ()=>{
        try{
            const result = await axios(
              `http://bot.sypher.xyz:3000/api/chats/0xb9F33d9216F4b30A848500C29d4a0FE7285b717D`,
            );
            const resData = result.data.data;
            setdata(result.data.data.tokken)
            console.log(resData);
          }
          catch(err)
          {
            console.log(err);
          }
    }
    useEffect(() => {
        fetchdata()
    }, [])
    return (
        <div>
            tokken : {data}
        </div>
    )
}
