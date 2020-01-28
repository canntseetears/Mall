<template>
  <div>
    <div class="param">
      <table width="100%">
        <tr>
          <th width="20%">尺码</th>
          <th width="20%">裙长</th>
          <th>肩宽</th>
          <th>胸围</th>
          <th>袖长</th>
        </tr>
        <tr>
          <td>均码</td>
          <td>95</td>
          <td>37</td>
          <td>66</td>
          <td>58</td>
        </tr>
        <tr>
          <td>颜色</td>
          <td colspan="4">黑色</td>
        </tr>
        <tr>
          <td>季节</td>
          <td colspan="4">秋冬</td>
        </tr>
        <tr>
          <td>材质</td>
          <td colspan="4">针织</td>
        </tr>
        <tr>
          <td>裙长</td>
          <td colspan="4">中裙 (91-105cm)</td>
        </tr>
      </table>
    </div>
    <div>
      <img
        style="width:100%"
        src="https://s11.mogucdn.com/mlcdn/c024f5/190417_2d51ljj2a42lddkg49ibag494g3ca_1125x540.png_468x468.webp"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailParam"
};
</script>
<style scoped>
.param table {
  border-collapse: collapse;
  margin-top: 5px;
}
.param th {
  text-align: center;
  height: 42px;
}
.param td {
  text-align: center;
  height: 42px;
}
.param tr {
  border-bottom: 1px solid rgb(219, 212, 212);
}
</style>