import Matter from "matter-js"
import Bird from "../components/Bird";
import Floor from "../components/Floor";
//import Obstacle from "../components/Obstacle";

import { Dimensions } from 'react-native'
//import { getPipeSizePosPair } from "../utils/random";

const { width, height } = Dimensions.get("window");
//console.log(height)

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
//pegando dimensões da tela

export default restart => {
    let engine = Matter.Engine.create({ enableSleeping: false })

    let world = engine.world

    world.gravity.y = 0;
    world.gravity.x = 0;

    return {
    //retorno todos oselementos q vc vai usar
        physics: { engine, world },

        Bird: Bird(world, 'green', { x: 50, y: 600 }, { height: 80, width: 40 }),

        // Floor: Floor(
        // world,
        // { x: width / 9, y: height / 2 }, // x quero do lado esquerdo, o y quero começando do topo
        // { width: 40, height: height+200 }, // altura total, pois meu chão vai ficar nesta posição, com o celular deitado
        // "brown"
        // ),
    }
}