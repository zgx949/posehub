# 第一步：基于Node.js镜像构建，这里使用LTS版本作为基础镜像
FROM node:22-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制项目文件到容器中
COPY . /app

RUN yarn config set registry https://registry.npmmirror.com

# 安装项目依赖
RUN yarn install -g

# 使用Vite构建项目，这里假设vite.config.js位于项目根目录且已配置好
RUN yarn build

# 第二步：构建Nginx镜像并部署构建后的静态文件
FROM nginx:latest

# 移除默认的Nginx配置文件
#RUN rm /etc/nginx/conf.d/default.conf

# 复制自定义的Nginx配置文件，这里假设你有一个名为vite-nginx.conf的配置文件
#COPY nginx.conf /etc/nginx/conf.d/

# 将Vite构建的生产文件从Node.js构建阶段复制到Nginx的HTML目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 暴露HTTP端口
EXPOSE 80

# 启动Nginx服务
CMD ["nginx", "-g", "daemon off;"]