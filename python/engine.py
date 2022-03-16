import face_recognition as fr


def reconhece_face(url_fotos):
    foto = fr.load_image_file(url_fotos)
    rostos = fr.face_encodings(foto)
    if (len(rostos) > 0):
        return True, rostos

    return False, []


def get_vetores():
    rostos_cadastrados = []
    nome_dos_rostos = []

    marques1 = reconhece_face("./img/marques1.jpg")
    if (marques1[0]):
        rostos_cadastrados.append(marques1[1][0])
        nome_dos_rostos.append("marques")
    pessoa = reconhece_face("./img/pessoa.jpeg")
    if (pessoa[0]):
        rostos_cadastrados.append(pessoa[1][0])
        nome_dos_rostos.append("pessoa")

    return rostos_cadastrados, nome_dos_rostos
