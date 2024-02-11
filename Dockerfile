# Nginx 이미지를 베이스 이미지로 사용
FROM nginx:alpine

# 빌드된 앱의 파일을 Nginx 서버의 html 디렉토리로 복사
COPY build /usr/share/nginx/html

# 80 포트로 서비스
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]

