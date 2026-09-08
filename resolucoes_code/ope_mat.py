# Vamos solicitar dois números e uma operação para calcular entre eles.
num1 = float(input("Digite o primeiro número: "))
operacao = input("Digite a operação (+, -, / ou *): ")
num2 = float(input("Digite o segundo número: "))

if operacao == "+":
	resultado = num1 + num2
elif operacao == "-":
	resultado = num1 - num2
elif operacao == "*":
	resultado = num1 * num2
elif operacao == "/" and num2 != 0:
	resultado = num1 / num2
else:
	resultado = "Operação inválida ou divisão por zero."

print(f"Resultado: {resultado}")