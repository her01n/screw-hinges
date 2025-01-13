const { intersect, subtract, union } = require('@jscad/modeling').booleans
const { hull } = require('@jscad/modeling').hulls
const { cuboid, cylinder, sphere } = require('@jscad/modeling').primitives
const { mirrorX, mirrorY, mirrorZ, rotate, rotateZ, translate, translateX, translateY, translateZ } = require('@jscad/modeling').transforms

const { blockThickness, blockWidth, eye, gap, sideCut, screwD, screwX, shieldRadius, shields } = require('./hinge.js')

const blockLength = screwX + screwD + shieldRadius

const block = sideCut({
  size: [blockWidth, blockLength, blockThickness],
  center: [blockWidth/2, blockLength/2, blockThickness/2],
  xLow: false, xHigh: false })

const eyeLength = 30

const hinge = union(
  block,
  translateY(blockLength - eyeLength, eye(eyeLength)),
  shields(shieldRadius, screwX))

const main = () => {
  return hinge
}

module.exports = { main, hinge }
