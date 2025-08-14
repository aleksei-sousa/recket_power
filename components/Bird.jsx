import Matter from "matter-js";

function Bird ( world, color, pos, size ) {
   const initialBird = Matter.Bodies.rectangle(//Cria um corpo retangular no motor de física.
       pos.x, //onde o corpo começa na tela.
       pos.y, //onde o corpo começa na tela.
       size.width,//tamanho do corpo.
       size.height,//tamanho do corpo.
       {label: 'Bird'}// opções físicas, nesse caso só o "nome"
   )

   
   Matter.World.add(world, initialBird)//é o "mundo" da física criado pelo Matter.Engine.create().

    return(
        <View style={{
            borderWidth: 1,
            borderColor: color,
            borderStyle: 'solid',
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody
        }}/>
    )
}

export default Bird ;