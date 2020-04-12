<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄列表</h2>
    <!-- <a class="btn btn-success" href="add.html">Add</a> -->
    <router-link class="btn btn-success" :to="{name:'heroadd'}">
      <a>添加</a>
    </router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>序号</th>
            <th>姓名</th>
            <th>年龄</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" v-bind:key="item.id">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <!-- <a href="edit.html">编辑</a> -->
              <!-- 配置编辑英雄功能导航 -->
              <!-- <router-link :to="'/hero/edit/'+item.id">编辑</router-link> -->
              <router-link :to="{name:'heroedit',params:{id:item.id}}">编辑</router-link>&nbsp;&nbsp;
              <a href="javascript:" @click="del(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 导出组件
export default {
  data() {
    return {
      list: [] //list用来存放数据,起始的时候默认是空数组
    };
  },
  // 视图加载完毕后会自动调用mounted(){}
  mounted() {
    this.loadData();
  },
  // 在methods中定义方法发送ajax请求,在mounted(){}中调用
  methods: {
    // ----显示列表功能--
    loadData() {
      this.axios
        .get("heroes")
        .then(res => {
          // console.log(res);
          // 解构
          const { data, status } = res;
          if (status == 200) {
            this.list = data;
          } else {
            alert("数据读取失败");
          }
        })
        .catch(err => {
          alert("服务器异常" + err);
        });
    },

    //删除列表功能
    del(ID) {
      // 1.提示一下是否删除
      // 用户点取消的时候是false,!(取反)则为true
      if (!confirm("确定要删除吗?")) {
        // 当用户点取消的时候阻止a标签的默认跳转行为(阻止a标签执行)
        return false;
      }
      // 2.发送axios请求,删除数据
      // 模板字符串:不用考虑单双引号的嵌套问题,在模板字符串中使用变量${变量名}
      this.axios.delete(`heroes/${ID}`).then(res => {
        // console.log(res);
        if (res.status == 200) {
          // alert("删除成功");
          // 3.刷新页面
          this.loadData();
        }
      });
    }
  }
};
</script>

<style>
</style>