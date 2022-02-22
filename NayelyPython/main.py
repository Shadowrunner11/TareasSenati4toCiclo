print("Hola soy Tony")

respuestasBot = {
    "saludo": "buenos dias"

}
def conversar ():
    mensaje=input()
    if respuestasBot["saludo"] in mensaje:
        mensaje =input("que deseas convertir \n")
    elif respuestasBot["saludo"] in mensaje:
        mensaje =input("Hola como estas, buenos dias en que te ayudo\n")


while 1:
    conversar()