import Axios from "axios";

export default function request(option) {
  return new Promise((resolve, reject) => {
    // 1.创建axios的实例
    const instance = Axios.create({
      // baseURL: "http://192.168.43.59:9001/",
      baseURL: "http://47.98.47.212:9001/",
      timeout: 10000,
    });

    // 配置请求和响应拦截
    instance.interceptors.request.use(
      (config) => {
        const token=localStorage.getItem('token')
        config.headers.Authorization = token
        return config;
      },
      (err) => {
        return err;
      }
    );

    instance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (err) => {
        return err;
      }
    );

    instance(option)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
