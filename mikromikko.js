const svg = document.getElementById("s");
const pathData = [
  { path: "M332,255L317,27L44,36L57,274L332,255Z" },
  { path: "M308,218L299,48L70,56L79,229L308,218Z" },
  { path: "M325,286L298,262L60,277L72,301L325,286Z" },
  { path: "M38,236L38,306L69,370L75,302L38,236Z" },
  { path: "M44,37L33,52L40,229L57,266L44,37Z" },
  { path: "M325,290L75,304L75,373L327,356L325,290Z" },
  { path: "M451,421L406,352L14,376L28,451L451,421" },
  { path: "M294,209L286,55L82,62L91,220L294,209Z" },
  {
    path:
      "M288.645,105.912L177,112L174,61L137,61L139,113L86,116L89,164L140,161L146,217L182,214L178,158L291,152L288.645,105.912Z",
    fill: "#003181",
  },
];
const t0 = +new Date();
function draw() {
  const t = (+new Date() - t0) / 1000 / 5;
  svg.innerHTML = "";
  const rc = rough.svg(svg);
  const roughness = 2 + Math.sin(t) * 2;
  pathData.forEach((p) => {
    const c = rc.path(
      p.path,
      Object.assign(
        {
          stroke: "rgba(0,0,0,0.7)",
          strokeWidth: "3",
          roughness,
          fill: "rgba(220,220,220,0.4)",
          fillStyle: "solid",
        },
        p
      )
    );
    svg.appendChild(c);
  });
}
if (svg) {
  setInterval(draw, 1000 / 24);
}
