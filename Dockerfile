# openjdk 8
FROM node:12
# image maintainer
LABEL maintainer="sunrise5318@gmail.com"

# 리눅스에서 cd를 친 후 /home/node로 이동하기
WORKDIR /home/node

# 현재 디렉토리의 파일을 컨테이너로 복사하기.
COPY . .

# NPM 으로 node_module 설치하기
RUN npm install -f --silent

# 개발환경으로 실행하기.
ENTRYPOINT ["npm", "start"]


