import Matter from "matter-js"
import Bird from "../components/Bird";
import Floor from "../components/Floor";
import Obstacle from "../components/Obstacle";

import { Dimensions } from 'react-native'
import { getPipeSizePosPair } from "../utils/random";

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
//pegando dimensões da tela

export default restart => {
    let engine = Matter.Engine.create({ enableSleeping: false })

    let world = engine.world

    world.gravity.y = 0.4;

    return {
    //retorn todos oselementos q vc vai usar
        physics: { engine, world },

        Bird: Bird(world, 'green', { x: 50, y: 300 }, { height: 40, width: 40 }),

    }
}