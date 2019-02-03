import React, { PureComponent } from 'react'
import { feature } from 'topojson'
import { easeQuadOut } from 'd3-ease'
import { Animate } from 'react-move'
import { interpolate } from 'flubber'
import Surface from './Surface' // this is just a responsive SVG
import statesJSON from './states.json'

// **************************************************
//  SVG Layout
// **************************************************
const view = [1000, 450] // [width, height]
const trbl = [10, 10, 10, 10] // [top, right, bottom, left] margins

class States extends PureComponent {
    state = {
        states: feature(statesJSON, statesJSON.objects.states)
            .features.map((d) => {
            return d.geometry.coordinates[0]
        }),
    }

    update = () => { // take the first one, put it at the end
        this.setState(({states}) => ({
            states: [
                ...states.slice(1),
                states[0],
            ],
        }))
    }

    render() {
        const {update, state: {states}} = this
        const interpolator = interpolate(states[0], states[1])
        const styles = {
            card: {

                marginLeft: "auto",
                marginRight: "auto",
                color: 'red',
                border: '1px solid #eeeeee',
                borderRadius: '3px',
                padding: '15px',
                width: '500px',

            }
        }
        return (
            <div style={ styles.card }>
              <button onClick={ update }>Update</button>
              <Surface view={ view } trbl={ trbl }>
                <Animate start={ { opacity: 0, d: interpolator(1), } } enter={ [{ opacity: [0.7], timing: { duration: 1000 }, },] } update={ { d: interpolator, timing: { duration: 1000, ease: easeQuadOut }, } }>
                  { (state) => {
                        return (
                            <g transform="translate(100, 0) scale(0.8)">
                              <path fill="#ff69b4" {...state} />
                            </g>
                        )
                    } }
                </Animate>
              </Surface>
            </div>
        )
    }
}

export default States