<template>
  <div>
    <el-upload
      class="avatar-uploader-quill"
      :action="action"
      :accept="accept"
      :data="data"
      :auto-upload="true"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      style="display: none">
    </el-upload>
    <quill-editor
      ref="myQuillEditor"
      v-model="value_"
      :options="editorOption"
      @change="onEditorChange($event)"
    ></quill-editor>
  </div>
</template>

<script>
  import {MessageWarning} from "../../../utils/utils";

  export default {
    name: 'quillBlock',
    props: {
      selValue: {
        default: '',
        type: String
      },
      action: {
        default: '',
        type: String
      },
      accept: {
        default: '',
        type: String
      },
      data: {
        default: function () {
          return {};
        },
        type: Object
      },
      maxSize: {
        default: 2,
        type: [Number,String]
      }
    },
    computed: {
      value_: {
        get(){
          return this.selValue;
        },
        set(v){

        }
      }
    },
    data() {
      return {

        editorOption: {
          // some quill options
          modules: {
            toolbar: {
              container: [
                ['bold', 'italic', 'underline'], // toggled buttons
                ['link', 'image'],
                [{'list': 'ordered'}, {'list': 'bullet'}],
                [{'indent': '-1'}, {'indent': '+1'}], // outdent/indent

                [{'size': ['small', false, 'large', 'huge']}], // custom dropdown
                [{'header': [1, 2, 3, 4, 5, 6, false]}],

                [{'color': []}, {'background': []}], // dropdown with defaults from theme
                [{'align': []}],
              ],
              handlers: {
                'image': function (value) {
                  if (value){
                    // 触发input框选择图片文件
                    document.querySelector('.avatar-uploader-quill input').click()
                  }else {
                    this.quill.format('image', false)// 禁用quill内部上传图片方法
                  }
                  //self.imgHandler(this)
                }
              }
            }
          }
        }
      }
    },
    methods: {
      onEditorChange(event){
        this.$emit("change", event);
      },
      handleAvatarSuccess(res, file){
        // res为图片服务器返回的数据
        // 获取富文本组件实例
        console.log(555, res);
        let quill = this.$refs.myQuillEditor.quill;
        // 如果上传成功
        if (res.code == '200') {
          // 获取光标所在位置
          let length = quill.getSelection().index;
          let imgUrl = res.data.url;
          // 插入图片  res.info为服务器返回的图片地址
          if (res.data.url && (res.data.url.indexOf("http://") == -1 || res.data.url.indexOf("https://") == -1)){
            imgUrl = "http:" + res.data.url;
          }
          quill.insertEmbed(length, 'image', imgUrl);
          // 调整光标到最后
          quill.setSelection(length + 1);
        } else {
          MessageWarning(res.desc);
        }
      },
      handleAvatarError(res, file){

      },
      beforeAvatarUpload(file){
        const isLt2M = file.size / 1024 / 1024 > this.maxSize;

        if (isLt2M) {
          MessageWarning('图片大小不能超过' + this.maxSize + "MB");
          return false;
        }
        return !isLt2M;
      }
    }
  }
</script>

<style scoped>

</style>
