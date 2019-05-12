<template>
  <div class="pg">
    <div class="pg-nav">
      <div>
        <p>
          当前位置：
          <a href="index.html">首页</a>&nbsp;/&nbsp;
          <a href="contact.html">联系我们</a>
        </p>
      </div>
    </div>
    <div class="contactpg">
      <div class="clearfix">
        <div>
          <p>固定电话：021-59164317</p>
          <p>移动电话：13917276958</p>
          <p>联系邮箱：server@service.com</p>
        </div>
        <div>
          <ve-amap :settings="chartSettings" :series="chartSeries" :tooltip="chartTooltip"></ve-amap>
        </div>
      </div>

      <!-- <form>
        <p>在线留言：</p>
        <input placeholder="姓名">
        <input placeholder="联系电话">
        <textarea placeholder="输入消息"></textarea>
        <input type="button" value="发送">
      </form> -->
    </div>
  </div>
</template>
<script>
export default {
  data () {
      this.chartSettings = {
        key: '4b5f2cf2cba25200cc6b68c398468899',
        v: '1.4.3',
        amap: {
          resizeEnable: true,
          center: [121.2730282545, 31.3897196322],
          zoom: 18
        }
      }
      this.chartTooltip = { show: true }
      return {
        chartSeries: [
          {
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [
              [121.2730282545, 31.3897196322, 1] // 经度，维度，value，...
            ]
          }
        ]
      }
    }
};
</script>
<style scoped>
</style>
