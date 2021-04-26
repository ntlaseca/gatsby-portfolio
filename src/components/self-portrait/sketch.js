export default function sketch(p) {
  let R = 255
  let G = (Math.random() * 255)
  let B = 255
  let R2 = 0
  let G2 = (Math.random() * 255)
  let B2 = 0

  const scramble = () => {
    G = (Math.random() * 255)
    G2 = (Math.random() * 255)
  }

  p.state = [];
  p.dispatch = () => {};

  p.setup = () => {
    p.smooth()
    let canvas = p.createCanvas(650, 710)
    canvas.mousePressed(scramble)
  }

  p.draw = () => {
    p.background('rgba(230,230,230,0)')
    R = (255 - (p.mouseX / 9))
    B = (255 - (p.mouseY / 3))
    R2 = (p.mouseX / 9)
    B2 = (p.mouseY / 3)
    p.stroke(R2, G2, B2)
    p.fill(R2, G2, B2)

    p.arc(350, 330, 575, 625, p.HALF_PI, p.PI + p.PI)
    p.fill(R, G, B)

    p.quad(0, 320, 65, 260, 105, 355, 110, 465)

    p.quad(100, 305, 200, 230, 130, 560, 110, 505)
    p.quad(200, 230, 350, 255, 275, 680, 130, 560)
    p.quad(350, 255, 560, 355, 400, 705, 275, 680)

    p.quad(210, 155, 440, 155, 460, 355, 200, 230)
    p.quad(440, 155, 550, 255, 560, 355, 460, 355)

    p.quad(460, 385, 460, 540, 430, 555, 365, 515)
    p.fill(R2, G2, B2);

    p.quad(305, 370, 365, 355, 425, 395, 350, 400)
    p.quad(470, 405, 515, 400, 520, 430, 500, 440)

    p.quad(310, 595, 415, 600, 430, 615, 390, 640)
  }
}