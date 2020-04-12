<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="text">姓名</label>
        <input
          type="email"
          class="form-control"
          id="txtName"
          v-model="formData.name"
          placeholder="姓名"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">性别</label>
        <!-- <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />-->
        <select class="form-control" id="gender" v-model="formData.gender">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <!-- button标签默认是提交按钮 我们需要阻止默认行为-->
      <button class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
// 导入axios
import axios from "axios";

// 1.绑定文本框和下拉框(获取用户需要添加的数据) √
// 2.拿到数据之后发送ajax请求                 √
// 3.添加成功后跳转回英雄列表页
// 导出组件
export default {
  data() {
    return {
      // 文本框属性有多个可以包装成对象的形式
      // 封装表单数据
      formData: {
        name: "",
        gender: "男"
      }
    };
  }
};
</script>

<style>
</style>