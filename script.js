function CalcularAreaDoTriangulo() {
  const base = parseFloat(prompt("Informe a base do triangulo"));
  const altura = parseFloat(prompt("Informe a altura do triangulo"));
  return (base * altura) / 2;
}
function CalcularAreaDoRetangulo() {
  const base = parseFloat(prompt("Digite o valor da base do retangulo"));
  const altura = parseFloat(prompt("Digite a altura do retangulo"));
  return base * altura;
}
function AreaDoQuadrado() {
  const base = parseFloat(prompt("Digite o valor do lado do quadrado"));
  return lado * lado;
}
function CalcularAreaDoTrapezio() {
  const baseMaior = parseFloat(
    prompt("Digite o valor da base maior do trapezio")
  );
  const baseMenor = parseFloat(
    prompt("Digite o valor da base menor do trapezio")
  );
  const altura = parseFloat(prompt("Digite o valor da altura do trapezio"));
  return ((baseMaior + baseMenor) * altura) / 2;
}
function AreaDoCirculo() {
  const raio = parseFloat(prompt("Digite o valor do raio do circulo"));
  return 3.14 * raio * raio;
}
