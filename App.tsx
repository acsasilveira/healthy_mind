import 'react-native-gesture-handler';
import { Dispatch, SetStateAction, useState } from 'react';
import{ ScreenHome, ScreenAnsiedade, ScreenEstresse, ScreenDesabafo, ScreenLogin, ScreenCadastro } from "./src/screens";
import { Navigation } from "./src/navigations"

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
      return <ScreenEstresse setPageI={setPageI} />
      break;
    case 4:
      return <ScreenDesabafo setPageI={setPageI} />
      break;
    default:
      return <Navigation /> 

  }
}