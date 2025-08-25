import { useState } from "react";

export default function App() {
  let [device, setDevice] = useState<string>('none');
  let clicked = async () => {
    let res = await fetch('/api/device');
    let data: {
      "mobile": string | null,
      "tablet": string | null,
      "system": boolean
    } = await res.json();
    let devicename: string = data.mobile ? data.mobile : data.tablet ? data.tablet : "System";
    setDevice(devicename);
  };
  return (<>
    <button onClick={clicked}>Click</button>
    <div>Clicked from {device}</div>
  </>
  )
}