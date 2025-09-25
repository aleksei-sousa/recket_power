import Matter from "matter-js";

import { Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const Physics = (entities, { touches, time, dispatch }) => {
    let engine = entities.physics.engine

    // 1. Detecta toques na tela
    touches.filter(t => t.type === 'press').
        forEach(t => {
             // 2. Quando o jogador toca, aplica uma velocidade para cima ou a frente do pássaro
            Matter.Body.setVelocity(entities.Bird.body, {
            x: 0,
            y: -3
        })
    })
 // 3. Atualiza o motor de física a cada frame
    Matter.Engine.update(engine, time.delta)
   
    return entities;
}
export default Physics