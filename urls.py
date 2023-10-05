import os

def obtener_direcciones_relativas(directorio_raiz):
    direcciones_relativas = []

    for ruta_actual, directorios, archivos in os.walk(directorio_raiz):
        for archivo in archivos:
            # Obtener la dirección relativa del archivo
            direccion_relativa = os.path.relpath(os.path.join(ruta_actual, archivo), directorio_raiz)
            direcciones_relativas.append(direccion_relativa)

    return direcciones_relativas

if __name__ == "__main__":
    directorio_raiz = "./public/"  # Reemplaza con la ruta de tu directorio
    direcciones = obtener_direcciones_relativas(directorio_raiz)

    archivo_txt = "direcciones_relativas.txt"

    with open(archivo_txt, "w") as archivo:
        for direccion in direcciones:
            archivo.write(direccion + "\n")

    print(f"Las direcciones relativas se han guardado en {archivo_txt}")
