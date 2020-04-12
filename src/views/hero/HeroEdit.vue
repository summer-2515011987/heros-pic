<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">修改英雄</h2>
    <form>
      <div class="form-group">
        <label for="text">姓名</label>
        <input
          type="text"
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
      <button @click="upadata()" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
// 导入axios
import axios from "axios";

// 组件中获取动态路由中的id --->>$route.paeams.id
// 路由规则设置props:true,路由自动把id数据传递给组件
// 在组件中用props:['id']接收

//  根据id获取数据,发送axios请求

// 点击提交按钮,提交当前修改
// 导出组件
export default {
  //用props接收传过来的id
  props: ["id"],
  data() {
    return {
      formData: {
        name: "",
        gender: "男"
      }
    };
  },
  mounted() {
    this.getDataById();
  },
  methods: {
    //   根据id获取数据
    getDataById() {
      axios.get(`http://localhost:3000/heroes/${this.id}`).then(res => {
        // console.log(res);
        const { data, status } = res;
        if (status == 200) {
          this.formData = data;
        }
      });
    },
    upadata() {
      // 发送ajax请求 根据id修改 ,记得传入当前修改的数据
      axios
        .put(`http://localhost:3000/heroes/${this.id}`, this.formData)
        .then(res => {
          console.log(res);
          const status = res.status;
          if (status == 200) {
            //当状态为200的时候修改成功,跳转回英雄列表页
            this.$router.push("/hero");
          } else {
            alert("修改失败");
          }
        });
    }
  }
};
</script>

<style>
</style>