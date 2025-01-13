const { intersect, subtract, union } = require('@jscad/modeling').booleans
const { hull } = require('@jscad/modeling').hulls
const { cuboid, cylinder, sphere } = require('@jscad/modeling').primitives
const { mirrorX, mirrorY, mirrorZ, rotate, rotateZ, translate, translateX, translateY, translateZ } = require('@jscad/modeling').transforms

const { sideCut, screwD } = require('./hinge.js')

const width = 7.2
const thickness = 1.6

const matrix = mirrorZ(
  subtract(
    union(
      sideCut({ size: [7.2, screwD + 7.2, thickness], center: [0, 0, thickness/2] }),
      cylinder({ radius: width/2, height: 4, center: [0, screwD/2, thickness - 2] }),
      cylinder({ radius: width/2, height: 4, center: [0, -screwD/2, thickness - 2] })),
    union(
      cylinder({ radius: 4.7/2, height: 24, center: [0, screwD/2, 0] }),
      cylinder({ radius: 4.7/2, height: 24, center: [0, -screwD/2, 0] }))))

const main = () => {
  return matrix
}

module.exports = { main, matrix }
