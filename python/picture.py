import face_recognition as fr
from engine import reconhece_face, get_vetores

desconhecido = reconhece_face("./img/desconhecido.jpg")
if (desconhecido[0]):
    rosto_desconhecido = desconhecido[1][0]
    rostos_cadastrados,  nome_dos_rostos = get_vetores()
    resultados = fr.compare_faces(rostos_cadastrados,  rosto_desconhecido)
    print(resultados)

    for i in range(len(nome_dos_rostos)):
        resultado = resultados[i]
        if (resultado):
            print("rosto do", nome_dos_rostos[i], "foi reconhecido")


else:
    print('este rosto não pertence a base de dados')
