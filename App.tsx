import { Dispatch, SetStateAction, useState } from 'react';
import{ ScreenHome, ScreenAnsiedade } from "./src/screens";

export interface IPage {
  setPageI: Dispatch<SetStateAction<number>>
}

export default function App() {
  const [page, setPage] = useState(1)
  switch (page) {
    case 1:
      return <ScreenHome setPageI={setPage} />
      break;
    case 2:
      return <ScreenAnsiedade setPageI={setPage} />
  }
}