import{ useState } from "react";



function Titulo({ nome, cor = "blue" }) {
   const [texto, setTexto] = useState("titulo inicial");
   const [inputText, setInputText] = useState("")

  function clicou() {
    setTexto(inputText);
  }

  return (
    <div>
      <h1 style={{ color: cor }}>{texto}</h1>
      <input type="text" onChange={(e)=>{setInputText(e.target.value)}}/>
       <button onClick={clicou}>mudar</button>

     </div>
  );
}

export default Titulo;
