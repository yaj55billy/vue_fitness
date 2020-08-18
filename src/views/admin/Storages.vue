<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <h2 class="mt-sm-5 mt-4">圖片列表</h2>
    <table class="table table-admin mt-4">
      <thead>
        <tr>
          <th width="600" class="text-center">圖片</th>
          <th width="600" class="text-center">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in storages" :key="item.id">
          <td class="text-center">
            <img :src="item.path" alt="" style="max-width: 180px">
          </td>
          <td class="text-center">
            <button type="button"
            class="btn btn-outline-danger btn-sm"
            @click="openDelModal(item)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>

    <pagination :pagedata="pagination" @update="getData"></pagination>

    <div id="delStorageModal" class="modal fade"
      tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 id="exampleModalLabel" class="modal-title">
              <span>刪除圖片素材</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除這張圖片素材? (刪除後將無法恢復)
            <br>
            <img :src="tempStorage.path" alt="" style="max-width: 100%">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="deleteStorage(tempStorage.id)">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

/* global $ */

import pagination from '@/components/Pagination.vue';

export default {
  components: {
    pagination,
  },
  data() {
    return {
      storages: [],
      tempStorage: [],
      pagination: {},
      isLoading: false,
    };
  },
  props: ['token'],
  created() {
    this.getData();
  },
  methods: {
    getData(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}
      /admin/storage?page=${page}`;
      this.axios.get(url).then((res) => {
        this.storages = res.data.data;
        this.pagination = res.data.meta.pagination;
        this.isLoading = false;
      });
    },
    openDelModal(item) {
      this.tempStorage = item;
      $('#delStorageModal').modal('show');
    },
    deleteStorage(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/storage/${id}`;
      this.axios.delete(url).then(() => {
        $('#delStorageModal').modal('hide');
        this.$bus.$emit('notice-user', '圖片刪除成功~~');
        this.isLoading = false;
        this.getData();
      }).catch(() => {
        this.isLoading = false;
        $('#delStorageModal').modal('hide');
        this.$bus.$emit('notice-user', '圖片刪除失敗，請再檢查看看');
      });
    },
  },
};
</script>
