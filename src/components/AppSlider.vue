<template>
  <div class="row">
    <div class="col-sm-3 col-md-2 sidebar">
      <ul class="nav nav-sidebar">
        <!-- <li class="active">
            <a href="#">
              Overview
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li>
            <a href="#">Reports</a>
          </li>
          <li>
            <a href="#">Analytics</a>
        </li>-->
        <!-- 配置导航 -->
        <router-link to="/hero" tag="li">
          <a>英雄列表</a>
        </router-link>
        <router-link to="/weapon" tag="li">
          <a>武器列表</a>
        </router-link>
        <router-link to="/equip" tag="li">
          <a>装备列表</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>