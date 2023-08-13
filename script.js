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
function Menu() {
  return prompt(
    " Calculadora Geométrica\n" +
      "1. Calcular área de triângulo\n" +
      "2. Calcular área de retângulo\n" +
      "3. Calcular área de quadrado\n" +
      "4. Calcular área de trapézio\n" +
      "5. Calcular área de círculo\n" +
      "6. Sair\n"
  );
}
function Main() {
  let opçao = "";

  do {
    opçao = Menu();
    let resultado;

    switch (opçao) {
      case "1":
        resultado = CalcularAreaDoTriangulo();
        break;
      case "2":
        resultado = CalcularAreaDoRetangulo();
        break;
      case "3":
        resultado = AreaDoQuadrado();
        break;
      case "4":
        resultado = CalcularAreaDoTrapezio();
        break;
      case "5":
        resultado = AreaDoCirculo();
        break;
      case "6":
        alert("Saindo");
        break;
      default:
        alert("Opção invalida!");
        break;
    }
    if (resultado) {
      alert("Resultado: " + resultado);
    }
  } while (opçao !== "6");
}
Main();
