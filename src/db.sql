# DB 생성
DROP DATABASE IF EXISTS photo_album;
CREATE DATABASE photo_album;
USE photo_album;

# 테이블 생성
CREATE TABLE photos (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    upload_date DATETIME NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    file_path VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL  -- 'url' 컬럼 추가
);

# 데이터 생성 예시
INSERT INTO photos
SET upload_date = NOW(),
file_name = 'image01.jpg',
file_path = '/uploads/image01.jpg',
url = 'http://localhost:5000/uploads/image01.jpg';  -- 'url' 값 추가

INSERT INTO photos
SET upload_date = NOW(),
file_name = 'image02.jpg',
file_path = '/uploads/image02.jpg',
url = 'http://localhost:5000/uploads/image02.jpg';  -- 'url' 값 추가

INSERT INTO photos
SET upload_date = NOW(),
file_name = 'image03.jpg',
file_path = '/uploads/image03.jpg',
url = 'http://localhost:5000/uploads/image03.jpg';  -- 'url' 값 추가
