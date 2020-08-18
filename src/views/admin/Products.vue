<template>
  <div class="mt-4">
    <!-- vue-loading -->
    <loading :active.sync="isLoading"></loading>
    <h2>產品列表</h2>
    <div class="text-right mt-sm-2 mt-4">
      <button class="btn btn-primary" @click="openModal('new')">
        建立新的產品
      </button>
    </div>
    <table class="table table-admin table-rwd mt-3">
      <thead>
        <tr>
          <th width="160">分類</th>
          <th width="780">產品名稱</th>
          <th width="100">原價</th>
          <th width="100">售價</th>
          <th width="160">是否啟用</th>
          <th width="140">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in products" :key="item.id">
          <td data-th="分類">{{ item.category }}</td>
          <td data-th="產品名稱">{{ item.title }}</td>
          <td data-th="原價">{{ item.origin_price | toThousands }}</td>
          <td data-th="售價">{{ item.price | toThousands }}</td>
          <td data-th="是否啟用">
            <span v-if="item.enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td data-th="編輯">
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', item)">編輯</button>
              <button type="button" class="btn btn-outline-danger btn-sm"
                @click="openModal('delete',item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 換頁元件 -->
    <pagination :pagedata="pagination" @update="getProducts"></pagination>
    <!-- 換頁元件 END -->

    <!-- 新增、編輯產品 -->
    <div id="productModal" class="modal fade"
     tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 id="exampleModalLabel" class="modal-title">
              <span v-if="tempProduct.id">編輯 {{ tempProduct.title }}</span>
              <span v-else>新增產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-left">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="imageUrl_0">輸入圖片網址</label>
                  <input id="imageUrl_0" v-model="tempProduct.imageUrl[0]"
                  type="text" class="form-control"
                    placeholder="請輸入圖片連結">
                </div>
                <div class="form-group">
                  <label for="imageUrl_1">輸入圖片網址</label>
                  <input id="imageUrl_1" v-model="tempProduct.imageUrl[1]"
                  type="text" class="form-control"
                    placeholder="請輸入圖片連結">
                </div>
                <div class="form-group">
                  <label for="imageUrl_2">輸入圖片網址</label>
                  <input id="imageUrl_2" v-model="tempProduct.imageUrl[2]"
                  type="text" class="form-control"
                    placeholder="請輸入圖片連結">
                </div>
                <div class="form-group">
                  上傳圖片
                  <div class="spinner-border text-primary" role="status"
                  style="width: 12px; height: 12px;"
                  v-if="fileUpLoading">
                    <span class="sr-only">Loading...</span>
                  </div>
                  <input type="file" class="form-control h-auto"
                  id="customFile" @change="uploadFile">
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl[0]" alt>
                <img class="img-fluid" :src="tempProduct.imageUrl[1]" alt>
                <img class="img-fluid" :src="tempProduct.imageUrl[2]" alt>
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input id="title" v-model="tempProduct.title"
                  type="text" class="form-control" placeholder="請輸入標題">
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input id="category" v-model="tempProduct.category"
                      type="text" class="form-control"
                      placeholder="請輸入分類">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">單位</label>
                    <input id="unit" v-model="tempProduct.unit"
                    type="unit" class="form-control" placeholder="請輸入單位">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input id="origin_price" v-model="tempProduct.origin_price"
                      type="number" class="form-control"
                      placeholder="請輸入原價">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input id="price" v-model="tempProduct.price" type="number" class="form-control"
                      placeholder="請輸入售價">
                  </div>
                </div>
                <hr>
                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea id="description" v-model="tempProduct.description"
                    type="text" class="form-control"
                    placeholder="請輸入產品描述">
                  </textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea id="description" v-model="tempProduct.content"
                    type="text" class="form-control"
                    placeholder="請輸入說明內容">
                  </textarea>
                </div>
                <div class="form-group">
                  <div class="form-check">
                    <input id="enabled" v-model="tempProduct.enabled"
                      class="form-check-input" type="checkbox">
                    <label class="form-check-label" for="enabled">是否啟用</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-primary" @click="updateData">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 新增、編輯產品 END -->

    <!-- 刪除產品 modal  -->
    <div id="delProductModal" class="modal fade"
      tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 id="exampleModalLabel" class="modal-title">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="deleteProduct">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 刪除產品 modal END  -->
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
      products: [],
      pagination: {},
      tempProduct: {
        imageUrl: [],
      },
      fileUpLoading: false,
      isLoading: false,
    };
  },
  props: ['token'],
  created() {
    // 初始取得產品列表
    this.getProducts();
  },
  methods: {
    getProducts(num = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/products?page=${num}`;
      this.axios.get(api).then((res) => {
        this.products = res.data.data;
        this.pagination = res.data.meta.pagination; // 分頁的資料傳遞會用到
        this.isLoading = false;
      });

      // 從新增、編輯、刪除重新取得初始化 tempProduct
      if (this.tempProduct.id) {
        this.tempProduct = {
          imageUrl: [],
        };
      } else {
        this.tempProduct = {
          imageUrl: [],
        };
      }
      // 從新增、編輯、刪除重新取得初始化 tempProduct END
    },
    openModal(status, item) {
      if (status === 'new') {
        this.tempProduct = {
          imageUrl: [],
        };
        $('#productModal').modal('show');
      } else if (status === 'edit') {
        // 取得 API 資料，這樣才知道""編輯""是哪一筆
        this.isLoading = true;
        const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product/${item.id}`;
        this.axios.get(url).then((res) => {
          this.tempProduct = res.data.data;
          $('#productModal').modal('show');
          this.isLoading = false;
        });
      } else if (status === 'delete') {
        // 取得 API 資料，這樣才知道""刪除""是哪一筆
        this.isLoading = true;
        const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product/${item.id}`;
        this.axios.get(url).then((res) => {
          this.tempProduct = res.data.data;
          $('#delProductModal').modal('show');
          this.isLoading = false;
        });
      }
    },
    updateData() {
      if (this.tempProduct.id) {
        // 編輯
        this.isLoading = true;
        const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`;
        this.axios.patch(url, this.tempProduct)
          .then(() => {
            $('#productModal').modal('hide');
            this.$bus.$emit('notice-user', '產品編輯成功');
            this.isLoading = false;
            this.getProducts();
          }).catch((error) => {
            this.isLoading = false;
            const errorText = error.response.data.message;
            $('#productModal').modal('hide');
            this.$bus.$emit('notice-user', `產品編輯失敗,+${errorText}`);
          });
      } else {
        // 新增
        this.isLoading = true;
        const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product`;
        this.axios.post(url, this.tempProduct)
          .then(() => {
            $('#productModal').modal('hide');
            this.$bus.$emit('notice-user', '產品新增成功');
            this.isLoading = false;
            this.getProducts();
          }).catch(() => {
            this.isLoading = false;
            $('#productModal').modal('hide');
            this.$bus.$emit('notice-user', '產品新增失敗，請再檢查看看');
          });
      }
    },
    deleteProduct() {
      // 刪除
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`;
      this.axios.delete(url).then(() => {
        $('#delProductModal').modal('hide');
        this.$bus.$emit('notice-user', '產品已刪除');
        this.isLoading = false;
        this.getProducts();
      }).catch(() => {
        this.isLoading = false;
        $('#delProductModal').modal('hide');
        this.$bus.$emit('notice-user', '產品刪除失敗，請再檢查看看');
      });
    },
    uploadFile() { // 上傳圖片
      this.fileUpLoading = true;
      const catchFile = document.querySelector('#customFile').files[0];
      const formData = new FormData();
      formData.append('file', catchFile);
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/storage`;
      this.axios.post(url, formData, {
        header: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        this.fileUpLoading = false;
        if (res.status === 200) {
          this.tempProduct.imageUrl.push(res.data.data.path);
        }
        document.querySelector('#customFile').value = '';
      })
        .catch(() => {
          this.$bus.$emit('notice-user', '檔案上傳失敗，請再檢查是不是檔案大小超過 2MB');
          this.fileUpLoading = false;
        });
    },
  },
};
</script>
