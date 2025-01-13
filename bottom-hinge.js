const { intersect, subtract, union } = require('@jscad/modeling').booleans
const { hull } = require('@jscad/modeling').hulls
const { cuboid, cylinder, sphere } = require('@jscad/modeling').primitives
const { mirrorX, mirrorY, mirrorZ, rotate, rotateZ, translate, translateX, translateY, translateZ } = require('@jscad/modeling').transforms

const { blockThickness, blockWidth, eye, gap, screwD, screwX, shields, shieldRadius, sideCut } = require('./hinge.js')

const blockLength = blockWidth + gap + screwX + screwD + shieldRadius

const sideBlock = sideCut({
  size: [blockWidth, blockLength, blockThickness],
  center: [blockWidth/2, blockLength/2, blockThickness/2],
  xLow: false, xHigh: false })

const bottomBlock = sideCut({
  size: [gap + screwX, blockWidth, blockThickness],
  center: [blockWidth + (gap + screwX)/2, blockWidth/2, blockThickness/2],
  xLow: false, yHigh: false })

const eyeLength = 15
const eyeY = 15

const hinge = union(
  sideBlock, bottomBlock,
  translateY(eyeY, eye(eyeLength)),
  shields(blockWidth + gap + screwX, shieldRadius))

const main = () => {
  return hinge
}

module.exports = { main, hinge }
