import Matter from "matter-js";
import { View } from "react-native";

const Bird = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;
  //Calcula a largura e altura do corpo físico

  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;
  //Calcula a posição correta na tela

  const color = props.color;
  return (
    <View
    style={{
      borderWidth: 1,
      borderColor: color,
      borderStyle: "solid",
      position: "absolute",
      left: xBody,
      top: yBody,
      width: widthBody,
      height: heightBody,
    }}
    />
    //Renderiza um <View> quadrado na tela, representando o pássaro.
  );
};

export default (world, color, pos, size) => {
  //Cria o corpo físico do pássaro (initialBird) usando Matter.Bodies.rectangle.
  const initialBird = Matter.Bodies.rectangle(
    pos.x, // posição inicial X
    pos.y, // posição inicial Y
    size.width, // largura
    size.height, // altura
    { label: "Bird" } // opções
  );
  //Adiciona esse corpo ao world (Matter.World.add).
  Matter.World.add(world, initialBird);

  return {
    body: initialBird,
    color,
    pos,
    renderer: Bird, // 🔑 passa o componente, não uma instância
  };
};
