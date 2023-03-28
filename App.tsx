import { Dispatch, SetStateAction, useState } from 'react';
import{ ScreenHome, ScreenAnsiedade, ScreenEStresse, ScreenDesabafo } from "./src/screens";

export interface IPage {
  setPageI: Dispatch<SetStateAction<number>>
}

export default function App() {
  const [page, setPageI] = useState(1)
  switch(page) {
    case 1:
      return <ScreenHome setPageI={setPageI} />
      break;
    case 2:
      return <ScreenAnsiedade setPageI={setPageI} />
      break;
    case 3: 
      return <ScreenEStresse setPageI={setPageI} />
      break;
    case 4:
      return <ScreenDesabafo setPageI={setPageI} />
      break;
    default:
      return <ScreenHome setPageI={setPageI} />

  }
}