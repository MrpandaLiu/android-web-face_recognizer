'''
LastEditors: panda_liu
LastEditTime: 2020-12-13 14:05:55
FilePath: \DIPproject\server\opencv\predict.py
Description: add some description
'''


import cv2
import sys

PublicPath = './opencv/'

subjects = ["", "Chang Liu", "Ruihong Xu", "Sihang Liu"]


def detect_face(img):
  gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
  face_cascade = cv2.CascadeClassifier(PublicPath+'opencv-files/lbpcascade_frontalface.xml')

  faces = face_cascade.detectMultiScale(gray, scaleFactor=1.2, minNeighbors=5)

  if(len(faces) == 0):
    return None, None
  
  (x, y, w, h) = faces[0];

  return gray[y:y+w, x:x+h], faces[0]

# 预测
def predict(test_img):
  # 获取图片的副本
  img = test_img.copy()
  # 调用训练好的模型
  face_recognizer.read(PublicPath+'trainner.yml')
  # 根据之前的预测函数得到人脸的正面部分
  face, rect = detect_face(img)
  # 预测 得到预测结果的标签
  label, confidence = face_recognizer.predict(face)
  # 根据标签获取对应的人名
  label_text = subjects[label]
  # 返回结果
  return img, label_text

try:
  test_img = cv2.imread(PublicPath+"test-data/" + sys.argv[1])
  predicted_img,text = predict(test_img)
  print(text)
except:
  print('error')

''' cv2.imshow('test', cv2.resize(predicted_img, (400, 500)))
cv2.waitKey(0)
cv2.destroyAllWindows() '''

