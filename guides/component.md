# UI 组件库

## Wot UI

本项目使用 [Wot UI](https://wot-design-uni.cn)，基于 Vue3+TS 开发，提供 70+高质量组件，支持暗黑模式、国际化和自定义主题。

**为什么不使用官方组件库？**

1. 官方组件库不支持主题定制，样式修改复杂；
2. 最主要原因，组件少、使用复杂且功能少、不支持 ts, 举例：

   官方选择器使用示例：

   ```vue
   <template>
     <view class="uni-list">
       <view class="uni-list-cell">
         <view class="uni-list-cell-left"> 单列选择器： </view>
         <view class="uni-list-cell-db">
           <picker
             @change="bindPickerChange"
             :value="pickerIndex"
             :range="singleColumns"
             range-key="label"
           >
             <view class="uni-input">{{ array[pickerIndex].label }}</view>
           </picker>
         </view>
       </view>
     </view>
   </template>

   <script lang="ts" setup>
   const pickerIndex = ref(0);
   const singleColumnValue = ref("");
   const singleColumns = ref<Record<string, string>[]>([
     {
       label: "选项1",
       value: "1",
     },
     {
       label: "选项2",
       value: "2",
     },
     {
       label: "选项3",
       value: "3",
     },
   ]);
   function bindPickerChange(e) {
     pickerIndex.value = e.detail.value;
     singleColumnValue = singleColumns.value[e.detail.value].value;
   }
   </script>

   <style>
   // ...
   </style>
   ```

   wot ui 选择器示例：

   ```vue
   <template>
     <wd-picker
       v-model="singleColumnValue"
       :columns="singleColumns"
       label-width="200rpx"
       label="单列选择器"
       title="单列选择"
       clearable
     />
   </template>

   <script lang="ts" setup>
   const singleColumnValue = ref("");
   const singleColumns = ref<Record<string, string>[]>([
     {
       label: "选项1",
       value: "1",
     },
     {
       label: "选项2",
       value: "2",
     },
     {
       label: "选项3",
       value: "3",
     },
   ]);
   </script>
   ```

**为什么弃用 uview2.0、 uview-plus 组件库？**

1. uview 组件库不支持主题定制，不支持 ts，并且没有更新到 vue3；
2. uview-plus 是个人维护的，基于 uview2.0 修改，同样不支持主题定制，不支持 ts，格局太小（官网强制需要看广告才能用）。
