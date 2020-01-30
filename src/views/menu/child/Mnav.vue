<template>
  <NavBar>
      <div slot='left' class='back'>
        <img src="@/assets/img/common/back.png">
      </div> 
      <div slot='center' class='nav'>
        <input type="search" id='search-l' placeholder="请输入搜索内容">
        <div class='search-r'>
          <svg t="1580378635555" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3015" width="32" height="32">
            <path d="M192 448c0-141.152 114.848-256 256-256s256 114.848 256 256-114.848 256-256 256-256-114.848-256-256z m710.624 409.376l-206.88-206.88A318.784 318.784 0 0 0 768 448c0-176.736-143.264-320-320-320S128 271.264 128 448s143.264 320 320 320a318.784 318.784 0 0 0 202.496-72.256l206.88 206.88 45.248-45.248z" fill="#201cbc" p-id="3016"></path>
          </svg>
        </div>
      </div>
    </NavBar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: 'Mnav',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content:space-around;
  padding: 8px 12px;
}
.back img {
  height: 16px;
  margin-top:14px;
}
.menu #search-l{
  height: 30px;
  width: 180px;
  border-radius: 8px;
  border:1px solid rgb(104, 102, 102);
}
#search-l::-webkit-input-placeholder {
  color: rgb(100, 95, 95);
  font-size:16px;
  text-align: center;
}
.menu .search-r svg {
  height: 28px;
  width: 28px;
}
</style>