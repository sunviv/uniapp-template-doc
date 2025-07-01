# 下拉刷新、上拉加载

移动端开发中，分页数据通常采用上拉加载、下拉刷新的方式实现，官方实现起来相对比较复杂，须结合 uniapp 的事件机制、组件、API 等，这里提供一种简单的实现方式 `z-paging`。

先看一下常规的实现方式：

```vue
<template>
  <view>
    <!-- 其它内容：搜索框等 -->
    <scroll-view
      show-scrollbar="true"
      style="height: 300px"
      scroll-y="true"
      :refresher-enabled="isOpenRefresh"
      :refresher-triggered="triggered"
      :refresher-threshold="100"
      refresher-background="gray"
      @refresherpulling="onPulling"
      @refresherrefresh="onRefresh"
      @refresherrestore="onRestore"
      @refresherabort="onAbort"
      @scroll="onScroll"
      @scrolltolower=loadMore"
    >
      <view class="item" v-for="(item, index) in dataList" :key="index">
        {{ item }}
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      triggered: false,
      dataList: [],
      page: 0,
      isOpenRefresh: true, // 是否开启下拉
    };
  },
  onLoad() {
    this._freshing = false;
    this.getData();
  },
  methods: {
    // 自定义下拉刷新控件被下拉
    onPulling(e) {
      console.log("onpulling", e);
      if (e.detail.deltaY < 0) return; // 防止上滑页面也触发下拉
      this.triggered = true;
    },
    // 自定义下拉刷新被触发
    onRefresh() {
      if (this._freshing) return;
      this._freshing = true;
      this.page++;
      setTimeout(() => {
        this.triggered = false;
        this._freshing = false;
        this.getData();
      }, 500);
    },
    // 自定义下拉刷新被复位
    onRestore() {
      this.triggered = "restore"; // 需要重置
      console.error("onRestore");
    },
    // 自定义下拉刷新被中止
    onAbort() {
      console.error("onAbort");
    },

    // 上拉到底部触发
    loadMore() {
      console.log("加载更多");
      // TODO：调用接口，判断是否需要拼接数据
    },
  },
};
</script>
```

**`z-paging`方式实现，无需关注分页逻辑，提供接口即可**

```vue
<template>
  <z-paging ref="pagingRef" v-model="dataList" :fixed="false" auto-show-system-loading @query="queryList">
</template>

<script lang="ts" setup>
const pagingRef = ref<ZPagingRef> ()
const dataList = ref<ListItem[]>([])

async function queryList(pageNo: number, pageSize: number) {
  console.log('[ pageNo ] >', pageNo)
  console.log('[ pageSize ] >', pageSize)
  const { list } = await apiList({ page: pageNo, pageSize, searchValue: searchValue.value })
  pagingRef.value?.complete(list)
}
</script>
```
