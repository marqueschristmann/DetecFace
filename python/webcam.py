import numpy as np
import face_recognition as fr
import cv2
from engine import get_vetores

rostos_cadastrados,  nome_dos_rostos = get_vetores()

video_capture = cv2.VideoCapture(0)
while True:
    ret, frame = video_capture.read()

    rgb_frame = frame[:, :, ::-1]

    face_locations = fr.face_locations(rgb_frame)
    face_encodings = fr.face_encodings(rgb_frame, face_locations)

    for (top, right, bottom, left), face_encoding in zip(face_locations, face_encodings):
        resultados = fr.compare_faces(rostos_cadastrados,  face_encoding)
        print(resultados)

        face_distance = fr.face_distance(rostos_cadastrados, face_encoding)

        indiificador = np.argmin(face_distance)
        if resultados[indiificador]:
            nome = nome_dos_rostos[indiificador]

        else:
            nome = "não pertence ao banco de imagem"

        cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)

        cv2.rectangle(frame, (left, bottom - 35),
                      (right, bottom), (0, 0, 255), cv2.FILLED)
        font = cv2.FONT_HERSHEY_SIMPLEX
        cv2.putText(frame, nome, (left + 6, bottom - 6),
                    font, 1.0, (255, 255, 255), 1)

        cv2.imshow('Webcam_facerecognition', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break


video_capture.release()
cv2.destroyAllWindows()
