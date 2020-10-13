'''
LastEditors: panda_liu
LastEditTime: 2020-10-08 13:06:43
FilePath: \数字图像处理\server\opencv\predict.py
Description: add some description
'''


import cv2
import sys

PublicPath = './opencv/'

subjects = ["", "Chang Liu"]


def detect_face(img):
  gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

  face_cascade = cv2.CascadeClassifier(PublicPath+'opencv-files/lbpcascade_frontalface.xml')

  faces = face_cascade.detectMultiScale(gray, scaleFactor=1.2, minNeighbors=5)

  if(len(faces) == 0):
    return None, None
  
  (x, y, w, h) = faces[0];

  return gray[y:y+w, x:x+h], faces[0]

def predict(test_img):
  img = test_img.copy()

  face_recognizer.read(PublicPath+'trainner.yml')

  face, rect = detect_face(img)

  label, confidence = face_recognizer.predict(face)

  label_text = subjects[label]

  draw_rectangle(img, rect)

  draw_text(img, label_text, rect[0], rect[1]-5)

  return img, label_text

def draw_rectangle(img ,rect):
  (x, y, w, h) = rect
  cv2.rectangle(img, (x,y), (x+w, y+h), (0, 255, 0), 2)

def draw_text(img, text, x, y):
  cv2.putText(img, text, (x, y), cv2.FONT_HERSHEY_PLAIN, 1.5, (0, 255, 0), 2)

face_recognizer = cv2.face.LBPHFaceRecognizer_create()

''' try: '''

test_img = cv2.imread(PublicPath+"test-data/" + sys.argv[1])

predicted_img,text = predict(test_img)

print(text)
''' 
except:
  print('error') '''

''' cv2.imshow('test', cv2.resize(predicted_img, (400, 500)))
cv2.waitKey(0)
cv2.destroyAllWindows() '''

