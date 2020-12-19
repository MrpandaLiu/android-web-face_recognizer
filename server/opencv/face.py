'''
LastEditors: panda_liu
LastEditTime: 2020-12-13 13:47:34
FilePath: \DIPproject\server\opencv\face.py
Description: add some description
'''
import cv2
import os
import sys
import numpy as np

PublicPath = './opencv/'


#使用OpenCV用来检测脸部的函数
def detect_face(img):
  # 将测试图像转变为灰度图像
  gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
  # 加载快速LBP人脸识别器
  face_cascade = cv2.CascadeClassifier(PublicPath+'opencv-files/lbpcascade_frontalface.xml')
  # 检测多尺度图像并预测
  # scaleFactor表示每次图像尺寸减小的比例
  # minNeighbors表示每一个目标至少要被检测到n次才算是真的目标
  faces = face_cascade.detectMultiScale(gray, scaleFactor=1.2, minNeighbors=5)
  # 如果未检测到面部 返回none
  if(len(faces) == 0):
    return None, None
  # 我们提取数组中的第一张人脸
  (x, y, w, h) = faces[0];
  # 通过截取 返回图片的正面部分
  return gray[y:y+w, x:x+h], faces[0]

# 准备训练数据
# 返回若干列表 每一个列表对应一个标签
def prepare_training_data(data_folder_path):
  # 获取数据集文件夹
  dirs = os.listdir(data_folder_path)
  # 用来保存所有主题的面孔
  faces = []
  # 用来保存所有主题的标签
  labels = []
  # 遍历训练集文件夹 得到每个数据集的文件夹
  for dir_name in dirs:
    if not dir_name.startswith("s"):
      continue;
    label = int(dir_name.replace("s", ""))
    subject_dir_path = data_folder_path + "/" + dir_name
    subject_images_names = os.listdir(subject_dir_path)
    # 遍历每个数据集文件夹中的图片
    for image_name in subject_images_names:
      if image_name.startswith("."):
        continue;
      # 建立图像路径并阅读图像
      image_path = subject_dir_path + "/" + image_name
      image = cv2.imread(image_path)
      cv2.waitKey(100)
      # 调用预测函数得到预测结果
      face, rect = detect_face(image)
      # 忽略未检测到的脸部
      if face is not None:
        faces.append(face)
        labels.append(label)
  cv2.waitKey(1)
  # 返回两个列表
  return faces, labels

print("Preparing data...")
faces, labels = prepare_training_data(PublicPath+"training-data")
print("Data prepared")

print("Data prepared")

print("Total faces: ", len(faces))
print("Total labels: ", len(labels))

# 创建LBPH人脸识别器
face_recognizer = cv2.face.LBPHFaceRecognizer_create()
# 将刚才的训练模型结果保存至本地
face_recognizer.train(faces, np.array(labels))
face_recognizer.save(PublicPath+'trainner.yml')





